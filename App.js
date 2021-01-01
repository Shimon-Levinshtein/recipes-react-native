import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { screensEnabled } from 'react-native-screens';

import MealsNavigetor from './navigation/MealsNavigator';

screensEnabled();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sens': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sens-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={err => console.log(arr)}/>
  }

  return (
    // <View style={styles.container}>
      <MealsNavigetor />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
