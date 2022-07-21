import { CartItem } from './CartContext';

const storageCartKey = 'NEXT_SHOP_CART';

export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem(storageCartKey);
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const setCartItemsInStorage = (cartItems: CartItem[] | undefined) => {
  localStorage.setItem(storageCartKey, JSON.stringify(cartItems));
};
