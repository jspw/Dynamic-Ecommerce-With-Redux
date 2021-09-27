import constants from "./constants";

export function saveProducts(products) {
  localStorage.setItem(constants.PRODUCTS, JSON.stringify(products));
}

export function getProducts() {
  const products = localStorage.getItem(constants.PRODUCTS);

  return JSON.parse(products) || null;
}

export function clearProducts() {
  localStorage.removeItem(constants.PRODUCTS);
}

export function saveCategories(categories) {
  localStorage.setItem(constants.CATEGORIES, JSON.stringify(categories));
}

export function getCategories() {
  const categories = localStorage.getItem(constants.CATEGORIES);

  return JSON.parse(categories) || null;
}

export function clearCategories() {
  localStorage.removeItem(constants.CATEGORIES);
}

export function saveCart(cart) {
  localStorage.setItem(constants.CART, JSON.stringify(cart));
}

export function getCart() {
  const cart = localStorage.getItem(constants.CART);

  return JSON.parse(cart) || null;
}

export function clearCart() {
  localStorage.removeItem(constants.CART);
}

export function saveOrder(order) {
  localStorage.setItem(constants.ORDER, JSON.stringify(order));
}

export function getOrder() {
  const order = localStorage.getItem(constants.ORDER);

  return JSON.parse(order) || null;
}

export function clearOrder() {
  localStorage.removeItem(constants.ORDER);
}

export function setUserOld() {
  localStorage.setItem(constants.IS_USER_OLD, true);
}

export function isUserOld() {
  const check = localStorage.getItem(constants.IS_USER_OLD);

  return check || false;
}
