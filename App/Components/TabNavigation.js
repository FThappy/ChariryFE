import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home';
import Search from '../Screen/Search';
import Profile from '../Screen/Profile';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack, SearchStack } from './StackNavigation';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";





export default function TabNavigation() {

  const Tab = createBottomTabNavigator();
  
  const getTabBarVisibility = (route) => {
    console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route)
    console.log(routeName);
    if (
      routeName?.includes("Item") ||
      routeName?.includes("Donation") ||
      routeName?.includes("CheckOutPayMent")
    ) {
      return "none";
    }
    return "flex";
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarStyle: { display: getTabBarVisibility(route) },
        })}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={({ route }) => ({
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
          tabBarStyle: { display: getTabBarVisibility(route) },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarStyle: { display: getTabBarVisibility(route) },
        })}
      />
    </Tab.Navigator>
  );
}