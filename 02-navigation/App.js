import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View>
      
      <Navigation/>

    </View>
  );
}
