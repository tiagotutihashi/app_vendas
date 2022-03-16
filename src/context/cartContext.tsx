import React, { useState, useContext, createContext, FC } from 'react';
import IProduct from '../interfaces/product'

interface ICartContext {
    cartItems: IProduct[],
    addICartItem: (value: IProduct) => void,
    removeCartItem: (value: IProduct) => void,
    verifyIfContainsCartItem: (value: IProduct) => boolean;
}

const defaultState = {
    cartItems: [],
    addICartItem: () => null,
    removeCartItem: () => null,
    verifyIfContainsCartItem: () => false
};

const CartContext = createContext<ICartContext>(defaultState);
export const useCartContext = () =>  useContext(CartContext);

const CartProvider: FC = ({children}) => {

    const [cartItems, setCartItems] = useState<IProduct[]>(defaultState.cartItems)

    const addICartItem = (value: IProduct) => {
        const newItems: IProduct[] = [...cartItems, value]
        setCartItems(newItems);
    }

    const removeCartItem = (value: IProduct) => {
        const newItems: IProduct[] = [...cartItems]
        const itemIndex = newItems.indexOf(value);
        if (itemIndex > -1) {
            newItems.splice(itemIndex, 1);
        }
        setCartItems(newItems);
    }

    const verifyIfContainsCartItem = (value: IProduct) => {
        const index = cartItems.indexOf(value);
        if(index > -1){
            return true
        } 
        return false
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addICartItem,
                removeCartItem,
                verifyIfContainsCartItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider