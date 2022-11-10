import React, { createContext, useCallback, useState, useContext } from 'react';

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

  const remove = useCallback(
    (itemId) => {
      const itemPosition = items.findIndex((item) => item.id == itemId);

      if (itemPosition >= 0) {
        const itemsCopy = [...items];
        if (itemsCopy[itemPosition].quantity > 1) {
          itemsCopy[itemPosition].quantity -= 1;
        } else {
          itemsCopy.splice(itemPosition, 1);
        }

        setItems(itemsCopy);
      } else {
        console.log('Item não encontrado.');
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
        remove,
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
