import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native"

export function Login() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>
        Login
      </Text>

      <Button title='Voltar' onPress={handleGoBack}/>
    </View>
  )
}
