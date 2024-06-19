import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

export default function Header({titulo}) {

    const [fonteCarregada] = useFonts({
        'UberMove' : require('../../../assets/fonts/UberMoveBold.otf')
    })

  return (
    <View>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 50,
        fontFamily: 'UberMove',
        marginTop: 60,
        marginLeft: 20,
        color: 'white',
    }
})