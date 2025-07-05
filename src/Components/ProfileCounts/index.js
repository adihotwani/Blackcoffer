import React from "react";
import { View, Text } from "react-native";
import style from "./style";

const ProfileCount = ({count, text}) => {
    return(
        <View>
            <Text style={style.countText}>{count}</Text>
            <Text>{text}</Text>
        </View>
    )
}
export default ProfileCount;