const printRecipe = (recipe) => {
  const { products, total, taxes } = recipe;
  for (const product of products) {
    const { name, price, isImported } = product;
    console.log(` > 1 ${isImported ? "imported" : ""} ${name} at ${price}`);
  }
  console.log(` > Sales Taxes: ${taxes}`);
  console.log(` > Total Taxes: ${total}`);
};

export default printRecipe;
