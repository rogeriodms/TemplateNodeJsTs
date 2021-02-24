import 'dotenv/config';

export const SERVER = {
  PORT:
    process.env.NODE_ENV === 'development'
      ? process.env.PORT_LOCAL
      : process.env.PORT_PROD,
};

export const DATABASE = {
  DB_NAME: process.env.DB_NAME || '',
  DB_HOST: process.env.DB_HOST || '',
  DB_USERNAME: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: process.env.DB_PORT || '',
};
