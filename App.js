import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  let [num, setNum] = useState(0);

  function handlePress() {
    setNum(prevNum => prevNum + 1);
    //setNum(num + 1);
  }

  useEffect(() => {
    Alert.alert("Inicio", "O programa iniciou");
  }, [])

  useEffect(() => {
    Alert.alert("Contador", `Numero do contador: ${num}`);
  }, [num])

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={{ fontSize: 20 }}> Contagem: {num} </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          activeOpacity={0.5}
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={{ fontSize: 16 }}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center'
  },

  buttonContainer: {
    flexDirection: "row"
  },

  button: {
    paddingVertical: 18,
    paddingHorizontal: 23,
    marginHorizontal: 15,
    marginTop: 25,
    backgroundColor: "#D9D9D9",
    elevation: 2,
    borderRadius: 4
  }
});
