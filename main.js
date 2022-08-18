import generateRecipe from "./generateRecipe.js";
import printRecipe from "./printRecipe.js";
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
