import {
  IMPORTED_TAX,
  BASE_TAX,
  PRODUCTS_TYPES_WITHOUT_TAX,
} from "./utils/constants.js";
const generateRecipe = (cartItems) => {
  let taxes = 0;
  let total = 0;
  let products = [];
  for (const item of cartItems) {
    const { finalPrice, tax, name } = calculateProductFinalPrice(item);
    taxes += tax;
    total += finalPrice;
    products.push({ name, finalPrice });
  }
  return {
    taxes,
    total,
    products,
  };
};

const calculateProductFinalPrice = (product) => {
  const { name, type, price, isImported } = product;
  let finalPrice = price;
  if (isImported) {
    finalPrice *= 1 + IMPORTED_TAX;
  }
  if (!PRODUCTS_TYPES_WITHOUT_TAX.includes(type)) {
    finalPrice *= 1 + BASE_TAX;
  }

  return {
    finalPrice,
    tax: finalPrice - price,
    name,
  };
};

const roundPrice = (price) => {
  return Math.round(price * 100) / 100;
};

export default generateRecipe;
