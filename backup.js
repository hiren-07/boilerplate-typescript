// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import React, { forwardRef, useState } from 'react';
// import { Colors, AppFonts, Strings, ScaleFonts, ScaleSize } from '../../Helper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const CustomTextInput = forwardRef((props: any, ref) => {

//   const type = props.type

//   const styles = StyleSheet.create({
//     inputView: {
//       marginVertical: props.error ? ScaleSize.SPACING_5 : ScaleSize.SPACING_15,
//     },
//     iconView: {
//       justifyContent: 'center',
//       backgroundColor: Colors.textInputBackground,
//       paddingLeft: ScaleSize.SPACING_15,
//     },
//     inputAll1: {
//       paddingVertical: ScaleSize.SPACING_25 / 2,
//       backgroundColor: Colors.textInputBackground,
//       flex: 1,
//       fontSize: ScaleFonts.SIZE_16,
//       color: Colors.secondary,
//       fontFamily: AppFonts.Medium,
//       paddingLeft: ScaleSize.SPACING_10,
//       borderBottomWidth: 1
//     },
//     inputAll999:{
//       paddingVertical: ScaleSize.SPACING_25 / 2,
//       backgroundColor: Colors.textInputBackground,
//       flex: 1,
//       fontSize: ScaleFonts.SIZE_16,
//       color: Colors.secondary,
//       fontFamily: AppFonts.Medium,
//       paddingLeft: ScaleSize.SPACING_10,
//     },
//     inputAll2: {
//       paddingVertical: ScaleSize.SPACING_25 / 2,
//       backgroundColor: Colors.textInputBackground,
//       flex: 1,
//       fontSize: ScaleFonts.SIZE_16,
//       color: Colors.secondary,
//       fontFamily: AppFonts.Medium,
//       paddingLeft: ScaleSize.SPACING_10,
//       borderWidth: 1
//     },
//     errorText: {
//       color: '#FF6868',
//       paddingLeft: ScaleSize.SPACING_10,
//     },
//     eyeIconView: {
//       alignSelf: 'center',
//       justifyContent: 'center',
//       right: 0,
//       position: 'absolute',
//     },
//   });

//   let inputtype;
//   if(type==1){
//     inputtype = styles.inputAll1
//   }else if(type==2){
//     inputtype = styles.inputAll2
//   }else{
//     inputtype = styles.inputAll999
//   }

//   const [visible, setVisible] = useState<boolean>(false)

//   return (
//     <View style={styles.inputView}>
//       <View style={{ flexDirection: 'row' }}>

//         {props.icon && <View style={styles.iconView}>
//           <MaterialCommunityIcons
//             name={props.icon}
//             color={Colors.secondary}
//             size={ScaleSize.SPACING_20}
//           />
//         </View>}

//         <TextInput
//           style={inputtype}
//           cursorColor={Colors.secondary}
//           placeholder={props.placeholder}
//           placeholderTextColor={Colors.secondary}
//           autoCorrect={false}
//           enterKeyHint={props.enterKeyHint}
//           keyboardType={props.keyboardType}
//           secureTextEntry={visible ? false : props.secureTextEntry}
//           onChangeText={props.onChangeText}
//           ref={ref}
//           onSubmitEditing={props.onSubmitEditing}
//           blurOnSubmit={false}
//           autoCapitalize='none'
//         />
//         {props.secureTextEntry &&
//           <TouchableOpacity style={styles.eyeIconView} onPress={() => setVisible(!visible)}>
//             <MaterialCommunityIcons name={visible ? 'eye-off' : 'eye'} color={Colors.secondary} size={ScaleSize.SPACING_20} style={{ marginHorizontal: ScaleSize.SPACING_20 }}
//             />
//           </TouchableOpacity>}

//       </View>
//       {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
//     </View>
//   );
// });



// export default CustomTextInput;