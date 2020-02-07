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
  ViroARSceneNavigator,
  Viro3DObject
} from 'react-viro';

import Swiper from 'react-native-swiper'

var objArray = [
  require('./js/res/test/coffee_mug/object_coffee_mug.vrx'),
  require('./js/res/test/object_flowers/object_flowers.vrx'),
  require('./js/res/test/emoji_smile/emoji_smile.vrx')];

class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}

import {createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


// <Viro3DObject source={require('./res/Alien.obj')}
//               position={[-0.0, -5.5, -1.15]}
//               type="OBJ" />




var InitialARScene = require('./js/ARHitTestSample');

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

// const styles = StyleSheet.create({
//     wrapper: {
// 	opacity: 0,
//     },
//   slide: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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

  constructor() {
    super();

    this._onShowObject = this._onShowObject.bind(this);
    this._renderTrackingText = this._renderTrackingText.bind(this);
    this._onTrackingInit = this._onTrackingInit.bind(this);
    this._onDisplayDialog = this._onDisplayDialog.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);

    this.state = {
      viroAppProps: {displayObject:false, objectSource:objArray[0], yOffset:0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit:this._onTrackingInit},
      trackingInitialized: false,
      isLoading: false,
    }
  }

  viewStyle() {
    return {
      flex: 1,
      backgroundColor: "orange",
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

// render() {
//   return (
//     <Swiper style={styles.wrapper} showsButtons={true} buttonWrapperStyle={{top: 0}}>
//       <View >
//
//       </View>
//       <ViroARSceneNavigator {...this.state.sharedProps}
//       initialScene={{scene:InitialARScene}}
//       />
//       <View style={styles.slide}>
//         <Text style={{top: 80, fontSize: 40}}>CREATE</Text>
//       </View>
//       <View style={styles.slide}>
//         <Text style={{top: 80, fontSize: 40}}>EVOLVE</Text>
//       </View>
//     </Swiper>
// );
// }

render() {
    return(
      <Swiper loop={false} showsPagination={false} style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      );
  }

_onLoadStart() {
    this.setState({
      isLoading: true,
    });
  }

  // Invoked when a model has loaded, we hide the loading indictator.
  _onLoadEnd() {
    this.setState({
      isLoading: false,
    });
  }

  _renderTrackingText() {
    if(this.state.trackingInitialized) {
      return (<View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'center'}}>
        <Text style={{fontSize:12, color:"#ffffff"}}>Tracking initialized.</Text>
      </View>);
    } else {
      return (<View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top:30, alignItems: 'center'}}>
        <Text style={{fontSize:12, color:"#ffffff"}}>Waiting for tracking to initialize.</Text>
        </View>);
    }
  }

  _onTrackingInit() {
    this.setState({
      trackingInitialized: true,
    });
  }

  _onDisplayDialog() {
    Alert.alert(
    'Choose an object',
    'Select an object to place in the world!',
    [
      {text: 'Coffee Mug', onPress: () => this._onShowObject(0, "coffee_mug", 0)},
      {text: 'Flowers', onPress: () => this._onShowObject(1, "flowers", .290760)},
      {text: 'Smile Emoji', onPress: () => this._onShowObject(2, "smile_emoji", .497823)},
    ],
    );
  }

  _onShowObject(objIndex, objUniqueName, yOffset) {
    this.setState({
        viroAppProps:{...this.state.viroAppProps},
    });
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

// var OBJTest = React.createClass({
//   render: function() {
//     <ViroScene>
//   		<Viro3DObject source={require('./res/Alien.obj')}
//            type="OBJ"
//            position={[0.0, 0.0, -10]}
//            scale={[0.1, 0.1, 0.1]}
//            onLoadStart={this._onLoadStart}
//            onLoadEnd={this._onLoadEnd}
//            onError={this._onError}
//       />
//     </ViroScene>
//   },
//
//   _onLoadStart() {
//      console.log("OBJ loading has started");
//   },
//   _onLoadEnd() {
//      console.log("OBJ loading has finished");
//   },
//   _onError(event) {
//     console.log("OBJ loading failed with error: " + event.nativeEvent.error);
//   },
// });
//
// import HelloWorldSceneAR from './js/HelloWorldSceneAR';
// const bottomTabNavigator = createMaterialBottomTabNavigator(
//   {
//     Display: Display,
//     Create: Create,
//     Evolve: Evolve,
//   },
//   {
//     initialRouteName: 'Display',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad',
//                 marginLeft: 15,
//                 marginRight: 15,
//                 borderTopLeftRadius: 15,
//                 borderTopRightRadius: 15,
//                 overflow: 'hidden'
//               },
//   }
// );



var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
  },

  arView: {
    flex:1,
  },

  buttons : {
    height: 80,
    width: 80,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#00000000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff00',
  }
});
// const AppContainer = createAppContainer(bottomTabNavigator);
