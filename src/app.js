import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import { dbUri } from './config/config.js'

const app = express();
const server = http.createServer(app);

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Global Middleware
app.use(express.json());
app.use(express.static('public'));

// Route  Middleware

// Basic route
app.use('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

export { app, server };
