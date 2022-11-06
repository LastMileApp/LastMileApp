import * as React from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { getLatLong } from '../services/maps.js'
import * as Location from 'expo-location'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';




function Where({ navigation }) {
	const [location, setLocation] = useState('');
	const [mapRegion, setMapRegion] = useState({
		latitude: 0,
		longitude: -122.4324,
		latitudeDelta: 0.02,
		longitudeDelta: 0.02,
	});
	const [endLocation, setEndLocation] = useState('');
	const [endLocLatLon, setEndLocLatLon] = useState('');
	async function actionsOnPress(endLocation) {
		let a = await getLatLong(endLocation);
		end = a["coords"]["lat"] + "," + a["coords"]["lon"];
		setEndLocLatLon(end);
		start = location["coords"]["latitude"] + "," + location["coords"]["longitude"];
		setLocation(start);

		navigation.navigate('PackagesList', { currentLocation: start, endLocLatLon: end });
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
			
			setLocation(location);
			a = {
				latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.02,
				longitudeDelta: 0.02,
			};
			setMapRegion(a);
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
					placeholder="Enter Address"
					placeholderTextColor={'white'}
					style={styles.TextIn}
					onChangeText={(endLocation) => setEndLocation(endLocation)} />

			</View>
			<View style={styles.containerMapAndButton}>
				<View style={styles.containerMap}>
					<MapView
						userInterfaceStyle={'dark'}
						style={{
							alignSelf: 'stretch',
							height: '100%',
							flex: 1
						}}
						region={mapRegion}
					>
						<Marker coordinate={mapRegion} />
					</MapView>
				</View>
				<View style={styles.containerButton}>
					<Pressable style={styles.button} onPress={() => actionsOnPress(endLocation)}  >
						<Text style={styles.text}>Go</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

export default Where;


const styles = StyleSheet.create({
	title: {
		height: 90,
		fontSize: 35,
		padding: 5,
		marginTop: '15%',
		backgroundColor: "#1a1d27",
		color: "white",
		style: "bold",
	},
	container: {
		flex: 1,
		backgroundColor: "#1a1d27",
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerMapAndButton: {
		flex: 1,
		marginBottom: 0,
		marginLeft: 0,
		marginRight: 0,
		width: '100%',
		alignItems: 'center',
	},
	containerMap: {
		flex: 1,
		width: '80%',
		top: '20%',
		marginBottom: '30%',
		bottom: '20%',
		borderRadius: 20,
		overflow: 'hidden',
		height: '10%',
	},
	containerButton: {
		position: 'absolute',
		marginBottom: 10
	},
	image: {
		marginBottom: 50
	},

	input: {
		backgroundColor: '#2a2d41',
		borderRadius: 30,
		width: "80%",
		height: 80,
		marginTop: '20%',
		marginBottom: '10%',
		alignItems: "center",
		color:'white'
	},

	TextIn: {
		height: 50,
		flex: 1,
		padding: 30,
		marginLeft: 0,
		fontSize:15,
		color: 'white',
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
		backgroundColor: '#20bbff',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'black',
	},
});

