import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { FadeInUp, FadeOut } from "react-native-reanimated";
import { login } from "../service/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({});
  
  const dispatch = useDispatch();

  const handleChange = (text, name) => {
    console.log(text, name);
    setInputs((prev) => {
      return {
        ...prev,
        [name]: text,
      };
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, inputs);
  };
  const user = useSelector((state) => console.log(state));

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F8DADA", "#DDEFBB"]}
        style={styles.isContainer}
        start={{ x: 1, y: 0 }} // Điểm bắt đầu ở bên phải (x: 1)
        end={{ x: 0, y: 0 }} // Điểm kết thúc ở bên trái (x: 0)
      >
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.image}
          accessibilityLabel="User Image"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/2514/2514917.png?ga=GA1.1.1124457332.1696837885",
          }}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          onChangeText={(text) => handleChange(text, "username")}
        />
        <TextInput
          style={styles.input2}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          onChangeText={(text) => handleChange(text, "password")}
        />
        <TouchableOpacity onPress={handleLogin}>
          <LinearGradient
            colors={["#384CFF", "#00A3FF"]}
            style={styles.button}
            start={{ x: 0, y: 0.5 }} // Điểm bắt đầu ở giữa trên (x: 0, y: 0.5)
            end={{ x: 1, y: 0.5 }} // Điểm kết thúc ở giữa dưới (x: 1, y: 0.5)
          >
            <Text style={styles.buttonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.text1}>Forgot Password?</Text>
        <Text style={styles.text2}>OR</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.push("Signin")}
        >
          <Text style={styles.buttonText2}>Create new Account</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  isContainer: {
    flex: 1,
    width: screenWidth,
    alignItems: "center",
  },
  image: {
    marginTop: 100,
    height: 220,
    width: 220,
  },
  input: {
    marginTop: 50,
    color: "black",
    fontWeight: "bold",
    width: 300,
    height: 35,
    borderBottomWidth: 2,
    borderBottomColor: "#A9A9A9",
    fontSize: 20,
  },
  input2: {
    marginTop: 30,
    color: "black",
    fontWeight: "bold",
    width: 300,
    height: 35,
    borderBottomWidth: 2,
    borderBottomColor: "#A9A9A9",
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontFamily: "raleway",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  text1: {
    height: 17,
    width: 115,
    color: "#384CFF",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginTop: 20,
  },
  text2: {
    height: 20,
    color: "#A9A9A9",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginTop: 20,
  },
  button2: {
    height: 32,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#384CFF",
    borderRadius: 12,
    borderWidth: 2,
    marginTop: 40,
    marginBottom: 20,
  },
});

export default Login;
