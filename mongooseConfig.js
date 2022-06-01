const mongoose = require('mongoose');

const mongooseConfig = () => {
    mongoose.connect("mongodb://localhost:27017/drpro");

    const db = mongoose.connection;
    db.on("error", (error) => console.log("error in database comnnection"));
    db.once("open", () =>
    console.log("Connected successfully")
    );
}

module.exports = mongooseConfig;
