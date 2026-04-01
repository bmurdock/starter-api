const { MongoClient } = require('mongodb');
const config = require('./config');

module.exports = async function connectWithMongoClient()
{
    if (!config.DB)
    {
        throw new Error('No DB connection string configured.');
    }

    try
    {
        const client = await MongoClient.connect(config.DB);
        console.log('Connected to Mongo...');
        return client;
    }
    catch (err)
    {
        console.log('Error connecting to Mongo: ', err);
        throw err;
    }
}
