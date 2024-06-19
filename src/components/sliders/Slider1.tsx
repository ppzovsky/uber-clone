import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from '@expo/vector-icons';

export default function Slider1({lista}: any) {

    const [fonteCarregada] = useFonts({
        'UberMove' : require('../../../assets/fonts/UberMoveMedium.otf')
      });

    const images = {
        card10: require('../../../assets/img/Cards/card10.png'),
        card11: require('../../../assets/img/Cards/card11.png'),
        card01: require('../../../assets/img/Cards/card01.jpg'),
        card03: require('../../../assets/img/Cards/card03.jpg'),
        card02: require('../../../assets/img/Cards/card02.jpg'),
        card04: require('../../../assets/img/Cards/card04.jpg'),
        card05: require('../../../assets/img/Cards/card05.jpg'),
        card06: require('../../../assets/img/Cards/card06.jpg'),
        card07: require('../../../assets/img/Cards/card07.jpg'),
      };

    const box = ({item}:any) => (
        <View style={styles.box}>
            <Image 
            source={images[item.foto]}     
            style={styles.foto}/>
            <Text style={styles.titulo}>{item.titulo}
                <AntDesign name="arrowright" size={18} color="#BCBCBC" />
            </Text>
            <Text style={styles.h1}>{item.descricao}</Text>
        </View>
      )

    return (
        <View>
            <FlatList
                style={styles.container}
                data={lista}
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                renderItem={box}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        gap:10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    titulo:{
        fontFamily: 'UberMove',
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
      },
    h1:{
    fontFamily: 'UberMove',
    fontSize: 12,
    color: '#BCBCBC'
    },
    box:{
        width: 300,
    },
    foto:{
        width: 300, 
        height: 180,
        borderRadius: 10,
        marginBottom: 10
    }
  });