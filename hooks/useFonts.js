import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    limelight: require('../assets/fonts/Lato-Regular.ttf'),
    indie: require('../assets/fonts/Lato-Bold.ttf'),
  });