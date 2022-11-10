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

  const add = useCallback(
    (product, quantity) => {
      const itemPosition = items.findIndex((item) => item.id == product.id);

      if (itemPosition >= 0) {
        const itemsCopy = [...items];
        itemsCopy[itemPosition].quantity += quantity;
        setItems(itemsCopy);
      } else {
        setItems([...items, { ...product, quantity: quantity }]);
      }
    },
    [items]
  );

  const calculateTotal = useCallback(() => {
    let sum = 0;
    items.forEach((product) => {
      sum += product.price * product.quantity;
    });
    return sum;
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        add,
        calculateTotal,
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
