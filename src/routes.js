import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import home from './pages/home';
import login from './pages/login'

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }} lazy={true}>
        <AppStack.Screen name='login' component={login} options={{unmountOnBlur:true}} />
        <AppStack.Screen name='home' component={home} options={{unmountOnBlur:true}} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}
