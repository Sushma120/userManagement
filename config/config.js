import dotenv from 'dotenv';
dotenv.config();
const config = {
  db: {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  }
};
export default config;