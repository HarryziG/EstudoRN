import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

import {Home} from '../pages/Home';

import ConfigProvider from '../context/configs';

import StackRoutes from './stackRoutes'

const Routes = () => {
  return (
    <NavigationContainer>
      <ConfigProvider>
        <Tab.Navigator
          initialRouteName='Home'
          activeColor='#0000B3'
          barStyle= {{
            backgroundColor: "#fff",
          }}
        >
          <Tab.Screen  
            name="Home" 
            component={Home} 
            options= {{
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={23} />
              ) 
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={StackRoutes} 
            options= {{
              tabBarIcon: ({color}) => (
                <Icon name="settings" color={color} size={23} />
              ) 
            }}
            initialParams={{
              fontSize: 16,
              color: "#000"
            }}
          />
          
          
        </Tab.Navigator>
      </ConfigProvider>
    </NavigationContainer>
  )
}

export default Routes;