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
    products.push({ name, finalPrice, isImported: item.isImported });
  }
  taxes = roundTax(taxes);
  total = roundDecimal(total);
  return {
    taxes,
    total,
    products,
  };
};

const calculateProductFinalPrice = (product) => {
  const { name, type, price, isImported } = product;
  let finalPrice = price;
  let tax = 0;
  if (isImported) {
    const importedTaxValue = price * IMPORTED_TAX;
    tax += importedTaxValue;
  }
  if (!PRODUCTS_TYPES_WITHOUT_TAX.includes(type)) {
    const baseTax = price * BASE_TAX;
    tax += baseTax;
  }
  tax = roundTax(tax);
  finalPrice += tax;
  finalPrice = roundDecimal(finalPrice);
  return {
    finalPrice,
    tax,
    name,
  };
};

const roundTax = (tax) => {
  const roundedTax =
    Math.ceil((Math.round(tax * 100) / 100).toFixed(2) * 20) / 20;

  return roundedTax;
};

const roundDecimal = (price) => {
  return +price.toFixed(2);
};

export default generateRecipe;
