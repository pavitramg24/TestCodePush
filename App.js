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
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CodePush from 'react-native-code-push';


import codePush from "react-native-code-push";


let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: "a new update is available"
}
}
class App extends React.Component {

  render(){
  return(
    <SafeAreaView>
      <TouchableOpacity
      onPress={ () => this.codepushsync()}>
      <Text>smart grower syngenta Application</Text>
      <Text>smart grower syngenta Application</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CodePush(CodePushOptions)(App);
