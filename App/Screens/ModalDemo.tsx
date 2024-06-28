import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../helper';
import CustomModal from '../components/baseComponent/CustomModal';

const ModalDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // const buttons = ;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonView}>
        <Text style={styles.text}>Open Modal</Text>
      </TouchableOpacity>

      <CustomModal
        visible={modalVisible}
        headerText="Header Text"
        title="Title Text"
        description="This is the description text of the modalThis is the description text of the modalThis is the description text of the modalThis is the description text of the modalThis is the description text of the modalThis is"
        buttons={[
          { text: 'Cancel', onClick: () => setModalVisible(false) },
          { text: 'OK', onClick: () => setModalVisible(false) },

        ]}
        onRequestClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    paddingVertical: ScaleSize.SPACING_25 / 2,
    backgroundColor: Colors.textInputBackground,
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontSize: ScaleFonts.SIZE_16,
    color: Colors.secondary,
    fontFamily: AppFonts.Medium,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ScaleSize.SPACING_60
  },
})

export default ModalDemo;