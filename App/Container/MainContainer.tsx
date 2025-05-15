import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Loader from '../Components/reduxComponent/Loader';

const { width } = Dimensions.get('window');

const MainContainer = () => {

    return (
        <View style={styles.container}>
            <Loader />
        </View>
    );
};

export default MainContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'red',
        right: 0,
        left: 0,
        width: width,
        zIndex: 9999,
    },
});
