import mongoose from 'mongoose';
import ConsultationRequest from '../server/models/ConsultationRequest.js';

let connectionPromise;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not configured.');
  }

  connectionPromise ??= mongoose.connect(process.env.MONGODB_URI);
  await connectionPromise;
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const { name, email, phone, company, message } = req.body || {};
  if (![name, email, phone, company, message].every((value) => typeof value === 'string' && value.trim())) {
    return res.status(400).json({
      success: false,
      error: 'All fields (name, email, phone, company, message) are required.'
    });
  }

  try {
    await connectToDatabase();
    const submission = await ConsultationRequest.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      message: message.trim()
    });

    return res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully.',
      data: { id: submission._id }
    });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error processing your request. Please try again.'
    });
  }
}
