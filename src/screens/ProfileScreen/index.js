import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, View, FlatList, Dimensions } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileButton from "../../Components/Button";
import VerticleLine from "../../Components/VerticleSeparator";
import ProfileCount from "../../Components/ProfileCounts";
import { MyData } from "../../FakeData/MyProfile";
import { MyProfilePosts } from "../../FakeData/MyPosts";

const ProfileScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(MyProfilePosts);
    const [profileData, setProfileData] = useState(MyData);
    const windowWidth = Dimensions.get('window').width -10;
    // in case of fetching data from api
    // useEffect(()=>{
    //     MyProfile(setLoading, setData);

    // },[])
    return(
        <SafeAreaView style={{backgroundColor: 'white', flex: 1, padding: 10, paddingTop: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icons name="user-circle" size={90} color="blue"/>
                <View>
                    <View style={{flexDirection: "row", justifyContent:"space-between", width: '86%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>{profileData[0].name}</Text>
                        <ProfileButton text="Edit" />
                    </View>
                    <View style={{flexDirection: "row", marginLeft: 10}}>
                        <Ionicons name="navigate-outline" size={20} style={{alignSelf: 'center'}}/>
                        <Text style={{fontSize: 15, marginLeft: 5}}>{profileData[0].location}</Text>
                    </View>
                    <View style={{flexDirection: "row", marginLeft: 10}}>
                        <Ionicons name="bag-sharp" size={20} style={{alignSelf: 'center'}}/>
                        {profileData[0].job ?
                            <Text style={{fontSize: 15, marginLeft: 5}}>{profileData[0].job}</Text>
                            : <Text style={{fontSize: 15, marginLeft: 5}}>Anonymous</Text> }
                    </View>
                </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 20, justifyContent: 'space-between'}}>
                <ProfileButton text="Trash" />
                <ProfileCount text={"Feed"} count={profileData[0].posts}/>
                <VerticleLine />
                <ProfileCount text={"Following"} count={profileData[0].follows}/>
                <VerticleLine />
                <ProfileCount text={"Followers"} count={profileData[0].followers}/>
                <VerticleLine />
                <ProfileCount text={"Blocked Profiles"} count={profileData[0].blocked}/>
            </View>
            <View style={{flexDirection: 'row', padding: 5, marginTop: 10, justifyContent:'space-between'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center'}}>About Me</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between', width: '50%'}}>
                    <ProfileButton text={"Drafts"} />
                    <ProfileButton text={"History"} />
                </View>
            </View>
            {profileData[0].aboutMe ? <Text>{profileData[0].aboutMe}</Text>:<Text>Anonymous</Text>}
            { data ?
            <FlatList
                data={data}
                renderItem={(item)=>{
                    console.log(item)
                    return(
                    <View style={{width: '31%', height: '30%'}}>
                        <Image source={item.item.image}  style={{aspectRatio: 1, width: '31%'}}/>
                    </View>
                    )
                }}
                numColumns={3}
                contentContainerStyle = {{paddingTop:10}}
            />:
            <Text style={{
                flex: 1,
                justifyContent: 'center',
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop:250 }}>
                No Posts
            </Text>
            }
        </SafeAreaView>
    )
}
export default ProfileScreen;