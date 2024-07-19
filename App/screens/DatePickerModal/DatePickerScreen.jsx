// import { View, Text, Button } from 'react-native';
// import React, { useState } from 'react';
// import CDateChangeModal from '.'; 

// const DatePickerScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const handleDateSubmit = (date) => {
//     console.log("Selected date -- ",date);
//     setSelectedDate(date);
//     closeModal();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button title="Open Date Picker" onPress={openModal} />
//       {selectedDate && (
//         <Text style={{ marginTop: 20 }}>Selected Date: {selectedDate.toDateString()}</Text>
//       )}
//       <CDateChangeModal
//         visible={modalVisible}
//         onClose={closeModal}
//         onSubmit={handleDateSubmit}
//         showToday={true}
//         isDark={false}  
//         firstDay={1}
//         minDate={'2021-01-01'}
//         maxDate={'2023-12-31'}
//         selectedMonth={new Date().getMonth()}
//         monthName={new Date().toLocaleString('default', { month: 'long' })}
//       />
//     </View>
//   );
// };

// export default DatePickerScreen;


import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import CDateChangeModal from './';

const DatePickerScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDateSubmit = (date) => {
    console.log("Selected date -- ", date);
    setSelectedDate(date);
    closeModal();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Date Picker" onPress={openModal} />
      {selectedDate && (
        <Text style={{ marginTop: 20,color:'black' }}>Selected Date: {selectedDate.toDateString()}</Text>
      )}
      <CDateChangeModal
        visible={modalVisible}
        onClose={closeModal}
        onSubmit={handleDateSubmit}
        showToday={true}
        isDark={false}
        firstDay={1}
        minDate={'2021-01-01'}
        maxDate={'2023-12-31'}
        selectedDate={selectedDate} 
      />
    </View>
  );
};

export default DatePickerScreen;
