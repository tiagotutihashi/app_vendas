import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const { navigate } = useNavigation()

    return(
        <View>
            <TouchableOpacity onPress={() => {
                navigate("Cart")
            }}>
                <Text>
                    Teste
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
