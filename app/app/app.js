const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/academicProgress', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb://127.0.0.1:27017/academicProgress',{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}); 


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// JWT secret
const JWT_SECRET = 'your_secret_key';

// Schemas and Models
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model('User', UserSchema);

// Routes
// Serve HTML pages
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', './DashBoard/dashboard.html'));
});

// Register route
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    res.json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering user!', error: err.message });
  }
});

// Login route
// Login route
app.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: 'User not found!' });
      }
  
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials!' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
  
      res.json({
        message: 'Login successful!',
        token,
        userName: user.name, // Send username with the response
      });
    } catch (err) {
      res.status(500).json({ message: 'Error logging in!', error: err.message });
    }
  });
  

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
