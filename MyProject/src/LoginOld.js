import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

const LoginOld = () => {
    
  return (
    <View style={styles.container}>
      <View>
     <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp' }} style={styles.logo} />
      </View>
     <Text style={styles.label}> Email or Username</Text>
      <TextInput  
        placeholder="Enter Username"
        style={styles.input}
       
      />
       <Text style={styles.label}> Password</Text>
      <TextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        style={styles.input}
       
      />
      <View style={styles.row}>
        <TouchableOpacity >
        <View style={styles.row}>
          <View style={styles.radio}>
          </View>
          <Text>Remember me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.row}>

        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </View>
      </View>
      <View style={styles.row}>
      <Button title='Log In' />
      </View>

        <Text style={styles.row}> Or Login with: </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'lightblue' }]}>
          <Text style={styles.socialButtonText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'red' }]}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  label:{
    fontWeight:'bold',
    fontSize:17,
    alignSelf: 'flex-start', 
    marginTop:20,
    marginLeft: '10%',
    marginBottom: 3, 
    
  },
  input: {
   backgroundColor:"lightgray",
    color:"black",
    borderRadius: 50,
    paddingLeft: 10,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  radio:{
    height:20,
    width:20,
    borderColor:"black",
    borderWidth:1,

    borderRadius:20,
    marginRight:4,

  },
  forgotPassword: {
    marginLeft:50,
    color:"blue"
    
  },
 
  socialButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  socialButtonText: {
    color: 'white',
  },
});

export default LoginOld;
