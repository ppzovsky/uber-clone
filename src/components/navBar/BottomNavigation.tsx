import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function BottomNavigation(){

    const [fonteCarregada] = useFonts({
        'UberMove' : require('../../../assets/fonts/UberMoveMedium.otf')
      });

    return(
        <View style={styles.container}>

            <View style={{alignItems: 'center'}}>
                <MaterialCommunityIcons name="home-variant" size={26} color="#DDDD" marginBottom={5}/>
                <Text style={{fontFamily: 'UberMove', color: '#DDDD', fontSize: 12}}>Inicio</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Fontisto name="nav-icon-grid" size={22} color="#DDDD" marginBottom={5}/>
                <Text style={{fontFamily: 'UberMove', color: '#DDDD', fontSize: 12}}>Opções</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <MaterialIcons name="notes" size={24} color="#DDDD" marginBottom={5}/>
                <Text style={{fontFamily: 'UberMove', color: '#DDDD', fontSize: 12}}>Atividade</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <FontAwesome5 name="user-alt" size={24} color="#DDDD" marginBottom={5}/>
                <Text style={{fontFamily: 'UberMove', color: '#DDDD', fontSize: 12}}>Conta</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: '100%',
        borderTopColor: '#272727',
        borderTopWidth: 1,
        backgroundColor: '#151515',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 7,
        justifyContent: 'space-around',
        height: 60,
        zIndex: 10,
        bottom: 0
    }
})