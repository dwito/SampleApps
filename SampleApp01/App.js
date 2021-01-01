/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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

// export default App;
// const App: () => React$Node = () => {
export default class App extends Component {

//コンストラクラでstateを初期化
constructor(props){
  super(props)
  this.state = {
    message:""
  }
}

  render() {
    let msg = "Hello World!!"
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
          {/* <Button title="Change message!" onPress={this.doChangeAction}/> */}
          <Button title="Change message!" onPress={this.doChangeAction}/>
        </View>
      </SafeAreaView>
    </>
  );
};

doAction = () => {
  Alert.alert('you Clicked!');
}

doChangeAction = () => {
  this.setState({message:"aaaa"});
}

};


//constでスタイルを新規作成
const style = StyleSheet.create({
//View用のスタイル:base
base: {
  padding:50
}
});
