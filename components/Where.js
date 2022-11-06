import * as React from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {getLatLong} from '../services/maps.js'
import * as Location from 'expo-location'

function Where ({ navigation })  {
    const [location, setLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const [endLocLatLon, setEndLocLatLon] = useState('');
    async function actionsOnPress(endLocation){
      let a = await getLatLong(endLocation);
      console.log("aasdfadsf");
      console.log(a);

      navigation.navigate('Packages', { currentLocation: location, endLocation:endLocation});
    }
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                enableHighAccuracy: true,
                timeInterval: 5
            });
            console.log(location);
            setLocation(location);
        })();
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         let endLocLatLon = await getLatLong(endLocation);
    //         // setEndLocLatLon(endLocLatLon);
    //     })();
    // });
        
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Where are you going?</Text>
      <View style={styles.input}>
        
        <TextInput
          style = {styles.TextIn}
          placeholder = "Full Address"
          onChangeText={(endLocation) => setEndLocation(endLocation)} />
        
      </View>

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      {/* <Pressable style={styles.button} onPress={onPress}></Pressable> */}
      <Pressable style={styles.button} onPress={() => actionsOnPress(endLocation)}  >
        <Text style={styles.text}>Go</Text>
        </Pressable>
    </View>
  );}

export default Where;


const styles = StyleSheet.create({
    title: {
        height: 90,
        fontSize:35,
        padding: 5,
    },
    container: {
      flex: 1,
      backgroundColor: "#86CB92",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    image:{
      marginBottom: 50
    },
  
    input: {
      backgroundColor: '#71b48d',
      borderRadius: 30,
      width: "80%",
      height: 80,
      marginBottom: 400,
      alignItems: "center",
    },
    
    TextIn: {
      height: 50,
      flex: 1,
      padding: 30,
      marginLeft: 0,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginButton: {
      width: "80%",
      borderRadius: 55,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#6359C",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#71b48d',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
  });
  
