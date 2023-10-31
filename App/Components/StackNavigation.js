import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/Home";
import Search from "../Screen/Search";
import TabNavigation from "./TabNavigation";
import Item from "../Screen/Item";
import Donation from "../Screen/Donation";
import CheckOutPayMent from "../Screen/CheckOutPayMent";
import AccessRegister from "../Screen/AccessRegister";
import Signin from "../Screen/Signin";
import Login from "../Screen/Login";
import StarUp from "../Screen/StarUp";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TabNavigation"
    >
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};
const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="StarUp">
      <Stack.Screen
        name="AccessRegister"
        component={AccessRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={StarUp}
        name="StarUp"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{
          title: null, // Ẩn headerTitle
        }}
      />
      <Stack.Screen
        name="Donation"
        component={Donation}
        options={{
          title: null, // Ẩn headerTitle
        }}
      />
      <Stack.Screen
        name="CheckOutPayMent"
        component={CheckOutPayMent}
        options={{
          title: null, // Ẩn headerTitle
        }}
      />
    </Stack.Navigator>
  );
};
const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ItemSearch"
        component={Item}
        options={{
          title: null, // Ẩn headerTitle
        }}
      />
      <Stack.Screen
        name="Donation"
        component={Donation}
        options={{
          title: null, // Ẩn headerTitle
        }}
      />
      <Stack.Screen
        name="CheckOutPayMent"
        component={CheckOutPayMent}
        options={{
          title: null, // Ẩn headerTitle
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStack, HomeStack,SearchStack, LoginStack,};