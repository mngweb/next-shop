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

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  // in React <= 17
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // in React >= 18 (https://javascript.plainenglish.io/react-18-useeffect-double-call-for-apis-emergency-fix-724b7ee6a646)
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    // added for React >= 18
    if (cartItems === undefined) {
      return;
    }

    setCartItemsInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        // in React <= 17
        // items: cartItems,
        // in React >= 18
        items: cartItems || [],

        addItemToCart: (item) => {
          // const newCartItems = [...cartItems, item];
          // setCartItems(newCartItems);

          // in React <= 17
          // setCartItems((prevCartItems) => {
          // in React >= 18
          setCartItems((prevCartItems = []) => {
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
          // in React <= 17
          // setCartItems((prevCartItems) => {
          // in React >= 18
          setCartItems((prevCartItems = []) => {
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
