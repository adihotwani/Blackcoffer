// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderBar from './src/Components/HeaderBar';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
        <HeaderBar />
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Discover" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="compass" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Local" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="navigate-outline" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Add" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Notifications" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icons name="user-circle" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}