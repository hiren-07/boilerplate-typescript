import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { ScaleSize } from '../../helper'
import { Button } from '../../components';
import { loader } from '../../redux/action/loaderAction'
import { styles } from './style';


const HomeScreen = ({ navigation }:{navigation:any}) => {

  const dispatch = useDispatch()

  const goToTextinput = () => {
    navigation.navigate('textinput')
  }

  const goToModals = () => {
    navigation.navigate('modals')
  }

  const gotoDataRendering = () => {
    navigation.navigate('dataRendering')
  }

  const onLogout = async () => {
    loader(dispatch, true)
    await AsyncStorage.clear().then(() => {
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

  const goToSettings = () => {
    navigation.navigate('settings')    
  }

  return (
    <View style={styles.container}>
      <Button title='Text Inputs' onPress={goToTextinput} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title='Modals' onPress={goToModals} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title='Data Rendering' onPress={gotoDataRendering} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title='Logout' onPress={onLogout} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title='Settings' onPress={goToSettings} />
    </View>
  )
}


export default HomeScreen