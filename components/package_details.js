import React from 'react';
import {
    View, Text, StyleSheet, Button, Modal, TouchableOpacity, Image, ScrollView,
    SafeAreaView, Pressable
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { getPossibleShipments } from '../services/shipments';
import { Package } from './package';
import MapView from 'react-native-maps';
import { Marker, Polyline } from 'react-native-maps';
import { withTheme } from 'react-native-elements';
export function PackageDetails({ route, navigation }) {
    const { pkg } = route.params;
    const name = pkg.collateral;

    const [packageSingle, setPackageSingle] = useState({});
    const [markers, setMarkers] = useState({});
    useEffect(() => {
        setPackageSingle(pkg);
        // console.log(pkg);
    });
    const arr = pkg.user_start.split(',')

    const user_start = { latitude: parseFloat(arr[0]), longitude: parseFloat(arr[1]) };
    const arr2 = pkg.user_end.split(',')
    const user_end = { latitude: parseFloat(arr2[0]), longitude: parseFloat(arr2[1]) };
    const arr3 = pkg.package_start.split(',')
    const pkg_start = { latitude: parseFloat(arr3[0]), longitude: parseFloat(arr3[1]) };
    const arr4 = pkg.package_end.split(',')
    const pkg_end = { latitude: parseFloat(arr4[0]), longitude: parseFloat(arr4[1]) };
    // onReady = this.map.fitToElements({animated: true});
    console.log("pkg", pkg);
    console.log("pkg_gingle", packageSingle);                       



    return (
        <SafeAreaView>
            <View>
                <Image
                    style={style.image}
                    source={{
                        uri: packageSingle.company_img
                    }}
                />
                <View style={style.infoContainer}>
                    <Text style={style.price}>Company: {packageSingle.company_name}</Text>
                    <Text style={style.price}>Company Contact: {packageSingle.company_email}</Text>
                    <Text style={style.price}>Total Collateral Needed to Take: ${packageSingle.collateral}</Text>
                    <Text style={style.price}>Award for Package Drive:  ${packageSingle.award}</Text>
                    <Text style={style.price}>Extra Time Needed to Drive: {packageSingle.added_time} </Text>
                    <Text style={style.price}>Extra Km Needed to Drive: {packageSingle.added_miles} </Text>
                    {/* <View style={style.containerButton}>
                    <Pressable style={style.button} onPress={() => navigation.navigate('PackageGo', { package1: packageSingle })}  >
                        <Text style={style.text}>Go</Text>
                    </Pressable>
                    </View> */}
                </View>
                <View style={{backgroundColor: '#1a1d27'}}>
                    <View style={style.mapcontainer}>
                        <MapView
                        userInterfaceStyle={'dark'}
                            style={{
                                alignSelf: 'stretch',
                                height: '100%',

                            }}

                        >
                            <Marker coordinate={user_start}></Marker>
                            <Marker coordinate={user_end}></Marker>
                            <Marker coordinate={pkg_start}></Marker>
                            <Marker coordinate={pkg_end}></Marker>

                        </MapView>

                    </View>
                    <View style={style.containerButton}>
                        <Pressable style={style.button} onPress={() => navigation.navigate('PackageGo', { packagee: packageSingle })}  >
                            <Text style={style.text}>Go</Text>
                        </Pressable>
                    </View>
                </View>





                {/* can only access if has enough collateral? */}

            </View>
        </SafeAreaView>
    );
}



const style = StyleSheet.create({
    card: {
        backgroundColor: '#1a1d27',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    containerMapAndButton: {
        backgroundColor: '#1a1d27',
        flex: 1,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        width: '100%',
        alignItems: 'center',
    },
    containerButton: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'white'
    },
    image: {
        height: 180,
        width: '100%'
    },
    infoContainer: {
        padding: 16,
        color:"white",
        backgroundColor:"#1a1d27"
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color:"white",
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
    mapcontainer: {
        backgroundColor: '#1a1d27',
        height: '53%',
        marginBottom:20
    },
    containerButton: {
        backgroundColor: '#1a1d27',
        position: 'absolute',
        marginTop:280,
        marginLeft: 150,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#fff',
    },


});