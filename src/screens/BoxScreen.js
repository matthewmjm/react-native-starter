import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // alignItems: 'stretch',
        // alignItems: 'flex-start',
        // alignItems: 'center',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-start',
        // justifyContent: 'center',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        // justifyContent: 'space-around',
        // flexDirection: column,
        // flexDirection: 'row',
    },
    textOneStyle: {
        borderWidth: 3,
        padding: 5,
        borderColor: 'red',
        flex: 4,
        // alignSelf: 'stretch',
        // alignSelf: 'flex-end',
        alignSelf: 'center',
        // alignSelf: 'flex-begin
    },
    textTwoStyle: {
        borderWidth: 3,
        padding: 5,
        borderColor: 'red',
        flex: 2,
        // alignSelf: 'stretch',
        // alignSelf: 'flex-end',
        // alignSelf: 'center',
        // alignSelf: 'flex-begin'
    },
    textThreeStyle: {
        borderWidth: 3,
        padding: 5,
        borderColor: 'red',
        flex: 4,
        // alignSelf: 'stretch',
        // alignSelf: 'flex-end',
        // alignSelf: 'center',
        // alignSelf: 'flex-begin
    }
});

export default BoxScreen;