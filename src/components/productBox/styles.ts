import styled from 'styled-components/native';
import { TextProps } from 'react-native'

interface ButtonTextProps extends TextProps {
    added: boolean
  }

export const Container = styled.View`
    background: transparent;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1;
`;

export const ProductImage = styled.Image`
    flex: 1;
    height: 100px;
`

export const ProductName = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const AddButton = styled.TouchableOpacity`
    justify-content: center;
    border-color: black;
    border-width: 1px;
    padding: 10px;
`

export const AddButtonText = styled.Text<ButtonTextProps>`
    text-align: center;
    ${props => props.added ? "color: red;" : "color: green;"}
`