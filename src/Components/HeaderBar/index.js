import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import styles from "./style";


const HeaderBar = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Icon name="menu" size={20} color='white'/>
            <Text style={{fontSize:30, color: 'white'}}>BlackCoffer</Text>
            <Icon name="search" size={20} color= 'white' />
        </SafeAreaView>
    )
}
export default HeaderBar;