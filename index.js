const mongoose = require('mongoose');


// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
const { findOneAndUpdate } = require('./models/Recipe.model');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

//Method 1 : Using Async Await

/* const recipe = mongoose.model("recipe", {title:String}) */

const soup = new Recipe({title:"Beans Soup"});

const manageRecipes = async () => {
  try {
    // Connection to the database "recipe-app"
    const dbConnection = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database: "${dbConnection.connection.name}"`);

    // Before adding any recipes to the database, let's remove all existing ones
    await Recipe.deleteMany();

    // Run your code here, after you have insured that the connection was made

  await Recipe.create({title:"Beans Soup", level:"easy peasy", ingredients:["beans"],cuisine:true, dishType:"soup",duration:10, creator:"Sheela Campos"})
  console.log(soup)
  await Recipe.insertMany(data)
  for(let i = 0; i < data.length; i++){
    console.log(data[i].title)
  }
   let rigatoni = await Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"}, {duration:100}, {returnOriginal:false})
   console.log("Rigatoni duration was updated!")
  let cake = await Recipe.deleteOne({title:"Carrot Cake"})
   console.log("You have removed Carrot Cake Recipe")
    
  } catch (error) {
    console.log(error);
  }
};

manageRecipes();

//Method 2: Using .then() method
//If you want to use this method uncomment the code below:

/* mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  }); */

  mongoose.connection.close()