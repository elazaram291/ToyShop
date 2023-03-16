require("dotenv").config();


exports.config = {
    mongoUser:process.env.DBUSER,
    mongoPassword:process.env.DBPASSWORD,
    tokenSecret:process.env.TOKENSECRET,
}