import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '../Components'
import { ScaleSize } from '../Helper'

const HomeScreen = ({navigation}) => {

  const goToTextinput = ()=>{
    navigation.navigate('textinput')
  }
  
  const goToModals = ()=>{
    navigation.navigate('modals')
  }

  return (
    <View style={styles.container}>
      <Button title='Text Inputs' onPress={goToTextinput} />
      <View style={{marginVertical:ScaleSize.SPACING_10}} />
      <Button title='Modals' onPress={goToModals} />
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