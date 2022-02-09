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


import codePush from "react-native-code-push";
class App extends React.Component {
  render(){
  return(
    <SafeAreaView>
      <TouchableOpacity
      onPress={ () => alert("smart grower")}>
      <Text>smart grower syngenta pavithra</Text>
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
