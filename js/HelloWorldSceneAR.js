'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroBox,
  ViroVideo,
  ViroARPlane,
  ViroButton,
} from 'react-viro';

import Display from './components/Display';

var sharedProps = {
  apiKey:"API_KEY_HERE",
}
var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";
var defaultNavigatorType = AR_NAVIGATOR_TYPE;

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();
    this.state = {
      navType : defaultNavigatorType,
      sharedProps : sharedProps
    }
  }

  // constructor() {
  //   super();

  //   // Set initial state here
  //   this.state = {
  //     text : "Initializing AR..."
  //   };

  //   // bind 'this' to functions
  //   this._onInitialized = this._onInitialized.bind(this);
  // }
  

  getPress(navType) {
    return () => {
      this.setState({
        navType : navType
      })
    }
  }

  getAR(){
    return (

        <ViroARScene onTrackingUpdated={this._onInitialized} >
          
          <ViroARImageMarker target={"cmmnd1"}>
            <ViroVideo
              source={require('./res/color-change.mp4')}
              height={0.145}
              width={0.145}
              loop={true}
              position={[0,0,0]}
              transformBehaviors={["billboard"]}
              />
          </ViroARImageMarker>

        </ViroARScene>

    );
  }

  getBacktoDisplay() {
    return (
      <Display 
        sharedProps={this.state.sharedProps}
        navType={this.state.navType}
      />);
  }

  render() {
    if (this.state.navType == UNSET) {
      return this.getBacktoDisplay();
    } else if (this.state.navType == AR_NAVIGATOR_TYPE) {
      return this.getAR();
    }
    
  }

  // _onInitialized(state, reason) {
  //   if (state == ViroConstants.TRACKING_NORMAL) {
  //     this.setState({
  //       text : "Hellish World >:("
  //     });
  //   } else if (state == ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  //}
}

ViroARTrackingTargets.createTargets({
  "cmmnd1" : {
    source : require('./res/cmmnd1.jpg'),
    orientation : "Up",
    physicalWidth : 0.145 // real world width in meters
  },
  "cmmnd2" : {
    source : require('./res/cmmnd2.jpg'),
    orientation : "Up",
    physicalWidth : 0.36 // real world width in meters
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
