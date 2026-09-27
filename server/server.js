import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ilogbc';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'iLogBC Advisory Backend API',
    mongoStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// Connect to MongoDB & Start Server
const startServer = async () => {
  try {
    console.log('Attempting MongoDB connection...');
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);
  } catch (err) {
    console.warn(`MongoDB connection warning: ${err.message}. Server running with in-memory buffer.`);
  }

  app.listen(PORT, () => {
    console.log(`iLogBC Server listening on http://localhost:${PORT}`);
  });
};

startServer();
