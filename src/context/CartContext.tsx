import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Get the cart from localStorage if it exists
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to save the cart in localStorage
  const saveCartToLocalStorage = (cart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        updatedCart = [...prevCart, product];
      }
      saveCartToLocalStorage(updatedCart); // Save to localStorage
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      saveCartToLocalStorage(updatedCart); // Save to localStorage
      return updatedCart;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      saveCartToLocalStorage(updatedCart); // Save to localStorage
      return updatedCart;
    });
  };

  // Clear localStorage when the cart is empty (optional)
  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem('cart');
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
