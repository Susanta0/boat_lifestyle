const express = require('express');
const userController = require('../controllers/user.controllers');
const router = express.Router();
// const userController = require('../controllers/user.controller');
// const auth = require('../middleware/auth');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
// router.get('/profile', auth, userController.getProfile);
// router.put('/profile', auth, userController.updateProfile);

module.exports = router;