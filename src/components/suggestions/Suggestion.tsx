import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useFonts } from "expo-font";

export default function Suggestion() {
  
  const [fonteCarregada] = useFonts({
    'UberMove' : require('../../../assets/fonts/UberMoveBold.otf')
  });

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.h1}>Sugestões</Text>
        <TouchableOpacity>
        <Text style={styles.h2}>Ver todas</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.box}>
          <Image source={require('../../../assets/img/uberCar.png')} style={styles.imagem}></Image>
          <Text style={styles.h3}>Viagem</Text>
        </View>
        <View style={styles.box}>
        <Image source={require('../../../assets/img/uberBox.png')} style={styles.imagem}></Image>
        <Text style={styles.h3}>Envios</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-around',
    gap: 20,
  },
  titulo:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  h1:{
    flex:1,
    fontFamily: 'UberMove',
    fontSize: 20,
    color: 'white'
  },
  h2:{
    fontFamily: 'UberMove',
    fontSize: 13,
    color: 'white'
  },
  box:{
    width: '45%',
    height: 100,
    borderRadius: 20,
    backgroundColor: '#292929',
    alignItems: 'flex-end'
  },
  imagem:{
    width: '50%', 
    height: '70%',
  },
  h3:{
    fontFamily: 'UberMove',
    fontSize: 13,
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
});