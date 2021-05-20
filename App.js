import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,buttonPressed } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bus arrival time:</Text>
      <Text style={styles.loadingText}>Loading...</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={buttonPressed}
                        style={styles.button}>

        <Text style={styles.buttonText}>
          Refresh!
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },

  loadingText: {
    fontWeight: 'bold',
    fontSize: 40,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },

});
