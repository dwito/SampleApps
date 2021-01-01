/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// Viewのパーツ類はインポートしないと使えない！
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

//コンストラクラの書き方はスキップ

  let msg = "Hello World!!"
  this.state = {message:'default'}
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View　style = {style.base}>
          <Text>
            {msg}
          </Text>
          {/* Buttonは閉じカッコが他と違うので注意 */}
          <Button title="Click!" onPress={this.doAction}/>
          <Text>
            {this.state.message}
          </Text>
          {/* Buttonは閉じカッコが他と違うので注意 */}
          <Button title="Click!" onPress={this.doChangeAction}/>
        </View>
      </SafeAreaView>
    </>
  );
};

doAction = () => {
  Alert.alert('you Clicked!');
}

doChangeAction = () => {
  this.message = "changed";
  // this.setState({message:'changed'});
}

//constでスタイルを新規作成
const style = StyleSheet.create({
//View用のスタイル:base
base: {
  padding:50
}
});

export default App;
