import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Configs} from '../pages/Configs';
import {Fonts} from '../pages/Fonts';
import {Colors} from '../pages/Colors';

const Stack = createStackNavigator();


const StackRoutes = () => (
 <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
 >
    <Stack.Screen 
      name="Configs"
      component={Configs}
      initialParams={{
        fontSize: 16,
        color: "#000"
      }}
    />

    <Stack.Screen 
      name="Fonts"
      component={Fonts}
    />

    <Stack.Screen 
      name="Colors"
      component={Colors}
    />
 </Stack.Navigator>
)

export default StackRoutes;