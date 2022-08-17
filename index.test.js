import test from "node:test";
import assert from "node:assert";

function sum(a, b) {
  return a + b;
}

test("test", (testCtx) => {
  testCtx.test(() => {
    assert.strictEqual(sum(2, 2), 4);
  });
});
