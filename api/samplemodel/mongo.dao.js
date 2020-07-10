const client = require('../../native.mongodb.db');
const config = require('../../config');
module.exports = function(cname)
{
    const db = client.db(config.dbName);
    const collection = db.collection(cname);
    return {
        create: (data) => {
            collection.insertOne(data)
            .then((result) =>
            {
                console.log(`${cname} document inserrted: `, result);
                return result;
            })
            .catch((err) =>
            {
                console.log(`Error inserting document to ${cname}: `, err);
                return err;
            });
        },
        read: (query) => {
            collection.find(query)
            .then((result) =>
            {
                return result;
            })
            .catch((err) =>
            {
                console.log(`Error reading documents from ${cname}: `, err);
                return err;
            });
        },
        update: () => {},
        delete: () => {},
    }
}
