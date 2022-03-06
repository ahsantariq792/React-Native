import react from "react";
import { Button, StyleSheet, View } from 'react-native'
import { Alert } from "react-native";

const ButtonFile = () => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.buttonStyle}
                title="click"
                onPress={() => {
                    Alert.alert("Button Clicked")
                    console.log("button")
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        textAlign: "center",
        fontSize: 30,
        padding: 20,
        width: 300,
        borderRadius: 30,
    },
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default ButtonFile;