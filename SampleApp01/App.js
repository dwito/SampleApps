/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let msg = "Hello World!!"
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View　style = {style.base}>
          <Text>
            {msg}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
base: {
  padding:50
}


});

export default App;
