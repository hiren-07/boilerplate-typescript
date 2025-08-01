import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../components/baseComponent/textInput';
import { styles } from './style';
import { INPUT } from '../../helper/Constants';
const TextInputsDemo = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <CustomTextInput type={INPUT.TEXT} line={true} rightIcon='close-thick' />
      <CustomTextInput type={INPUT.TEXT} border={true} rightIcon='close' />
      <CustomTextInput type={INPUT.TEXT} border={true} leftIcon='account-alert' />
      <CustomTextInput type={INPUT.TEXT} border={true} secureTextEntry={true} ispassword={true} />
      <CustomTextInput type={INPUT.TEXT} border={true} rightIcon='close-thick' />
      <CustomTextInput type={INPUT.DATE} border={true} leftIcon='calendar-month' date={date} onChangeDate={setDate} />
      <CustomTextInput type={INPUT.DATE} border={true} rightIcon='calendar-today' leftIcon='calendar-month' date={date} onChangeDate={setDate} />
      <CustomTextInput type={INPUT.DROPDOWN} rightIcon='chevron-double-down' />
    </View>
  );
};


export default TextInputsDemo;
