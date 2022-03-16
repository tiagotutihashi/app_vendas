import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 30px;
  width: 30px;
`;

export const ItemNameText = styled.Text`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ItemRemoveButton = styled.TouchableOpacity`
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
`;
