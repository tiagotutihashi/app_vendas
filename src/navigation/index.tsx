import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home/'
import Cart from '../screens/cart'

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
     return (
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
     )
}

export default RootNavigation