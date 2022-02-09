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
class App extends React.Component {


  codepushsync(){
    CodePush.sync({
      installMode:CodePush.InstallMode.IMMEDIATE,
      updateDialog:true
    },(status) => {
      for(var key in CodePush.SyncStatus)
      {
        if(status === CodePush.SyncStatus[key])
        {
          console.log("udated")
          break;
        }
      }
    })
  }


  render(){
  return(
    <SafeAreaView>
      <TouchableOpacity
      onPress={ () => this.codepushsync()}>
      <Text>smart grower syngenta pavithra yashwanth</Text>
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

export default App = codePush(App);;
