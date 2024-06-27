import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Constants, ScaleSize } from '../helper';
import { CustomTextInput } from '../components';

const TextInputsDemo = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <CustomTextInput type={Constants.INPUT.TEXT} line={true} rightIcon='close-thick' leftIcon='account-alert'/>
      <CustomTextInput type={Constants.INPUT.TEXT} border={true} />
      <CustomTextInput type={Constants.INPUT.TEXT} border={true} leftIcon='account-alert' />
      <CustomTextInput type={Constants.INPUT.TEXT} border={true} secureTextEntry={true} ispassword={true} />
      <CustomTextInput type={Constants.INPUT.TEXT} border={true} rightIcon='close-thick' />
      <CustomTextInput type={Constants.INPUT.DATE} border={true} leftIcon='calendar-month' date={date} onChangeDate={setDate} />
      <CustomTextInput type={Constants.INPUT.DATE} border={true} rightIcon='calendar-today' leftIcon='calendar-month' date={date} onChangeDate={setDate} />
      <CustomTextInput type={Constants.INPUT.DROPDOWN} rightIcon='chevron-double-down' /> 
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
