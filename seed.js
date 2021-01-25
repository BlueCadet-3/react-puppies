require("dotenv").config();
require("./config/database");

const Breed = require("./models/breed");
const Puppy = require("./models/puppy");

(async function () {
  await Breed.deleteMany({});
  const breeds = await Breed.create([
    { name: "Bulldog" },
    { name: "Cocker Spaniel" },
    { name: "Poodle" },
    { name: "Maltese" },
  ]);

  await Puppy.deleteMany({});
  const puppies = await Puppy.create([
    { name: "Hamburger", age: 1, breed: breeds[0] },
    { name: "Picasso", age: 2, breed: breeds[1] },
    { name: "Coco", age: 3, breed: breeds[2] },
    { name: "Puckett", age: 4, breed: breeds[3] },
  ]);

  console.log(puppies);

  process.exit();
})();
