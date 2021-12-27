import React, { useState, useContext } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';



export default function Pageone({ navigation }) {



    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>
                Page One
            </Text>

            <Button styles={styles.btn}
                color="#f00"
                title="Next Page"
                onPress={() => navigation.navigate('Pagetwo')} />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
    },

    text: {
        // color: 'white',
        fontSize: 40,
        margin: 40,
        fontWeight: 'bold',
        
    },

});