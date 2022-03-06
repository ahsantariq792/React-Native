import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

const FlatListFile = () => {

    const data = [
        {
            index: "1",
            name: "Ahsan",
        },
        {
            index: "2",
            name: "Asad",
        },
        {
            index: "3",
            name: "Ahmas",
        },
        {
            index: "4",
            name: "aaa",
        },
        {
            index: "5",
            name: "Ali",
        },
        {
            index: "6",
            name: "Ashraf",
        },
        {
            index: "7",
            name: "Anwar",
        },
    ]

    return (
        <FlatList
            style={styles.listStyle}
            data={data}
            keyExtractor={(key) => {
                return key.index
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            // numColumns={2}                                   it is used only in vertical 
            renderItem={(element) => {
                console.log(element.item.name)
                return <Text style={styles.textStyles}>{element.item.name}</Text>
            }
            }
        />
    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 40,
        height: 120,
        padding: 30,
        backgroundColor: "blue",
        margin: 20,
        color: "white",
        borderRadius: 10
    },
    listStyle: {
        textAlign: "center",
        margin: 20,
        margin: 20,
        padding: 10,
    }
});


export default FlatListFile