import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export function Package({ collateral, award, timeDiff, mileDiff, image, package_id, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>

            <Image
                style={{width: 200, height: 100, borderRadius: 400/ 2, alignContent:'center'}}
                source={{
                    uri: image
                }}
            />
            <View style={styles.singlePackage}>
                <Text style={styles.name}> Collateral: ${collateral} </Text>
                <Text style={styles.name}> Award: ${award} </Text>
                <Text style={styles.name}> Total Time Difference: {timeDiff} minutes </Text>
                <Text style={styles.name}> Total Mile Difference: {mileDiff} minutes </Text>
            </View>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        // paddingTop: 16,
        elevation: 1,
        marginVertical: 20,
        alignItems: 'center',   
        paddingTop: 20,
    },
    image: {
        height: 300,
        width: '100%',
        flex: 1,
        paddingBottom: 20,
    },
    singlePackage: {
        paddingTop: 20,
    },
    thumb: {
        height: 260,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: '100%',
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        //   fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
});