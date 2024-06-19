import { View, ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { useListas } from '../../components/context/ListasContext';
import Header from '../../components/header/Header';
import Pesquisa from '../../components/searchBar/SearchBar';
import Sugestoes from '../../components/suggestions/Suggestion';
import Slider1 from '../../components/sliders/Slider1';
import BottomNavigation from '../../components/navBar/BottomNavigation';
import { useFonts } from "expo-font";

import React from 'react';

export default function Home() {
    
    const { lista1, lista2, lista3 } = useListas();

    const [fonteCarregada] = useFonts({
        'UberMove' : require('../../../assets/fonts/UberMoveBold.otf')
      });


    return (
        <SafeAreaView style={styles.containerzao}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Header titulo={'Uber'}/>
                    <Pesquisa/>
                    <Sugestoes/>
                    <Text style={styles.h1}>Mais formas de usar o app</Text>
                    <Slider1 lista={lista1}/>
                    <Text style={styles.h1}>Mais formas de usar o app</Text>
                    <Slider1 lista={lista2}/>
                    <Text style={styles.h1}>Mais formas de usar o app</Text>
                    <Slider1 lista={lista3}/>
                </View>
            </ScrollView>
            <BottomNavigation/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerzao: {
        backgroundColor: '#161616',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 100,
    },
    container: {
        gap: 20,
    },
    h1:{
        flex:1,
        fontFamily: 'UberMove',
        fontSize: 20,
        color: 'white',
        paddingHorizontal:20
    },
});
