import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Ajuste o espaçamento conforme necessário */
`;

export const Heading = styled.Text`
  margin-bottom: 15px;
  text-align: center;
  font-size: 20px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 10px;
  padding-horizontal: 10px;
  width: 100%; /* Ocupa 100% da largura disponível */
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  max-width: 400px;
  height: 40px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #3498db;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const ToggleText = styled.Text`
  color: #3498db;
  margin-top: 15px;
  font-size: 16px;
`;
