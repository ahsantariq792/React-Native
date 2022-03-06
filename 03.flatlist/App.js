import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListFile from './screens/Flatlist';
import ImageFile from './screens/ImageFile';
import ButtonFile from './screens/ButtonFile';
import TouchableOpacityFile from './screens/TouchableOpacityFile';
import { CommonStyle } from './screens/CommonStyle';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatListFile />
      <ImageFile />
      <ButtonFile />
      <TouchableOpacityFile /> */}
      <CommonStyle />
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
});
