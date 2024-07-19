import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { ScaleSize } from '../../helper'
import { Button } from '../../components';
import { loader } from '../../redux/action/loaderAction'
import { styles } from './style';
import { useTranslation } from "react-i18next";


const HomeScreen = ({ navigation }: { navigation: any }) => {

  const dispatch = useDispatch()
  const { t } = useTranslation();

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

  const goToDatepicker = () =>{
    navigation.navigate('datepicker')
  }

  return (
    <View style={styles.container}>

      <Button title={t("str_sign_in")} onPress={() => { }} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title={t('str_text_inputs')} onPress={goToTextinput} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title={t('str_modals')} onPress={goToModals} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title={t('str_data_renderig')} onPress={gotoDataRendering} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title={t('str_logout')} onPress={onLogout} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title={t('str_settings')} onPress={goToSettings} />
      <View style={{ marginVertical: ScaleSize.SPACING_10 }} />
      <Button title={'Date picker'} onPress={goToDatepicker} />
    </View>
  )
}


export default HomeScreen