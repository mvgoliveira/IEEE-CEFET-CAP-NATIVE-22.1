import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function UserCard({ name, children }) {
  return (
    <View style={styles.container}>
        <View style={styles.userImg}/>
        <Text style={styles.name}> { name } </Text>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1D2540',
      width: 300,
      height: 300,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: "center",
      marginTop: 15
    },

    name: {
        color: "#D9D9D9",
        fontSize: 20,
        marginTop: 15
    },

    userImg: {
        backgroundColor: "#8DBF21",
        width: 90,
        height: 90,
        borderRadius: 90
    }
  });