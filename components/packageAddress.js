import React from 'react';
import {
    View, Text, StyleSheet, Button, Modal, TouchableOpacity, Image, ScrollView,
    SafeAreaView, Pressable
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { getPossibleShipments } from '../services/shipments';
import {getBalance} from '../services/authentication.js'
import { getAddress } from '../services/maps.js';
export function PackageAddress({ route, navigation }) {
	const {packagee} = route.params;
	// console.log(route.Fparams);
	// console.log("pkg", pkg);
	
	const collateral = packagee.collateral;

	const [packageSingle, setPackageSingle] = useState({});
	const [currentBalance, setCurrentBalance] = useState({});
	const [package_start_address, setPackageStartAddress] = useState('');
	const [package_end_address, setPackageEndAddress] = useState('');

    useEffect(() => {
        setPackageSingle(packagee);
        // console.log(pkg);
		setCurrentBalance(getBalance());
    });
	
	useEffect(() => {
		(async () => {
			let start_address = await getAddress(packagee.package_start);
			setPackageStartAddress(start_address);
			console.log("start_address", start_address);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			let end_address = await getAddress(packagee.package_end);
			setPackageEndAddress(end_address);
			console.log("end_address", end_address);
		})();
	}, []);

	
	
	if(currentBalance>collateral ){

		return (
			<View>
				<Text>Pick up package from {package_start_address}</Text> 
				<Text>Drop off to {package_end_address}</Text> 
				<Pressable style={style.button} onPress={() => navigation.goBack()}  >
                            <Text style={style.text}>Send Proof of Delivery</Text>
                </Pressable>
			</View>

	    );
	}
	
	else{
		return(
			<View>
				<Text>Not enough balance</Text>
				<Pressable style={style.button} onPress={() => navigation.goBack()}  >
                            <Text style={style.text}>Go Back</Text>
                </Pressable>
			</View>
		);
	}
}
const style = StyleSheet.create({
	packagesList: {
		backgroundColor: '#f1f8ff',
	},
	packagesListContainer: {
		backgroundColor: '#f1f8ff',
		paddingVertical: 8,
		marginHorizontal: 8,
	},
});