const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:Hallo123@cluster0.rlukesy.mongodb.net/?retryWrites=true&w=majority')
        console.log("MongoDB connected!");
    }catch (e){
        console.log("Connection failed!");
    }
};

module.exports = connectDB;