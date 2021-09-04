const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userControllers');
const { protect, admin } = require('../middleware/authMiddleware');

router
    .route('/')
    .post(UserCtrl.register)
    .get(protect, admin, UserCtrl.getAllUsers)

router.post('/login', UserCtrl.login)

router
    .route('/profile')
    .get(protect, UserCtrl.getProfile)
    .put(protect, UserCtrl.updateProfile)

router
    .route('/:id')
    .get(UserCtrl.getUserById)
    .put(protect, admin, UserCtrl.updatedUser)
    .delete(protect, admin, UserCtrl.deleteUser)

module.exports = router;