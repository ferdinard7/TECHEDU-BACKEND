const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb+srv://Admin-Ferd:ferdinar7@cluster0.q9yytgz.mongodb.net/posts?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = async () => {
    try {
      const connect = await mongoose.connect(CONNECTION_STRING);
      console.log("Database connected:", connect.connection.host, connect.connection.name)
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;