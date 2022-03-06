import react from "react";
import { View, StyleSheet, Image, Text } from 'react-native'


const ImageFile = () => {
    return (
        < View >
            <Text style={styles.textStyle}>Image File</Text>
            <Image source={require('../assets/background.jpg')} style={styles.imageStyle} />
        </View >
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

export default ImageFile;