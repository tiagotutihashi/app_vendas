import React, { FC } from 'react'
import ProductInterface from '../../interfaces/product'
import { Container, ProductImage, AddButton, AddButtonText, ProductName } from './styles'
import { useCartContext } from '../../context/cartContext'

interface Props {
   product :  ProductInterface
}

const ProductBox: FC<Props> = ({
    product
}) => {
    const { addICartItem, removeCartItem, verifyIfContainsCartItem } = useCartContext()
    
    const currentStateAdded = () => {
        return verifyIfContainsCartItem(product)
    }

    const AddButtonAction = () => {
        if(currentStateAdded()){
            removeCartItem(product)
        } else {
            addICartItem(product);
        }
    }

    return (
        <Container>
            <ProductImage source={{uri: product.image}} resizeMode="contain" />
            <ProductName numberOfLines={2} >
                {product?.title}
            </ProductName>
            <AddButton onPress={() => AddButtonAction()}>
                <AddButtonText added={currentStateAdded()}>
                    {currentStateAdded() ? "Remover" : "Adicionar"}
                </AddButtonText>
            </AddButton>
        </Container>
    )
}

export default ProductBox;