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
			<View style={style.mainBody}>
				<Text style = {style.mainText2}>Pick up package from {package_start_address} </Text> 
				<Text style = {style.mainText2}>Drop off to {package_end_address}</Text> 
				<View style = {style.buttonContainer}>
				<TouchableOpacity style={style.buttonMain} onPress={() => navigation.goBack()}  >
                            <Text style={style.textButton}>Send Proof of Delivery</Text>
                </TouchableOpacity>
				</View>
			</View>

	    );
	}
	
	else{
		return(
			<View style = {style.mainBody}>
				<Text style = {style.mainText}>Not enough balance</Text>
				<View style = {style.buttonContainer}>
				<TouchableOpacity style={style.buttonMain} onPress={() => navigation.goBack()}  >
                            <Text style={style.textButton}>Go Back</Text>
                </TouchableOpacity>
				</View>
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
	mainBody: {
		alignItems: 'center'
	},
	mainText: {
		marginTop: 275,
		fontSize: 35,
        fontWeight: '600',
        marginBottom: 8,
	},
	buttonMain: {
		flex:1,
		alignSelf:'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		height: 50,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5 
	},
	
	buttonContainer: {
		width: 150,
		height: 60
		
	},

	textButton: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		paddingTop: 20,
		paddingBottom: 90
	},
	mainText2: {
		marginTop: 50,
		fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
	}

});