"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

import { CartItem } from "@/types";

type CartContextType = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
    toast.success(`${newItem.name} ADDED TO CART`);
  };

  const removeItem = (itemId: string) => {
    setItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
          return acc;
        } else {
          return [...acc, item];
        }
      }, [] as CartItem[]);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
