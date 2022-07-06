import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserCard } from "./src/components/UserCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <UserCard name="Marcus Oliveira">
        <Text style={styles.cargo}>Líder da equipe Web</Text>
      </UserCard>
      
      <UserCard name="Gabriel Renato"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cargo: {
    color: "#8DBF21"
  }
});
