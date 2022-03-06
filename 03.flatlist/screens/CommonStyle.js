import react from "react";
import { View, Text, StyleSheet } from "react-native";


export const CommonStyle = () => {
    return (
        <View>
            <View>
                <Text style={[styles.Textone, styles.AllStyle]}>Text One</Text>
                <Text>Text Two</Text>
                <Text>Text Three</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    Textone: {
        color: "red"
    },
    Texttwo: {
        color: "blue"
    },
    Textthree: {
        color: "green"
    },
    AllStyle: {
        fontSize:30
    }


})