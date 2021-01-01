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
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View　style = {style.base}>
            <Text>aaa</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

//constでスタイルを新規作成
const style = StyleSheet.create({
  //View用のスタイル:base
    base: {
      padding:50
    }
  });

