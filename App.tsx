import { Button, StyleSheet, Text, View, Appearance, Platform   } from 'react-native'
import React from 'react'
import { PlatformColor } from 'react-native-windows';
import LottieView from 'lottie-react-native';

const App = () => {
  const colorScheme = Appearance.getColorScheme();

  console.log("Platform  =====>", Platform )
  return (
    <View>
      <Text>App</Text>
      <LottieView source={require('./sample.json')} />
      <Button title='click me' color={colorScheme === 'dark' ? 'grey' : 'orange'}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: PlatformColor('SystemAccentColorLight3')
  },
});