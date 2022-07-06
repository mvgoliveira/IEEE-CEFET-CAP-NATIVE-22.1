import React from 'react'
import { Text, View, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  function handleGoToLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', }}>
      <Text style={{ fontSize: 25 }}>
        Home
      </Text>

      <Button title='ir para login' onPress={handleGoToLogin}/>
    </View>
  )
}
