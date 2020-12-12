import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const introduction = <Text>My name is Matthew!</Text>;
    return (
        <View>
            <Text style={styles.titleStyle}>Getting Started with React Native!</Text>
            <Text style={styles.introductionStyle}>{introduction}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    introductionStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;