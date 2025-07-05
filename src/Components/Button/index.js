import React from "react";
import { View,  TouchableOpacity, Text } from "react-native";

const ProfileButton = ({text}) =>{
    return(
        <View style={{justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=> console.log(`Profile ${text} pressed`)}>
                <View style={{backgroundColor: "blue", padding: 8, borderRadius: 25, paddingHorizontal: 20}}>
                    <Text style={{color: "white", fontSize: 15}}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default ProfileButton;