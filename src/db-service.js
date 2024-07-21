// db-service.js (Database service)
import mongoose from 'mongoose';

import { dbUri } from './config/config.js'

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
