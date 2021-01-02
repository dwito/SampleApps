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
  SectionList,//ListViewは非推奨になった
  View,
  Text,
  StatusBar,
  Switch,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  
  //DataSourceを作成
  sections = [
    { title: 'PC', data: ['Windows', 'MacOS', 'ChromeOS'] },
    { title: 'Mobile', data: ['Andoroid', 'iOS'] },
  ];

    // getItem
    getItem = ({ item }) => {
      return (
        <View>
          <Text style = {style.item}
            onPress={ () => this.selectAction(item) }
          >
            { item }
          </Text>
        </View>
      );
    }

    // getSection
  getSection = ({ section }) => {
    return (
      <Text>
        { section.title }
      </Text>
    );
  }

  constructor(props){
    super(props);
    //bool型のvalueという変数を定義
    this.state = {
      value:false,
      selectItem:"未選択"
    };
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
          <View>
          <Text style = {style.base}>ListViewを表示するUI</Text>
          <Text>選択したList:{this.state.selectItem}</Text>
          <SectionList
            sections={ this.sections }
            renderItem={ this.getItem }
            renderSectionHeader={ this.getSection }
            keyExtractor={ (item, index) => index }
          />
          </View>
        </SafeAreaView>
      </>
    );
  }
  //アクションの関数
  doAction = (value) => this.setState({value:value})
  
  selectAction = (item) => {
    this.setState({
      selectItem: item,
    });
  }
};

//constでスタイルを新規作成
const style = StyleSheet.create({
  //View用のスタイル:base
    base: {
      padding:50
    },
  //SectionViewのItemのスタイル:item
    item: {
      margin: 2,
      padding: 15,
      color: '#fff',
      fontSize: 20, 
      backgroundColor: 'skyblue',
    },
  });

