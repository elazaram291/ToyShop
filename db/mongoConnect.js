const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  mongoose.set('strictQuery', false);
  
  await mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPassword}.@cluster0.xof0dnr.mongodb.net/ToyShop`);
  console.log("mongo connect ToyShop local");
  
}