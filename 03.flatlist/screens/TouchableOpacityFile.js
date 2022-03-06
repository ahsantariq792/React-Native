import react from "react";
import { TouchableOpacity, Image, StyleSheet, Text, Alert } from 'react-native'


const TouchableOpacityFile = () => {
    return (
        <TouchableOpacity
            onPress={() => Alert.alert("button")}>
            <Text style={styles.textStyle}> Click </Text>
            <Image source={require('../assets/background.jpg')} style={styles.imageStyle} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: 300,
    },
    textStyle: {
        fontSize: 30,
        textAlign: "center"
    }
});

export default TouchableOpacityFile;