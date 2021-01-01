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
      message:"default"
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
            <Button title="Change message!" onPress={this.doChangeAction}/>
            {/* MyViewの変数に値を設定 */}
            <MyView name = "aaa"/>
          </View>
        </SafeAreaView>
      </>
    );
  };//render

  doAction = () => {
    Alert.alert('you Clicked!');
  }

  doChangeAction = () => {
    this.setState({message:"aaaa"});
  }
};

class MyView extends Component {

  constructor(props){
    super(props)
    //いきなり定義して変数になるのに違和感を感じるが、これてグローバル変数として使えるようだ
    props.name = "Hoge"
  }

  render(){
    return(
      <Text style = {style.base}>別クラスにComponenで定義:{this.props.name}</Text>
    );
  }//render

}//Component


//constでスタイルを新規作成
const style = StyleSheet.create({
//View用のスタイル:base
  base: {
    padding:50
  }
});
