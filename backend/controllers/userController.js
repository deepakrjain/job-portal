const db = require('../config/db'); // Database connection

// Get user details by email
const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;

        // Query the database for the user
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = rows[0];
        res.status(200).json({
            email: user.email,
            role: user.role, // Ensure the 'role' column exists in the 'users' table
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getUserByEmail };