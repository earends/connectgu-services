const mongoose = require('mongoose');
const commentModel = require('../models/commentModel');
const Comment = mongoose.model('Comment');
const mailHelper = require('./mailHelper');

module.exports = {
    allComments(req, res) {
        if (req.body.key != process.env.PASS) {
            res.send('bad')
        } else {
            Comment.find({"isVerified": true}, (err, comments) => {
                if (err)
                    res.json(err);


                res.send(comments);
            });
        }

    },
    postComment(req,res) {
        if (req.body.key != process.env.PASS) {
            res.send('bad')
        } else {
            const newComment = new Comment({comment:req.body.comment,email:req.body.email,pid:req.body.pid});
            newComment.save((err, comment) => {
                if (err)
                    res.json(err);
                mailHelper.sendCommentDetails(req.body.email,comment._id);

                res.send(comment);
            });
        }

    },
    deleteCommentsByPost(req,res) {
        if (req.body.key != process.env.PASS) {
            res.send('bad')
        } else {
            Comment.remove({pid:req.params.pid,}, (err, comment) => {
                if(err)
                    res.json(err)

                res.send(comment)
            })
        }

    },
    getCommentsByPost(req,res) {
        if (req.body.key != process.env.PASS) {
            res.send('bad')
        } else {
            Comment.find({"pid":req.params.pid,"isVerified": true}, (err, comments) => {
                if (err)
                    res.json(err);


                res.send(comments);
            });
        }

    },
    clearAll(req,res) {
        if (req.body.key != process.env.PASS) {
            res.send('bad')
        } else {
            Comment.remove({}, (err, comment) => {
                if(err)
                    res.json(err)

                res.send(comment)
            })
        }

    },
    verifyComment(req,res) {

        Comment.findOneAndUpdate(
            { _id: req.params.id },
            {isVerified: true},
            (err, user) => {
                if (err)
                    res.json(err);
                //redirect user to home page after listing was verified
                res.redirect('https://connectgu.herokuapp.com/Home');
            });
    },
    all(req,res) {
        if (req.body.key != process.env.PASS) {
            res.send('bad')
        } else {
            Comment.find({}, (err, comments) => {
                if (err)
                    res.json(err);


                res.send(comments);
            });
        }

    },
    deleteComment(req,res) {

            Comment.remove({ _id: req.params.id }, (err, listing) => {
                if (err)
                    return res.json(err);
                res.redirect('https://connectgu.herokuapp.com/Home');
            });


    }
};
