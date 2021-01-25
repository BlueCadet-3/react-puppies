// Connect to the database
require("dotenv").config();
require("./config/database");

// Require the Mongoose models
const User = require("./models/user");
const Breed = require("./models/breed");
const Puppy = require("./models/puppy");

// Local variables will come in handy
let u, i, c, o;
