const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listing = new Schema (
	{
		email: { type: String, required: true },
		title: { type: String, required: true },
		game: { type: String, required: true },
		description: { type: String, required: true },
		location: {type: String, required: true},
		isVerified: {type: Boolean,default:false},
		timestamp: {type:Number, required:true}
	},{ collection: 'Listing' }
);

module.exports = mongoose.model('Listing', listing);
