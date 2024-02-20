import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password', [{ text: 'OK' }]);
    } else {
      // You can use any authentication method here
      // For example, you can use Firebase authentication
      // Here is a simple example:
      // firebase.auth().signInWithEmailAndPassword(email, password)
      //   .then(() => {
      //     console.log('User signed in successfully');
      //     navigation.navigate('Home');
      //   })
      //   .catch(error => {
      //     console.log('Error signing in', error);
      //     Alert.alert('Error', 'Invalid email or password', [{ text: 'OK' }]);
      //   });

      // For this example, we'll just show an alert
      Alert.alert('Success', 'You are logged in', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor="gray"
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={rememberMe}
          onValueChange={() => setRememberMe(!rememberMe)}
        />
        <Text style={styles.checkboxText}>Remember me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <View style={styles.buttonFrame}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1B1A55',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    backgroundColor: '#9290C3',
    padding: 0,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonFrame: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default LoginScreen;