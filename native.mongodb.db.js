const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

module.exports = async () =>
{
    const mongoOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    let client;
    try {
        client = await MongoClient.connect(config.DB, mongoOptions);
        console.log('Connected to Mongo...');
        return client;
    }
    catch (err)
    {
        console.log('Error connecting to Mongo: ', err);
        throw new Error('Could not connect to Mongo');
    }
}