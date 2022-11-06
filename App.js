// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {Where} from './components/Where.js'
// import {Packages} from './components/Packages.js'
// // import EnterLocation from './screens/EnterLocation'
// // import PackagesScreen from './components/Packages.js'



// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Where}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Packages" component={Packages} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Where from './components/Where.js';
import PackagesList from './components/PackagesList.js'
import { PackageDetails } from './components/package_details.js';
import {PackageAddress} from './components/packageAddress.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Where}
        options={({ navigation }) => ({
          title: 'Location',
        })}/> 
        <Stack.Screen name="PackagesList" component={PackagesList}
        options={({ navigation }) => ({
          title: 'Packages',
        })}/> 
        <Stack.Screen name="PackageDetails" component={PackageDetails}
        options={({ navigation }) => ({
          title: 'Package Details',
        })}/>  
        <Stack.Screen name="PackageGo" component={PackageAddress}
        options={({ navigation }) => ({
          title: 'Package Last Mile',
        })}/>  
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;