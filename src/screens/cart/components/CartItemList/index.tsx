import React, { FC } from 'react'
import { View } from 'react-native'
import IProduct from '../../../../interfaces/product'
import { AntDesign } from '@expo/vector-icons';

import { Container, ItemImage, ItemNameText, ItemRemoveButton } from './styles'

interface Props {
    product: IProduct,
    removeProduct: () => void,
}

const CartItemList: FC<Props> = ({
    product,
    removeProduct
}) => {
    return (
        <View>
            <Container>
                <ItemImage source={{uri: product?.image}} resizeMode="contain" />
                <ItemNameText numberOfLines={2}>{product?.title}</ItemNameText>
                <ItemRemoveButton onPress={() => removeProduct()}>
                    <AntDesign name="closecircleo" size={30} color="red" />
                </ItemRemoveButton>
            </Container>
        </View>
    )
}

export default CartItemList