import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import Root from './src/navigation';
import configureStore from './src/store';
import CartContext from './src/context/cartContext';

export const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <CartContext>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </CartContext>
    </Provider>
  );
}
