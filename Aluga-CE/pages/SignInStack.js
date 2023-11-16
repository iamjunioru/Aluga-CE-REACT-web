import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignInStack from './pages/SignIn';

function App() {
  return (
    <NavigationContainer>
      <SignInStack />
    </NavigationContainer>
  );
}

export default App;