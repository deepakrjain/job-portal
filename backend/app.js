const express = require('express');
const cors = require('cors');
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

db.connect((err) => {
    if (err) console.error('Database connection failed:', err);
    else console.log('Connected to MySQL database');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));