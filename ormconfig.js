const ConnectionString = require('connection-string').ConnectionString;
const config = require('dotenv').config;

config();

const connectionString = new ConnectionString(process.env.DATABASE_URL);

if (connectionString.protocol === 'sqlite') {
    module.exports = {
        type: 'sqlite',
        database: './' + connectionString.hostname + (connectionString.path.length ? '/' + connectionString.path[0] : ''),
        entities: [
            'dist/**/entities/**/*.entity.js',
        ],
        migrations: [
            'dist/**/migrations/**/*.js'
        ],
        subscribers: [
            'dist/**/subscribers/**/*.js'
        ],
        logging: 'all',
        synchronize: false,
    }
} else {
    module.exports = {
        type: connectionString.protocol,
        host: connectionString.hostname,
        port: +connectionString.port,
        username: connectionString.user,
        password: connectionString.password,
        database: connectionString.path[0],
        entities: [
            'dist/**/entities/**/*.entity.js',
        ],
        migrations: [
            'dist/**/migrations/**/*.js'
        ],
        subscribers: [
            'dist/**/subscribers/**/*.js'
        ],
        logging: 'all',
        synchronize: false,
    }
}