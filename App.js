
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Components/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginStack, MainStack } from './App/Components/StackNavigation';
import styled from "styled-components/native";
import React, { useState } from "react";
import { Provider } from 'react-redux';
import { persistor, store } from './App/service/store';
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import Toast from 'react-native-toast-message';
import ToastConfig from './App/Components/ToastConfig';


 const Stack = createNativeStackNavigator();

const Navigators = ()=>{

  const user = useSelector ((state)=> (state.user?.currentUser))

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <LoginStack />}
      <Toast config={ToastConfig} />
    </NavigationContainer>
  );
}

export default function App() {

 const [isLogin,setIsLogin] = useState(false)

 const [fontsLoaded] = useFonts({
   'raleway': require("./assets/Fonts/Raleway-SemiBold.ttf"),
   
   
   
 });
if (!fontsLoaded) {
  // Font chưa tải xong, bạn có thể trả về một chỉ báo tải hoặc null
  return null;
}
  


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar />
          <Navigators/>
          {/* <NavigationContainer>
            {isLogin ? <MainStack /> : <LoginStack />}
          </NavigationContainer> */}
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
