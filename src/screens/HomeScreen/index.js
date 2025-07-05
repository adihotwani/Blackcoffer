import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import DiscoverPost from "../../Components/DiscoverPost";
import { discoverPosts } from "../../FakeData/Posts";
import style from "./styles";

const HomeScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(discoverPosts);
    return(
        <SafeAreaView style={style.container}>{
            loading ? <Text>Discover Here</Text> : 
                    <FlatList 
                        data={data}
                        renderItem={(item)=> {return(
                            <DiscoverPost item={item} />
                        )}}
                    />
            }
        </SafeAreaView>
    )
}
export default HomeScreen;