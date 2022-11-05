import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect, useState, useContext} from 'react';
import {loadShipments, shipmentsGet} from '../services/shipments.js';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function Where ({ navigation })  {
  const [packages,setPackages] = useState({});
  useEffect(() => {
    loadShipments();
    const t = Date.now();
    while(Date.now() - t <5000){
      //trolling
      // console.log("a");
    }
    console.log("done trolling");
    setPackages(shipmentsGet());
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{packages.a}</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );}