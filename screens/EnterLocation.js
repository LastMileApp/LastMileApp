import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    }
  });
  
  export default EnterLocation =  ({ navigation })  => {
    return (
       <ScreenContainer>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('PackagesScreen', { name: 'location' })
          }
        />
       </ScreenContainer>  
      );
}
  