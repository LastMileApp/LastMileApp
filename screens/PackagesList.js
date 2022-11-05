import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Package } from '../components/Package.js';
import { getPackages } from '../services/PackageServices.js';

export function PackagesList ({navigation}) {
function renderPackage({item: packages}) {
    return (
      <Package {...packages} 
      onPress={() => {
        navigation.navigate('PackageDetails', {
          packagesId: packages.id,
        });
      }}
      />
    );
  }

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(getPackages());
  });

  return (
    <FlatList
      style={styles.packagesList}
      contentContainerStyle={styles.packagesListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={packages}
      renderItem={renderPackage}
    />
  );
}
const styles = StyleSheet.create({
  packagesList: {
    backgroundColor: '#eeeeee',
  },
  packagesListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});