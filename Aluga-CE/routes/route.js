import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import Welcome from '../pages/home/welcome';  
import AnotherPage from '../pages/anotherPage';  

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SignIn} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AnotherPage" component={AnotherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
