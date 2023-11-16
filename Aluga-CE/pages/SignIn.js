import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Heading, Input, Button, ButtonText, ToggleText } from './styled';
import { showToast } from './Toast';

function SignIn() {
  const navigation = useNavigation(); 

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const goToNewPage = () => {
    navigation.navigate('AnotherPage');
  };
  
  const validateInputs = () => {
    if (!email || !password || (!isLogin && !username) || (!isLogin && !phone)) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    setLoading(true);

    if (validateInputs()) {
      // lógica de autenticação aq
      // exemplo de lógica assíncrona:::
      setTimeout(() => {
        setLoading(false);
        console.log('Submit Data:', { email, password, username, phone });
        showToast('Ação realizada com sucesso!');
      }, 1000);
    } else {
      setLoading(false);
      showToast('Por favor, preencha todos os campos.');
    }
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setErrorMessage(''); // limpa a msg de erro ao alternar entre login e cadastro
  };

  return (
    <Container>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Heading>{isLogin ? 'Bem vindo de volta!' : 'Cadastre-se'}</Heading>
          {!isLogin && (
            <>
              <Input
                placeholder="Nome de usuário"
                onChangeText={(text) => setUsername(text)}
              />
              <Input
                placeholder="Telefone"
                onChangeText={(text) => setPhone(text)}
              />
            </>
          )}
          <Input
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          {errorMessage ? (
            <View style={{ marginVertical: 10 }}>
              <Text style={{ color: 'red' }}>{errorMessage}</Text>
            </View>
          ) : null}
          <Button onPress={onSubmit}>
            <ButtonText>{isLogin ? 'Entrar' : 'Cadastrar'}</ButtonText>
          </Button>
          <ToggleText onPress={toggleLogin}>
            {isLogin
              ? 'Não tem uma conta? Cadastre-se'
              : 'Já possui uma conta? Entrar'}
          </ToggleText>
          <Button onPress={goToNewPage}>
        <ButtonText>...</ButtonText>
      </Button>
        </>
      )}
    </Container>
  );
}

export default SignIn;
