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
  Switch,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  
  constructor(props){
    super(props);
    //bool型のvalueという変数を定義
    this.state = {value:false};
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text style = {style.base}>SWitchを変更するUI</Text>
            <Text>SWitch:{this.state.value ? "オン":"オフ"}</Text>
            <Switch value={this.state.value} onValueChange={this.doAction}/>
          </View>
        </SafeAreaView>
      </>
    );
  }

  doAction = (value) => this.setState({value:value})

};

//constでスタイルを新規作成
const style = StyleSheet.create({
  //View用のスタイル:base
    base: {
      padding:50
    }
  });

