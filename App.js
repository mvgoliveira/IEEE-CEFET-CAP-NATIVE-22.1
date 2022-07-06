import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Rajdhani_700Bold, useFonts } from "@expo-google-fonts/rajdhani";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { styles } from "./src/styles";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}> Hello world! </Text>
      <Text style={styles.subTitle}> Iniciando com estilo </Text>
    </View>
  );
}
