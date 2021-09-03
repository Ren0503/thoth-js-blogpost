const Story = require('../models/storyModel');

// @desc    Create story
// @route   POST /api/stories
exports.createStory = async (req, res) => {
    try {
        const story = new Story({
            title: "Sample Title",
            description: "Sample description",
            category: "Sample category",
            body: "Sample body",
            image: "Sample Image",
            status: "public",
            user: req.user._id,
        });

        const newStory = await story.save();
        res.status(201).json(newStory);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

// @desc    Show all stories
// @route   GET /api/stories
exports.getAllStories = async (req, res) => {
    try {
        const keyword = req.query.keyword
        ? {
            title: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }
        : {};

        const stories = await Story.find({ status: 'public', ...keyword })
            .populate('user', 'name avatar bio')
            .sort({ createdAt: -1 })
            .lean()

        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

// @desc    Show single story
// @route   GET /api/stories/:id
exports.getStoryById = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id).populate('user', 'name avatar bio').lean();

        if (!story) {
            res.status(404).json("Story not found");
        }
            
        res.json(story);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

// @desc    Update story
// @route   PUT /api/stories/:id
exports.updateStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);

        if (!story) {
            res.status(404).json("Story not found");
        }

        if (story.user.toString() != req.user._id.toString()) {
            res.status(404).json("Not authorization to access");
        } else {
            const {
                title,
                body,
                category,
                description,
                image,
                status,
            } = req.body;

            story.title = title;
            story.description = description;
            story.category = category;
            story.body = body;
            story.image = image;
            story.status = status;

            const updatedStory = await story.save();
            res.json(updatedStory);
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

// @desc    Delete story
// @route   DELETE /api/stories/:id
exports.deleteStory = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);

        if (!story) {
            res.status(404).json("Story not found");
        }

        if (story.user.toString() != req.user._id.toString()) {
            res.status(404).json("Not authorization to access");
        } else {
            await story.remove();
            res.json({ message: 'Story removed' });
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

// @desc    User stories
// @route   GET /api/stories/user/:userId
exports.getStoriesByUser = async (req, res) => {
    try {
        const stories = await Story.find({
            user: req.params.userId,
            status: 'public',
        })
            .populate('user', 'name avatar bio')
            .lean()

        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
}

// @desc    Get my stories
// @route   GET /api/stories/my_stories
exports.getMyStories = async (req, res) => {
    try {
        const stories = await Story.find({ user: req.user._id }).lean();

        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
}

// @desc    Create new comment
// @route   POST /api/stories/:id/comments
exports.createComment = async (req, res) => {
    try {
        const { body } = req.body;
        const story = await Story.findById(req.params.id);

        if (story) {
            const comment = {
                name: req.user.name,
                avatar: req.user.avatar,
                body,
                user: req.user._id,
            };

            story.comments.push(comment);
            story.numComments = story.comments.length;

            await story.save();
            res.status(201).json({ message: 'Comment added' });
        } else {
            res.status(404);
            throw new Error('Story not found');
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};