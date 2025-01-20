const mongoose = require('mongoose');

const dbURL = 'mongodb://192.168.1.9:27017/Sift';
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));
