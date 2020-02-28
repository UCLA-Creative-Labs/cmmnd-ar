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
  ViroARSceneNavigator,
} from 'react-viro';

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

var InitialARScene = require('../HelloWorldSceneAR');

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";
var defaultNavigatorType = UNSET;

export default class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      navType : defaultNavigatorType,
      sharedProps : sharedProps
    }
  }
//need to return something totally different 
  getARNav() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }

  getPress(navType) {
    return () => {
      this.setState({
        navType : navType
      })
    }
  }

  getXP() {
    return (
      <View style={localStyles.title}>
      
        <View style={localStyles.inner} >
            <Text style={localStyles.titleText}>DISPLAY</Text>
            <TouchableHighlight style={localStyles.buttons}
              onPress={this.getPress(AR_NAVIGATOR_TYPE)}
              underlayColor={'#68a0ff'}>

              <Text style={localStyles.buttonText}>AR</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  } 

    //this._getXP = this._getXP.bind(this);
    
  
  render() {
    if (this.state.navType == UNSET) {
      return this.getXP();
    } else if (this.state.navType == AR_NAVIGATOR_TYPE) {
      return this.getARNav();
    }
    
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  title : {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
  },
  titleText: {
    top: 80,
    paddingBottom: 20,
    textAlign:'center',
    fontSize : 40,
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: '40%',
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});