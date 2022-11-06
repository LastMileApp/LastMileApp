import React from 'react';
import {
    View, Text, StyleSheet, Button, Modal, TouchableOpacity, Image, ScrollView,
    SafeAreaView, Pressable
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { getPossibleShipments } from '../services/shipments';
import {getBalance} from '../services/authentication.js'
import { getAddress } from '../services/maps.js';
import {Icon} from 'react-native-elements'
export function PackageAddress({ route, navigation }) {
	const {packagee} = route.params;
	
	const collateral = packagee.collateral;

	const [packageSingle, setPackageSingle] = useState({});
	const [currentBalance, setCurrentBalance] = useState({});
	const [package_start_address, setPackageStartAddress] = useState('');
	const [package_end_address, setPackageEndAddress] = useState('');

	const [currentAddress, setCurrentAddress] = useState('');
	const [finalAddress, setFinalAddress] = useState('');

    useEffect(() => {  
        setPackageSingle(packagee);
		setCurrentBalance(getBalance());
    });
	
	useEffect(() => {
		(async () => {
			let start_address = await getAddress(packagee.package_start);
			setPackageStartAddress(start_address);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			let end_address = await getAddress(packagee.package_end);
			setPackageEndAddress(end_address);
		})();
	}, []);
	useEffect(() => {
		(async () => {
			let currentAddress = await getAddress(packagee.user_start);
			setCurrentAddress(currentAddress);
		})();
	});
	useEffect(() => {
		(async () => {
			let finalAddress = await getAddress(packagee.user_end);
			setFinalAddress(finalAddress);
		})();
	});

	
	
	if(currentBalance>collateral ){

		return (
			<View style={style.mainBody}>
				<Text style = {style.mainText2}>{currentAddress} </Text> 
				<Icon name="arrow-down" size={50} color="white" type="entypo" />
				<Text style = {style.mainText2}>{package_start_address} </Text> 
				
				<Icon name="arrow-down" size={50} color="white" type="entypo" />
				<Text style = {style.mainText2}>{package_end_address}</Text> 
				<Icon name="arrow-down" size={50} color="white" type="entypo" />
				<Text style = {style.mainText2}>{finalAddress}</Text> 
				<View style = {style.buttonContainer}>
				<Pressable style={style.button} onPress={() => navigation.goBack()}  >
						<Text style={style.text}>Send Proof of Delivery</Text>
				</Pressable>
				</View>
			</View>

	    );
	}
	
	else{
		return(
			<View style = {style.mainBody}>
				<Text style = {style.mainText}>Not enough balance</Text>
				<View style = {style.buttonContainer}>
				<Pressable style={style.button} onPress={() => navigation.goBack()}  >
						<Text style={style.text}>Go Back</Text>
				</Pressable>
				</View>
			</View>
		);
	}
}
const style = StyleSheet.create({
	packagesList: {
		backgroundColor: '#1a1d27',
	},
	packagesListContainer: {
		backgroundColor: '#1a1d27',
		paddingVertical: 8,
		marginHorizontal: 8,
	},
	mainBody: {
		alignItems: 'center',
		height:'100%',

		backgroundColor: '#1a1d27',
	},
	mainText: {
		marginTop: 275,
		fontSize: 35,
        fontWeight: '600',
        marginBottom: 8,
		color: '#fff',
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
	
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'black',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#20bbff',
	},
	mainText2: {
		marginTop: 50,
		fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 10,
		borderTopRightRadius:  60,
		borderBottomRightRadius:  60,
		borderColor: 'blue',
		color:"white"
	}

});