import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  width: 100px;
  height: 100px;
  align-self: center;
`;

export const ErrorText = styled.Text`
  color: red;
`;
