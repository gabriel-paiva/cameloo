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

  const add = useCallback((itemId, quantity) => {
    const itemPosition = items.findIndex((item) => item.id == itemId);

    if (itemPosition) {
      const itemsCopy = [...items];
      itemsCopy[itemPosition].quantity += quantity;
      setItems(itemsCopy);
    } else {
      setItems([...items, { id: itemId, quantity: quantity }]);
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
