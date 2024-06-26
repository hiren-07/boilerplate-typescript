import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ScaleSize } from '../Helper';
import { CustomTextInput } from '../Components';

const TextInputsDemo = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <CustomTextInput type='1' />
      <CustomTextInput type='2' />
      <CustomTextInput type='3' icon='account-alert' />
      <CustomTextInput type='4' secureTextEntry={true} ispassword={true} />
      <CustomTextInput type='5' rightIcon='close-thick' />
      <CustomTextInput type='6' icon='calendar-month' date={date} onChangeDate={setDate} />
      <CustomTextInput type='6' rightIcon='calendar-today' icon='calendar-month' date={date} onChangeDate={setDate} />
      <CustomTextInput type='7' rightIcon='chevron-double-down' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: ScaleSize.SPACING_50,
  },
});

export default TextInputsDemo;
