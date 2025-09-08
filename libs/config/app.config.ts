import dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    db: {
        uri: process.env.DB_URI || '',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'default_secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
    logLevel: process.env.LOG_LEVEL || 'info',

};