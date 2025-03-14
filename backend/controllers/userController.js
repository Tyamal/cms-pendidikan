const User = require('../models/User');

// Fungsi untuk menambahkan pengguna
exports.createUser  = async (req, res) => {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json(user);
