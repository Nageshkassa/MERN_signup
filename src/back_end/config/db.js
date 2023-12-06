const mongoose = require("mongoose");

module.exports = async (server) => {
  try {

console.log("Mongo URI:", process.env.NODE_ENV);
    await mongoose.connect('mongodb://localhost:27017/sample', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful..");

    // Listening to server
    await server.listen(5000, () =>
      console.log(
        `Server running on ${process.env.NODE_ENV} mode, port 5000}..`
          .cyan.bold
      )
    );
  } catch (error) {
    console.log("MongoDB connection failed..".red);
    console.error(error);
    process.exit(1);
  }
};
