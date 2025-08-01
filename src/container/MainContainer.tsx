import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../helper/Responsive'
import Loader from '../components/reduxComponent/Loader'

const MainContainer = () => {
  return (
       <View style={styles.container}>
            <Loader />
        </View>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor:'red',
        right: 0,
        left: 0,
        width: width,
        zIndex: 9999,
    }
})