const mongoose = require('mongoose');

module.exports = async function connection(){
    try {
        const connection_params = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        const connection_string = "mongodb://localhost:27017/GDSC" || process.env.MONGODB_URI;

        mongoose.connect(connection_string, connection_params);
        console.log("Connected successfully to MongoDB")
    } catch (error) {
        console.log(error)
        console.log("Error connecting to MongoDB")
    }
}
