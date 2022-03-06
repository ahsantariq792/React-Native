import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {

  let [fontsLoad, error] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    light : JosefinSans_300Light,
    regular: JosefinSans_400Regular,  //giving key value pair so we dont need to write full font family name every time
    medium: JosefinSans_500Medium,
    bold : JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
});


if (!fontsLoad) {
    return <AppLoading />;
}


  return (
    <View style={styles.container}>
      {/* can give multiples classes by using array */}
      <Text style={[styles.textStyle_1, styles.fontStyle]}>Welcome to React Native</Text>
      <Text style={[styles.textStyle_2, styles.fontStyle]}>Welcome to React Native</Text>
      <Text style={[styles.textStyle_3, styles.fontStyle]}>Welcome to React Native</Text>
      {/* use custom inline styling */}
      <Text style={[styles.textStyle_4, styles.fontStyle, {color: "blue"}]}>Welcome to React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle_1 : {
    fontFamily: "bold"
  },
  textStyle_2 : {
    fontFamily: "medium"
  },
  textStyle_3: {
    fontFamily: "regular"
  },
  textStyle_4 : {
    fontFamily: "light"
  },
  fontStyle: {
    fontSize: 24,
    padding: 10
  }
});
