const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comment = new Schema (
    {
        comment: { type: String, required: true },
        email: {type: String,required:true},
        pid: { type: String, required: true },
        isVerified: {type:Boolean,default:false}

    },{ collection: 'Comment' }
);

module.exports = mongoose.model('Comment', comment);