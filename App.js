import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from "./src/components/MainScreen/MainScreen"
import SecondScreen from "./src/components/SecondScreen/SecondScreen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: 'Movie list'}}
        />
        <Stack.Screen 
          name="SecondScreen" 
          component={SecondScreen}
          options={{title: 'Movie details'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
