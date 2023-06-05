const fs = require("fs");
const crypto = require("crypto");

const generateASecret = () => crypto.randomBytes(16).toString('base64');

if(!fs.existsSync("./data/.env")){
    // source: https://github.com/strapi/strapi/blob/main/packages/generators/app/src/resources/templates/env.ts
    fs.writeFileSync("./data/.env", `
HOST=0.0.0.0
PORT=1337
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=./data/data.db
# Keys
APP_KEYS="${new Array(4).fill(null).map(generateASecret).join(',')}"
API_TOKEN_SALT=${generateASecret()}
ADMIN_JWT_SECRET=${generateASecret()}
JWT_SECRET=${generateASecret()}
TRANSFER_TOKEN_SALT=${generateASecret()}
    `)
}

