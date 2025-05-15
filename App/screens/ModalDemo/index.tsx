import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomModal } from '../../Components';
import { styles } from './style';

const ModalDemo = () => {

  const [modalVisible, setModalVisible] = useState<boolean>(false);

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


export default ModalDemo;