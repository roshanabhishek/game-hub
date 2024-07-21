import { config } from 'dotenv';

config();

const port = process.env.PORT || 4007;
const ws_port = process.env.WS_PORT || 4008;
const env = process.env.NODE_ENV || 'development';
const jwtSecret = process.env.JWT_SECRET || 'supersecretkey';
const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/multi-game-hub';

export  {
 port,
 env,
 jwtSecret,
 dbUri,
 ws_port,
};
