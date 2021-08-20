const express = require('express');
const router = express.Router();
const StoryCtrl = require('../controllers/storyControllers');
const { protect } = require('../middleware/authMiddleware');

router
    .route('/')
    .get(StoryCtrl.getAllStories)
    .post(protect, StoryCtrl.createStory)

router.get('/my_stories', StoryCtrl.getMyStories)

router.get('/user/:userId', StoryCtrl.getStoriesByUser)

router.route('/:id/comments').post(protect, StoryCtrl.createComment)

router
    .route('/:id')
    .get(StoryCtrl.getStoryById)
    .put(protect, StoryCtrl.updateStory)
    .delete(protect, StoryCtrl.deleteStory)

module.exports = router;