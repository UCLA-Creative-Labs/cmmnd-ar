/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroARScene,
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import Swiper from 'react-native-swiper'

import {createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

// export default class App extends React.Component {
//   render() {
//     return (
//           <AppContainer>
//           </AppContainer>
//     );
//   }
// }

export default class SwiperComp extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} buttonWrapperStyle={{top: 0}}>
        <View style={styles.slide}>
          <Text style={{top: 80, fontSize: 40}}>DISPLAY</Text>
        </View>
        <View style={styles.slide}>
          <Text style={{top: 80, fontSize: 40}}>CREATE</Text>
        </View>
        <View style={styles.slide}>
          <Text style={{top: 80, fontSize: 40}}>EVOLVE</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComp)



class Display extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Text style={{top: 80, fontSize: 40}}>DISPLAY</Text>
      </View>
    );
  }
}

class Create extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Text style={{top: 80, fontSize: 40}}>CREATE</Text>
      </View>
    );
  }
}

class Evolve extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Text style={{top: 80, fontSize: 40}}>EVOLVE</Text>
      </View>
    );
  }
}

import HelloWorldSceneAR from './js/HelloWorldSceneAR';
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
