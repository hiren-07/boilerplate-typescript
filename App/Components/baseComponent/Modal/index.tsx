import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const CustomModal = (props:any) => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.headerText}>{props.headerText}</Text>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <View style={styles.buttonContainer}>
            {props.buttons.map((button:any, index:any) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.button]}
                onPress={button.onClick}
              >
                <Text style={styles.buttonText}>{button.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default CustomModal;