
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,buttonPressed, ActivityIndicator } from 'react-native';

export default function App() {
const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Bus arrival time:</Text>
      <Text style={styles.loadingText}>{loading? <ActivityIndicator size ="large" />: "Loaded"}</Text>
      <TouchableOpacity onPress={buttonPressed}
                        style={styles.button}>

        <Text style={styles.buttonText}>
          Refresh!
        </Text>
      </TouchableOpacity>

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

  textHeader: {
    fontSize: 30
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
