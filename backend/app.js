// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/candidate', candidateRoutes);

mongoose.connect('mongodb://localhost:27017/jobportal', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection failed:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});