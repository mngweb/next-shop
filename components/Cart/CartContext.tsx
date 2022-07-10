import { createContext, ReactNode, useContext, useState } from 'react';

interface CartItem {
  title: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  // addItemToCart
  // clearCart
}

export const CartContext = createContext<CartState | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return <CartContext.Provider value={{ items: cartItems }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('You forgot CartContextProvider!'); // cartContext === null
  }
  return cartContext;
};
