// // npm install mongoose
// const mongoose = require('mongoose');

// const connectDB = (url)=>{
//     // remember this is temporary and needs to be replaced
//     // const connectString = '';

//     // mongoose.connect(connectString).
//     // then(()=>console.log('databse connected successfully')).
//     // catch((err=>console.log(err)))

//     return mongoose.connect(url,{});
// }

// module.exports = connectDB;

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://matthew:1234@matthewcluster.chtewfp.mongodb.net/Personal";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
