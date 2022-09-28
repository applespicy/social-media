const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const ThoughSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
            validate: [({ length }) => length > 0 && length <= 280, 'Thoughts can only be between 1 and 280 characters long!']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);
// ThoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });
const Though = model('Though', ThoughSchema);
module.exports = Though;