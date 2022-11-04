const mongoose = require('mongoose');
// const {DB_URI} = require('./keys')

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
        })
        .then((con) => {
            console.log(`MongoDB Database connected with HOST ${con.connection.host}`);
        });
};

module.exports = connectDatabase;
