"use client";
import React from "react";

export type CartItem = {
  id: number;
  title: string;
  price: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
};
interface CartContextType {
  cart: CartItem[];
  totalPrice: (withTax?: boolean, tax?: number) => number;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  itemQuantity: (item: CartItem, type: "increase" | "decrease") => void;
}

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  itemQuantity: () => {},
  totalPrice: () => 0,
});

type ProviderTypes = {
  children: React.ReactNode;
};

export const CartContextProvider: React.FC<ProviderTypes> = ({ children }) => {
  const [cart, setCart] = React.useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(newCart);
    }
  };
  const removeFromCart = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(newCart);
    }
  };
  const itemQuantity = (item: CartItem, type: "increase" | "decrease") => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      if (type === "increase") {
        const newCart = cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity === 10 ? 10 : cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        setCart(newCart);
      } else if (type === "decrease") {
        const newCart = cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity <= 1 ? 1 : cartItem.quantity - 1,
            };
          }
          return cartItem;
        });
        setCart(newCart);
      }
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = (withTax?: boolean, tax?: number) => {
    const totalPrice = cart.reduce(
      (total: number, item: CartItem) =>
        total + Number(item.price) * item.quantity,
      0
    );
    return withTax ? totalPrice + (tax || 0) : totalPrice;
  };
  return (
    <CartContext.Provider
      value={{
        totalPrice,
        cart,
        itemQuantity,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
