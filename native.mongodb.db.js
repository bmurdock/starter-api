const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

module.exports = async () =>
{
    const mongoOptions = {
        useUnifiedToplogy: true,
        useNewUrlParser: true,
    };

    MongoClient.connect(config.DB, mongoOptions)
    .then((client) =>
    {
        console.log('Connected to Mongo...');
        return client;
    })
    .catch((err) =>
    {
        console.log('Error connecting to Mongo: ', err);
    });
}