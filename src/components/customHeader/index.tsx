import React, { FC } from "react";
import { View } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  HeaderContainer,
  HeaderContent,
  BackbuttonContainer,
  Backbutton,
  CartButton,
} from "./styles";

interface Props {
  backButton?: boolean;
}

const CustomHeader: FC<Props> = ({ backButton }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <HeaderContainer>
      <HeaderContent>
        <BackbuttonContainer>
          {backButton && (
            <Backbutton onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </Backbutton>
          )}
        </BackbuttonContainer>
        <CartButton onPress={() => navigation.navigate("Cart")}>
          <EvilIcons name="cart" size={30} color="black" />
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default CustomHeader;
