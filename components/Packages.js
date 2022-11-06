import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({route, navigation }) {
  const {currentLocation, endLocation} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{endLocation}</Text>
      </View>
    );
  }