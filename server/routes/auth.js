const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  getMe,
  deleteAccount,
} = require('../controllers/authController');

// Public routes
router.post('/register', register);
router.get('/verify-email/:token', verifyEmail);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

// Protected routes
router.get('/me', protect, getMe);
router.delete('/delete-account', protect, deleteAccount);

module.exports = router;
