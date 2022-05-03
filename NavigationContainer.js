// In MainNavigator.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import BlogEditScreen from './src/screens/BlogEditScreen';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={CreateBlogScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={BlogEditScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
