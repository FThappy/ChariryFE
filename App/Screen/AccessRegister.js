import React from "react";
import { View, StyleSheet, Dimensions,Text, Image ,TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const AccessRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F8DADA", "#DDEFBB"]}
        style={styles.isContainer}
        start={{ x: 1, y: 0 }} // Điểm bắt đầu ở bên phải (x: 1)
        end={{ x: 0, y: 0 }} // Điểm kết thúc ở bên trái (x: 0)
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={36} color="black" />
          </TouchableOpacity>
          <Text style={{marginLeft : "10%",fontSize:30,}}>Terms & Privacy</Text>
        </View>
        <Text style={styles.text1}>Finishing signing up</Text>
        <Text style={styles.text2}>By tapping Sign up,you agree to our</Text>
        <Text style={styles.text3}>Terms, Data Policy and Cookies Policy</Text>
        <Image
          style={styles.image}
          accessibilityLabel="User Image"
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/5521/5521174.png?ga=GA1.1.1124457332.1696837885&track=ais",
          }}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <LinearGradient
            colors={["#384CFF", "#00A3FF"]}
            style={styles.button}
            start={{ x: 0, y: 0.5 }} // Điểm bắt đầu ở giữa trên (x: 0, y: 0.5)
            end={{ x: 1, y: 0.5 }} // Điểm kết thúc ở giữa dưới (x: 1, y: 0.5)
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  isContainer: {
    flex: 1,
    width: screenWidth,
    alignItems: "center",
  },
  buttonContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    marginTop: 20,
    height: 60,
    width: "100%",
    alignItems : "center",
  },
  buttonBack: {
    height: 60,
    width: 60,
    backgroundColor: "#DDEFBB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  text1: {
    fontFamily: "raleway",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 60,
  },
  text2: {
    height: 20,
    color: "#A9A9A9",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginTop: 5,
  },
  text3: {
    color: "#384CFF",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginTop: 5,
  },
  image: {
    marginTop: 100,
    height: 220,
    width: 220,
  },
  button: {
    height: 50,
    width: 330,
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
});

export default AccessRegister;
