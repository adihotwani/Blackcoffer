import React from "react";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import Icons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

const DiscoverPost = ({item}) => {
    const windowWidth = Dimensions.get('window').width -10;
    console.log(item.item);
    return(
        <View style={[ styles.container, {width: windowWidth}]}>
            <View style={styles.subcontainer1}>
                <Image source={require('../../assets/icons/spy.png')} style={styles.subCont1Image} />
                <Text style={styles.subCont1Text}>{item.item.username}</Text>
            </View>
            {item.item.postImage ? <Image source={item.item.url} /> : <Image source={require("../../assets/icons/post1fake.jpeg")} style={{width: windowWidth}}/>}
            <View style={styles.subcontainer2}>
                <Text>{item.item.date}</Text>
                <Text>{item.item.category}|Views {item.item.views}</Text>
            </View>
            <Text style={styles.textMarginLeft}>{item.item.tags}</Text>
            <View style={styles.subcontainer3}>
                <Icons name='heart' size={20} color="blue" />
                <Icons name='share-google' size={20} color="blue" />
                <Icons name='comment' size={20} color="blue" />
            </View>
            <View style={styles.subcontainer4}>
                <Ionicons name='navigate-outline' size={20} color="black" />
                <Text style={styles.textMarginLeft}>{item.item.location}</Text>
            </View>
        </View>
    )
}
export default DiscoverPost;