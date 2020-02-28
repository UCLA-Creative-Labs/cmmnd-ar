import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Display from './Display';
import Create from './Create';
import Evolve from './Evolve';

const bottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Display: Display,
    Create: Create,
    Evolve: Evolve,
  },
  {
    initialRouteName: 'Display',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad',
                marginLeft: 15,
                marginRight: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                overflow: 'hidden'
              },
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
export default AppContainer;