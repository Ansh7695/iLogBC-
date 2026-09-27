import express from 'express';
import mongoose from 'mongoose';
import ConsultationRequest from '../models/ConsultationRequest.js';

const router = express.Router();

// Temporary in-memory store fallback if MongoDB isn't connected
const inMemorySubmissions = [];

const handleContactSubmission = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, phone, company, message) are required.'
      });
    }

    const newSubmission = {
      name,
      email,
      phone,
      company,
      message,
      createdAt: new Date()
    };

    // If MongoDB is connected, save to DB
    if (mongoose.connection.readyState === 1) {
      const dbDoc = new ConsultationRequest(newSubmission);
      await dbDoc.save();
      console.log('Saved consultation request to MongoDB:', dbDoc._id);
    } else {
      // Store in memory fallback
      inMemorySubmissions.push(newSubmission);
      console.log('MongoDB disconnected. Saved submission to memory buffer:', inMemorySubmissions.length);
    }

    return res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully.',
      data: newSubmission
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error processing your request. Please try again.'
    });
  }
};

// POST /api/contact
router.post('/contact', handleContactSubmission);

// POST /api/consultation
router.post('/consultation', handleContactSubmission);

// GET /api/contact (for checking submissions)
router.get('/contact', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const docs = await ConsultationRequest.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: docs.length, data: docs });
    }
    return res.json({ success: true, count: inMemorySubmissions.length, data: inMemorySubmissions, note: 'In-memory buffer' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
