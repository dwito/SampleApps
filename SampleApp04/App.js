/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title = "Tap" onPress = {this.doAction}/>
      </SafeAreaView>
    </>
  );
  }

  doAction = () =>{
    fetch("https://covid19-japan-web-api.now.sh/api/v1/prefectures",
    {
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
    },
  }).then((response)=>{
    response.text().then((tet)=>{
      alert(tet)
    });
  });
  }

};
