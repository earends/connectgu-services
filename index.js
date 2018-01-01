const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

require('dotenv').load();

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);
app.listen(port);


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECT, { useMongoClient: true });

module.exports = app;
