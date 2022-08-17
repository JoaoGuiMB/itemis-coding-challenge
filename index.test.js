import test from "node:test";
import assert from "node:assert";
import { input1, input2, input3 } from "./utils/data.js";
import {
  recipeInput1,
  recipeInput2,
  recipeInput3,
} from "./utils/expectedRecipes.js";

test("calculate recipe", (testCtx) => {
  testCtx.todo("first input", () => {
    const generatedRecipe = generateRecipe(input1);
    assert.strictEqual(generatedRecipe, recipeInput1);
  });

  testCtx.todo("second input", () => {
    const generatedRecipe = generateRecipe(input2);
    assert.strictEqual(generatedRecipe, recipeInput2);
  });

  testCtx.todo("third input", () => {
    const generatedRecipe = generateRecipe(input3);
    assert.strictEqual(generatedRecipe, recipeInput3);
  });
});
