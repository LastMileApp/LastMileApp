import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({route, navigation }) {
  const {endLocation} = route.params.endLocation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{currentLocation}</Text>
      </View>
    );
  }