import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/index";
import CustomHeader from "../../components/customHeader";
import CartItemList from "./components/CartItemList";
import { useCartContext } from "../../context/cartContext";
import IProduct from "../../interfaces/product";
import { AntDesign } from "@expo/vector-icons";

import { Container, CartItemsAmount } from "./styles";

type authScreenProp = StackNavigationProp<RootStackParamList, "Cart">;

function Cart() {
  const navigation = useNavigation<authScreenProp>();

  const { cartItems, removeCartItem } = useCartContext();

  const removeButtonAction = (product: IProduct) => {
    removeCartItem(product);
  };

  return (
    <>
      <CustomHeader backButton />
      <Container>
        <CartItemsAmount>
          {cartItems.length} produtos adicionados
        </CartItemsAmount>
        <FlatList
          data={cartItems}
          keyExtractor={({ id }) => `${id}-CartScreenFlatList`}
          renderItem={({ item }) => (
            <CartItemList
              product={item}
              removeProduct={() => removeButtonAction(item)}
            />
          )}
        />
      </Container>
    </>
  );
}

export default Cart;
