/**
 * Created by baldeep on 29/4/15.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Business Schema
 */
var BusinessSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
BusinessSchema.path('name').validate(function(name) {
    return !!name;
}, 'Business name cannot be blank');

BusinessSchema.path('type').validate(function(type) {
    return !!type;
}, 'Type cannot be blank');

/**
 * Statics
 */
BusinessSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Business', BusinessSchema);

