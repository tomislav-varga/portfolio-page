import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import 'dotenv/config';
// import contactRouter from './routes/contact.js'; // Assuming this is your router path

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Routes
// app.use('/api', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});