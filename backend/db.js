const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:goodfood123456@cluster0.j57akjo.mongodb.net/maindb?retryWrites=true&w=majority"

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);

  }
}

module.exports = mongoDB;