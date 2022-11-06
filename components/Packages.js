import * as React from 'react';
import { useState, useEffect } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getPossibleShipments } from '../services/shipments';

export default function Packages({ route, navigation }) {
  const { currentLocation, endLocLatLon } = route.params;
  const [shipments, setShipments] = useState([]);
  useEffect(() => {
		(async () => {
			let shipments = await getPossibleShipments(currentLocation, endLocLatLon);
      setShipments(shipments);
		})();
	}, []);
  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{endLocLatLon}</Text>
    </View>
  );
}