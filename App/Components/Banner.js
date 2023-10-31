import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const Banner = ({onPress}) => {

    const navigation = useNavigation()

    
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
          <Image
            style={styles.image}
            accessibilityLabel="User Image"
            source={{
              uri: "https://cf.ltkcdn.net/charity/images/orig/254503-1600x1030-how-organize-food-drive.jpg",
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{ marginTop: 5,  }}>
          <Text style={styles.textTitle}>Donate For Hunger People</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.textDetail1}>$2500</Text>
            <Text style={styles.textDetail2}>2 Days left</Text>
            <Text style={styles.textDetail3} onPress={onPress}>
              Detail
              <AntDesign name="arrowright" size={16} color="#F89E90" />
            </Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: "#f6f6f6",
    borderRadius: 20,
  },
  imageContainer: {
    height : 180,
    width: "100%",

  },
  image: {
    height: 180,
    width: "100%",
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 26,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  textDetail1: {
    fontSize: 16,
    color: "#A58FEC",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  textDetail2: {
    fontSize: 16,
    color: "#A9A9A9",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  textDetail3: {
    fontSize: 16,
    color: "#F89E90",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
});

export default Banner;
