const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    body: {
        type: String, 
        required: true,
    },
    avatar: {
        type: String, 
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [commentSchema],
    numComments: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Story', storySchema);
