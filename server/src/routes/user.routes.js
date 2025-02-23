const express = require('express');
const userController = require('../controllers/user.controllers');
const { protect, isAdmin } = require('../middleware/authmiddleware');
const router = express.Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.get('/profile', protect, userController.getProfile);
router.put('/profile', protect, userController.updateProfile);

// Admin only routes
router.get('/users', protect, isAdmin, userController.getAllUsers)
router.delete('/users/:userId', protect, isAdmin, userController.deleteUser)
router.put('/users/:userId/role', protect, isAdmin, userController.updateUserRole)

module.exports = router;