import React from 'react';
import { View, Text } from 'react-native';

const Welcome = ({ route }) => {
  const { username } = route.params;

  return (
    <View>
      <Text>Bem-vindo, {username}!</Text>
    </View>
  );
};

export default Welcome;
