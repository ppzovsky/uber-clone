import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/Ionicons';
import { List } from 'react-native-paper';

export default function SearchBar() {

    const [fonteCarregada] = useFonts({
        'UberMove' : require('../../../assets/fonts/UberMoveBold.otf')
    });

    return (
        <View style={styles.barra}>
            <FontAwesome name='search' size={20} color="#aaa" />
            <TextInput
                style={styles.input}
                placeholder="Para onde?"
                placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.button}>
                <FontAwesome name='time' size={15} color="#fff" />
                <Text style={styles.texto}>Agora</Text>
                <FontAwesome name='chevron-down' size={15} color="#fff" />
            </TouchableOpacity>
        </View>
    );
    };

const styles = StyleSheet.create({
  barra :{
    backgroundColor: '#383838',
    width: '90%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: 18,
    paddingLeft: 10,
    flex: 1,
  },
  button: {
    color: 'white',
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'black',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '30%',
  },
  texto:{
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: 10,
  }
});

