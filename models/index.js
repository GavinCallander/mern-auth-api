require('dotenv').config();
const MONGOOSE = require('mongoose'); 

MONGOOSE.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
MONGOOSE.connection.once('open', () => {
    console.log(`Connected to db: ${MONGOOSE.connection.name}`);
});
MONGOOSE.connection.on('error', err => {
    console.log(`Connection failed: ${err}`);
});

module.exports.User = require('./user');