import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Where from './components/Where.js';
import PackagesList from './components/PackagesList.js'
import { PackageDetails } from './components/package_details.js';
import { PackageAddress } from './components/packageAddress.js'
import { useState } from 'react';
import useFonts from './hooks/useFonts.js';

const Stack = createNativeStackNavigator();

function App() {
  const [IsReady, setIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => { }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Where}
          options={({ navigation }) => ({
            title: 'Location',
          })} />
        <Stack.Screen name="PackagesList" component={PackagesList}
          options={({ navigation }) => ({
            title: 'Packages',
          })} />
        <Stack.Screen name="PackageDetails" component={PackageDetails}
          options={({ navigation }) => ({
            title: 'Package Details',
          })} />
        <Stack.Screen name="PackageGo" component={PackageAddress}
          options={({ navigation }) => ({
            title: 'Package Last Mile',
          })} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;