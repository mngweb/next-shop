import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getCartItemsFromStorage, setCartItemsInStorage } from './CartModel';

const storageCartKey = 'NEXT_SHOP_CART';
export interface CartItem {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem['id']) => void;
}

export const CartContext = createContext<CartState | null>(null);

// export const getCartItemsFromStorage = () => {
//   const itemsFromLocalStorage = localStorage.getItem(storageCartKey);
//   if (!itemsFromLocalStorage) {
//     return [];
//   }
//   try {
//     const items = JSON.parse(itemsFromLocalStorage);
//     return items;
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };

// export const setCartItemsInStorage = (cartItems: CartItem[]) => {
//   localStorage.setItem(storageCartKey, JSON.stringify(cartItems));
// };

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    setCartItemsInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,

        addItemToCart: (item) => {
          // const newCartItems = [...cartItems, item];
          // setCartItems(newCartItems);

          setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((existingItem) => existingItem.id === item.id);

            if (!existingItem) {
              return [...prevCartItems, item];
            }

            return prevCartItems.map((existingItem) => {
              return existingItem.id === item.id ? { ...existingItem, count: existingItem.count + 1 } : existingItem;
            });
          });
        },

        removeItemFromCart(id) {
          setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((existingItem) => existingItem.id === id);

            if (existingItem && existingItem.count <= 1) {
              return prevCartItems.filter((item) => item.id !== id);
            }

            return prevCartItems.map((existingItem) => {
              return existingItem.id === id ? { ...existingItem, count: existingItem.count - 1 } : existingItem;
            });
          });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('You forgot CartContextProvider!'); // cartContext === null
  }
  return cartContext;
};
