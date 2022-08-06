const mongoose = require('mongoose');

const mongoStore = async () => {
    await mongoose.connect('mongodb://localhost:27017/users_db')
    console.log('mongoose connected!')
};

module.exports = mongoStore;
