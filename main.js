import generateRecipe from "./lib/generateRecipe.js";
import printRecipe from "./lib/printRecipe.js";
import { input1, input2, input3 } from "./utils/data.js";

const main = () => {
  const inputs = [input1, input2, input3];
  const recipes = inputs.map((input) => generateRecipe(input));
  recipes.forEach((recipe, i) => {
    console.log(`# Output ${i}: `);
    printRecipe(recipe);
    console.log("\n");
  });
};

main();
