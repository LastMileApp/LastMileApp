import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export function Package({ collateral, award, timeDiff, mileDiff, image, package_id, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>

            <Image
                style={{ width: 200, height: 100, borderRadius: 400 / 2, alignContent: 'center', marginTop: 35 }}
                source={{
                    uri: image
                }}
            />
            <View style={styles.singlePackage}>
                <View style={styles.bubble2}>
                    <Text style={styles.bubble_name_2}> Collateral: ${collateral} </Text>
                </View>
                <View style={styles.multiple_bubbles_h}>
                    <View style={styles.bubble}>
                        <Text style={styles.bubble_name_1}> +{timeDiff} min</Text>
                    </View>

                    <View style={styles.bubble}>
                        <Text style={styles.bubble_name_1}> +{mileDiff} km </Text>
                    </View>
                </View>
                <View style={styles.bubble2}>
                    <Text style={styles.bubble_name_2}> Award: ${award} </Text>
                </View>
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
        height: 400
    },
    image: {
        height: 300,
        width: '100%',
        flex: 1,
        paddingBottom: 20,
    },
    singlePackage: {
        paddingTop: 20,
        flexDirection: 'col',
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
        textAlign: 'center',
        //   fontWeight: 'bold',
    },
    bubble: {
        borderRadius: 25,
        backgroundColor: "#eeeeee",
        width: 125,
        height: 50,
        marginRight: 15,
        position: 'relative',
        justifyContent: 'center'
    },
    bubble2: {
        borderRadius: 25,
        backgroundColor: "#eeeeee",
        width: 265,
        height: 50,
        position: 'relative',
        justifyContent: 'center',
    },
    bubble_name_1: {
        fontSize: 18,
        textAlign: 'center',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: "100%",
        // fontWeight: 'bold',
    },
    bubble_name_2: {
        fontSize: 18,
        textAlign: 'center',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: "100%",
        fontWeight: 'bold'
    },
    multiple_bubbles_h: {
        marginTop:20,
        marginBottom:20,
        flexDirection: 'row',
    }
});