const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/cms_pendidikan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Rute
app.use('/api/users', userRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
