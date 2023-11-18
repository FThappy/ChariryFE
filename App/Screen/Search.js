import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Banner from '../Components/Banner';
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function Search() {
  const navigation = useNavigation();
  const fakeData = [
    { id: 1, des: "a" },
    { id: 2, des: "a" },
    { id: 3, des: "a" },
    { id: 4, des: "a" },
    { id: 5, des: "a" },
    { id: 6, des: "a" },
    { id: 7, des: "a" },
    { id: 8, des: "a" },
    { id: 9, des: "a" },
    { id: 10, des: "a" },
    { id: 11, des: "a" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Search</Text>
        <Text style={styles.title1}>
          for <Text style={styles.title2}>charity project</Text>
        </Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchs}>
            <AntDesign
              name="search1"
              size={24}
              color="#CA4D64"
              style={styles.icon}
            />
            <TextInput style={styles.input} placeholder="Search" />
          </View>
          <TouchableOpacity style={styles.filter}>
            <Feather name="filter" size={30} color="#CA4D64" />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.resultContainer}>
        <Text style={styles.titleResult}>Search Result :</Text>
        <FlatList
          data={fakeData}
          renderItem={({ item }) => {
            // console.log(item);

            return (
              <SafeAreaView style={styles.bannerContainer} key={item.id}>
                <Banner onPress={() => navigation.navigate("ItemSearch")} />
              </SafeAreaView>
            );
          }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    backgroundColor: "#1b3057",
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    fontSize: 36,
    color: "#f4f2f2",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  title1: {
    fontSize: 22,
    color: "#f4f2f2",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  title2: {
    fontSize: 22,
    color: "#90CFC9",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  searchContainer: {
    marginTop: 16,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  searchs: {
    flexDirection: "row",
    width: screenWidth > 400 ? 320 : 300,
    backgroundColor: "#f4f2f2",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
  },
  filter: {
    backgroundColor: "#f4f2f2",
    height: 60,
    width: 60,
    marginLeft: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleResult: {
    fontSize: 36,
    color: "#1b3057",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  resultContainer: {
    flex: 1,
  },
  bannerContainer: {
    height: 275,
  },
});