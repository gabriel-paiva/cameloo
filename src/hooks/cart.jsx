import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const add = useCallback((product, quantity) => {
    const itemPosition = items.findIndex((item) => item.id == product.id);

    if (itemPosition >= 0) {
      const itemsCopy = [...items];
      itemsCopy[itemPosition].quantity += quantity;
      setItems(itemsCopy);
    } else {
      setItems([...items, { ...product, quantity: quantity }]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        add,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
