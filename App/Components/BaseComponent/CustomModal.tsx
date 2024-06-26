import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomModal = (props:any) => {
  console.log("Props -> ",props);
  
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
            {props.buttons.map((button, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.button, { backgroundColor: '#2196F3' }]}
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

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default CustomModal;
