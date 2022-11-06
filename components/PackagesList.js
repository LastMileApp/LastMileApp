import * as React from 'react';
import { useState, useEffect } from 'react';
import { Pressable, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { getPossibleShipments } from '../services/shipments';
import { Package } from './package';


export default function PackagesList({ route, navigation }) {
	const { currentLocation, endLocLatLon } = route.params;
	const [shipments, setShipments] = useState([]);

	useEffect(() => {
		(async () => {
			let shipments = await getPossibleShipments(currentLocation, endLocLatLon);
			setShipments(shipments);
		})();
	}, []);


	function renderPackage({ item }) {
		return (
			<Package
				collateral={item.collateral}
				award={item.award}
				timeDiff={item.added_time}
				mileDiff={item.added_miles}
				image={item.company_img}
				onPress={() => navigation.navigate('PackageDetails', { pkg: item })}
			/>
		);
	}
	return (
		<FlatList
			style={styles.packagesList}
			contentContainerStyle={styles.packagesListContainer}
			data={shipments}
			renderItem={renderPackage}
		/>
	);
}
const styles = StyleSheet.create({
	packagesList: {
		backgroundColor: '#f1f8ff',
	},
	packagesListContainer: {
		backgroundColor: '#f1f8ff',
		paddingVertical: 8,
		marginHorizontal: 8,
	},
});