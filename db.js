const mongoose = require('mongoose');
const config = require('./config');

module.exports = async function connectWithMongoose()
{
    if (!config.DB)
    {
        console.log('No DB connection string configured. Skipping MongoDB connection.');
        return null;
    }

    mongoose.connection.on('connected', function(){
        console.log('Mongoose connected to the database...');
    });

    mongoose.connection.on('error', function(mongooseErr){
        console.log('Mongoose encountered an error while connecting: ', mongooseErr);
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose connection was disconnected...');
    });

    process.on('SIGINT', async function()
    {
        await mongoose.connection.close();
        console.log('Mongoose connection closed due to server interruption.');
        process.exit(0);
    });

    try
    {
        return await mongoose.connect(config.DB);
    }
    catch (err)
    {
        console.log('Error connecting to db: ', err);
        throw err;
    }
}
