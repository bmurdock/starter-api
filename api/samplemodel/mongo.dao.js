const getClient = require('../../native.mongodb.db');
const config = require('../../config');

module.exports = async function(cname)
{
    const client = await getClient();
    const db = client.db(config.dbName);
    const collection = db.collection(cname);

    return {
        create: async (data) => {
            const result = await collection.insertOne(data);
            console.log(`${cname} document inserted: `, result);
            return result;
        },
        read: async (query) => {
            return collection.find(query).toArray();
        },
        update: () => {},
        delete: () => {},
    }
}
