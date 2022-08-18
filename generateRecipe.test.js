import test from "node:test";
import assert from "node:assert";
import { input1, input2, input3 } from "./utils/data.js";
import {
  recipeInput1,
  recipeInput2,
  recipeInput3,
} from "./utils/expectedRecipes.js";
import generateRecipe from "./generateRecipe.js";

test("calculate recipe", async (t) => {
  await t.test("first input", () => {
    const generatedRecipe = generateRecipe(input1);

    assert.deepStrictEqual(generatedRecipe, recipeInput1);
  });

  await t.test("second input", () => {
    const generatedRecipe = generateRecipe(input2);
    assert.deepStrictEqual(generatedRecipe, recipeInput2);
  });

  await t.test("third input", () => {
    const generatedRecipe = generateRecipe(input3);

    assert.deepStrictEqual(generatedRecipe, recipeInput3);
  });
});
