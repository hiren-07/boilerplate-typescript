import { View, Text, StyleSheet, TextInput, Pressable, Platform, Modal, TouchableOpacity } from 'react-native';
import React, { forwardRef, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, AppFonts, ScaleFonts, ScaleSize } from '../../helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const CustomTextInput = forwardRef((props: any, ref) => {
  const type = props.type;

  const [visible, setVisible] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [date, setDate] = useState<any>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    props.onChangeDate && props.onChangeDate(currentDate);
  };

  const styles = StyleSheet.create({
    inputView: {
      marginVertical: props.error ? ScaleSize.SPACING_5 : ScaleSize.SPACING_15,
    },
    viewIconIncluded: {
      flexDirection: 'row',
    },
    dateText: {
      fontSize: ScaleFonts.SIZE_16,
      color: Colors.secondary,
      fontFamily: AppFonts.Medium,
      paddingVertical: 4,
    },
    inputCommon: {
      paddingVertical: ScaleSize.SPACING_25 / 2,
      backgroundColor: Colors.textInputBackground,
      flex: 1,
      fontSize: ScaleFonts.SIZE_16,
      color: Colors.secondary,
      fontFamily: AppFonts.Medium,
      paddingLeft: props.icon ? 0 : ScaleSize.SPACING_15,
    },
    inputType1: {
      borderBottomWidth: 1,
    },
    inputType2: {
      borderWidth: 1,
    },
    errorText: {
      color: '#FF6868',
      paddingLeft: ScaleSize.SPACING_10,
    },
    leftIconView: {
      justifyContent: 'center',
      paddingHorizontal: ScaleSize.SPACING_10 * 1.2,
      backgroundColor: Colors.textInputBackground,
    },
    rightIconView: {
      justifyContent: 'center',
      backgroundColor: Colors.textInputBackground,
      paddingHorizontal: ScaleSize.SPACING_10 * 1.2,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      paddingVertical: ScaleSize.SPACING_30,
      backgroundColor: Colors.textInputBackground,
      padding: ScaleSize.SPACING_20,
      borderRadius: ScaleSize.SPACING_10,
      alignItems: 'center',
    },
    modalText: {
      fontSize: ScaleFonts.SIZE_18,
      color: Colors.secondary,
      marginBottom: 20,
      fontFamily: AppFonts.SemiBold
    },
    closeButton: {
      backgroundColor: Colors.primary,
      padding: ScaleSize.SPACING_10,
      borderRadius: ScaleSize.SPACING_10,
    },
    closeButtonText: {
      color: Colors.secondary,
      fontSize: ScaleFonts.SIZE_16,
      fontFamily: AppFonts.SemiBold
    },
  });

  let inputStyle;
  if (type == 1) {
    inputStyle = [styles.viewIconIncluded, styles.inputType1];
  } else if (type == 2 || type == 3 || type == 4 || type == 5 || type == 6 || type == 7) {
    inputStyle = [styles.viewIconIncluded, styles.inputType2];
  } else {
    inputStyle = styles.viewIconIncluded;
  }

  return (
    <View style={styles.inputView}>
      <View style={inputStyle}>
        {props.icon && (
          <View style={styles.leftIconView}>
            <MaterialCommunityIcons
              name={props.icon}
              color={Colors.secondary}
              size={ScaleSize.SPACING_20}
            />
          </View>
        )}

        {type == 6 ? (
          <>
            <Pressable onPress={() => setShowPicker(true)} style={styles.inputCommon}>
              <Text style={styles.dateText}>
                {moment(date).format('LL')}
              </Text>
            </Pressable>
            {showPicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
          </>
        ) : type == 7 ? (
          <>
            <Pressable onPress={() => setModalVisible(true)} style={styles.inputCommon}>
              <Text style={styles.dateText}>
                Open Modal
              </Text>
            </Pressable>
            <Modal
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>This is a modal!</Text>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </>
        ) : (
          <TextInput
            style={styles.inputCommon}
            cursorColor={Colors.secondary}
            placeholder={props.placeholder}
            placeholderTextColor={Colors.placeholderColor}
            autoCorrect={false}
            enterKeyHint={props.enterKeyHint}
            keyboardType={props.keyboardType}
            secureTextEntry={visible ? false : props.secureTextEntry}
            onChangeText={props.onChangeText}
            ref={ref}
            onSubmitEditing={props.onSubmitEditing}
            blurOnSubmit={false}
            autoCapitalize="none"
          />
        )}

        {props.secureTextEntry && props.ispassword && (
          <Pressable
            style={styles.rightIconView}
            onPress={() => setVisible(!visible)}
          >
            <MaterialCommunityIcons
              name={visible ? 'eye-off' : 'eye'}
              color={Colors.secondary}
              size={ScaleSize.SPACING_20}
            />
          </Pressable>
        )}

        {props.rightIcon && (
          <Pressable style={styles.rightIconView}
            onPress={() => { setDate(currentDate), props.onChangeDate && props.onChangeDate(currentDate) }} >
            <MaterialCommunityIcons
              name={props.rightIcon}
              color={Colors.secondary}
              size={ScaleSize.SPACING_20}
            />
          </Pressable>
        )}
      </View>
      {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
    </View>
  );
});

export default CustomTextInput;