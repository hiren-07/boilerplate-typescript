import { Dimensions, Platform } from 'react-native';
const { width,height } = Dimensions.get('window');

const aspectRatio = width / (Platform.OS === "ios" ? 480 : 450);

const getLayoutSize = (valueDimen: number) => {
  var newScale = ((aspectRatio * valueDimen) - valueDimen) * 0.5 + valueDimen
  return newScale
};


const getFontSize = (valueFontSize: number, reduxValue?: any) => {
  let scale = ((aspectRatio * valueFontSize) - valueFontSize) * 0.8 + valueFontSize
  return +scale

};

export {
    getFontSize, getLayoutSize, height,
    width
};

