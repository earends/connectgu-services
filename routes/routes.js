const listHelper = require('../controllers/listingHelper');
const commentHelper = require('../controllers/commentHelper');
const mailHelper = require('../controllers/mailHelper');


//Everything is a post request so I can use an API KEY
module.exports = function (app) {

	app.route('/alllistings')
		.post(listHelper.allListings) // get all listings for view listings page

	app.route('/clearalllistings')
		.post(listHelper.clearAll) // delete all listings for test purposes

	app.route('/newlisting')
		.post(listHelper.newListing) // create a listing for create listing page

	app.route('/listings/:id') // get listing details by id for Listing page
		.post(listHelper.listingDetails)


	app.route('/listings/verify/:id') // user routes here to verify then redirect to confirm listing
		.get(listHelper.verifyListing)

	app.route('/listings/edit/:id')
		.post(listHelper.editListing) // edit listing post to update listing

	app.route('/listings/delete/:id')
		.post(listHelper.deleteListing) // delete listing


	app.route('/listings/location/:lid')
		.post(listHelper.getByLocation) // get listings by location

	app.route('/listings/game/:gid')
		.post(listHelper.getByGame) // get listings by game

	app.route('/recent')
		.post(listHelper.getByRecent) // get listings by timestamp

	app.route('/popularity')
		.post(listHelper.getByPopularity) // get listings by sport most commonly posted

    app.route('/getcomments/:pid')
        .post(commentHelper.getCommentsByPost) // get comments by posting id

	app.route('/deletecomment/:pid')
		.post(commentHelper.deleteCommentsByPost) // delete all comment by posting id

    app.route('/comment/:id')
        .get(commentHelper.verifyComment) // verify comment

	app.route('/commentDelete/:id')
		.get(commentHelper.deleteComment) // delete individual comment

	app.route('/allComments')
		.post(commentHelper.all) //all coments


    app.route('/allverifiedcomments')
        .post(commentHelper.allComments) // get all verified comment

	app.route('/clearallcomments')
        .post(commentHelper.clearAll) // clear all comments testing

	app.route('/postcomment')
        .post(commentHelper.postComment) // post a new comment

	app.route('/leavefeedback')
		.post(mailHelper.sendFeedback)


	
};
