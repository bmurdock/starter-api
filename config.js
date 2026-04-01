// require .env stuff because we assume your dp user/pass is there
require('dotenv').config({ quiet: true });
module.exports = {
    // this is where you need to put your DB connection string
    DB: process.env.DB || '',
    dbName: process.env.DB_NAME || '',
}
