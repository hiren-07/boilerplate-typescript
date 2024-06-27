import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '../components'
import { ScaleSize } from '../helper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native';
import { loader } from '../redux/Action/loaderAction'
import { useDispatch } from 'react-redux'


const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch()

  const goToTextinput = ()=>{
    navigation.navigate('textinput')
  }
  
  const goToModals = ()=>{
    navigation.navigate('modals')
  }

  const gotoDataRendering = ()=>{
    navigation.navigate('dataRendering')
  }
const onLogout = async () =>{
  loader(dispatch, true)
  await AsyncStorage.clear().then(()=>{
    loader(dispatch, false)
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'login' },
        ],
      })
    );
  })
  
}
  return (
    <View style={styles.container}>
      <Button title='Text Inputs' onPress={goToTextinput} />
      <View style={{marginVertical:ScaleSize.SPACING_10}} />
      <Button title='Modals' onPress={goToModals} />
      <View style={{marginVertical:ScaleSize.SPACING_10}} />
      <Button title='Data Rendering' onPress={gotoDataRendering} />
      <View style={{marginVertical:ScaleSize.SPACING_10}} />
      <Button title='Logout' onPress={onLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:ScaleSize.SPACING_50
  }
})

export default HomeScreen