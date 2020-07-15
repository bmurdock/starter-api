const client = require('../../native.mongodb.db');
const config = require('../../config');

module.exports = async function(cname)
{
    return await client().then(async (client) =>
    {
        const db = client.db(config.dbName);
        const collection = db.collection(cname);
        return {
            cname,
            create: async (data) => {
                const result = await collection.insertOne(data); 
                return result;
            },
            read: async (query) => {
                const result = await collection.find(query).toArray();
                return result;
            },
            update: async (query, data) => {
                const set = {};
                set['$set'] = data;
                const result = await collection.findOneAndUpdate(query, set, {returnOriginal: false})
                return result;
            },
            delete: () => {},
        }

    })
    .catch((err) =>
    {
        console.log('Error: ', err);
    });
}
