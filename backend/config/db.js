const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useUnifiedTopology: true,
    });
    console.log(`mongoose connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`error massage ${error}`);
  }
};
module.exports = connectDB;
