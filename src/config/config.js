import { config } from 'dotenv';

config();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const jwtSecret = process.env.JWT_SECRET || 'supersecretkey';
const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/multi-game-hub';

export  {
 port,
 env,
 jwtSecret,
 dbUri,
};