import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";





const ItemSlide = ({uris,titles,colors}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          accessibilityLabel="User Image"
          source={{
            uri: uris,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{titles}</Text>
        <TouchableOpacity onPress={() => console.log("clicked")}>
          <LinearGradient
            colors= {colors}
            style={styles.button}
            start={{ x: 1, y: 0 }} // Điểm bắt đầu ở bên phải (x: 1)
            end={{ x: 0, y: 0 }} // Điểm kết thúc ở bên trái (x: 0)
          >
            <Text style={styles.buttonText}>Donate Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin:10,
    borderColor : "black",
  },
  imageContainer: {
    flex: 1.5,
  },
  image: {
    width: "100%",
    height: "90%",

    margin: 10,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  button: {
    width: "90%",
    height: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  titleText: {
    fontFamily: "raleway",
    fontSize: 28,
    color: "#39395D",
    marginBottom: 18,
    fontWeight: "bold",
  },
  buttonText: {
    fontFamily: "raleway",
    fontSize: 16,
    fontWeight: "600",
    color: "whitesmoke",
  },
});

export default ItemSlide;
