import React from "react";
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
import pic from "../../assets/original-873d0a16759f3d2315fb3-unscreen.gif"

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const StarUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F8DADA", "#DDEFBB"]}
        style={styles.isContainer}
        start={{ x: 1, y: 0 }} // Điểm bắt đầu ở bên phải (x: 1)
        end={{ x: 0, y: 0 }} // Điểm kết thúc ở bên trái (x: 0)
      >
        <Image
          style={styles.image}
          accessibilityLabel="User Image"
          source={pic}
        />
        <Text style={styles.text1}>Connect everyone for charity.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LinearGradient
            colors={["#384CFF", "#00A3FF"]}
            style={styles.button}
            start={{ x: 0, y: 0.5 }} // Điểm bắt đầu ở giữa trên (x: 0, y: 0.5)
            end={{ x: 1, y: 0.5 }} // Điểm kết thúc ở giữa dưới (x: 1, y: 0.5)
          >
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default StarUp;

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
    height: 400,
    width: 300,
    marginTop: 50,
  },
  button: {
    height: 60,
    width: 320,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  buttonText: {
    fontFamily: "raleway",
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
  },
  text1: {
    fontFamily: "raleway",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
});
