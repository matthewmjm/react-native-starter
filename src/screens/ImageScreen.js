import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Image Screen</Text>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageScreen;