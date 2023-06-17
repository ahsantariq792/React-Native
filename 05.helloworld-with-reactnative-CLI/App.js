import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style= {styles.container}>
      <Text style= {styles.textStyles}>Hello Word form React CLI</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
  }

})