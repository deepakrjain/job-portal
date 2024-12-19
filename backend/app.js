const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config();

const db = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/candidate', candidateRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);

// Catch-all route to handle the root URL
app.get('/', (req, res) => {
    res.send('Welcome to Job Portal');
  });  

db.connect((err) => {
    if (err) console.error('Database connection failed:', err);
    else console.log('Connected to MySQL database');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));