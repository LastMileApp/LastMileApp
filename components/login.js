import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,Button, TouchableOpacity} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source = {require("./assets/lastmileimage.jpg")}/>
      <StatusBar style="auto" />
      <View style={styles.input}>
        <TextInput
          style = {styles.TextIn}
          placeholder = "Username"
          onChangeText={(email) => setEmail(email)} />
      </View>
      <View style={styles.input}>
        <TextInput 
          style={styles.TextIn}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.register}>
        <Text style={styles.loginText}>Register</Text>

      </TouchableOpacity>

      <TouchableOpacity style = {styles.forgot_button}>
        <Text>Forgot Username/Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86CB92",
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    marginBottom: 50
  },

  input: {
    backgroundColor: '#71b48d',
    borderRadius: 30,
    width: "80%",
    height: 55,
    marginBottom: 40,
    alignItems: "center",
  },
  
  TextIn: {
    height: 50,
    flex: 1,
    padding: 30,
    marginLeft: 20,
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
});
