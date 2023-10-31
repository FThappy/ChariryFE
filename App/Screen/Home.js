import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ItemSlide from "../Components/ItemSlide";
import Banner from "../Components/Banner";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// Log độ dài và chiều rộng màn hình
console.log("Chiều rộng màn hình:", screenWidth);
console.log("Chiều cao màn hình:", screenHeight);

export default function Home() {
  
  const navigation = useNavigation()

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.title}>
          <View style={styles.titleText}>
            <Text style={styles.titleTextHello}>Hello!</Text>
            <Text style={styles.titleUserName}>Crocodile</Text>
          </View>
          <View style={styles.titleImg}>
            <Image
              style={styles.titleImage}
              accessibilityLabel="User Image"
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1752/1752572.png",
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.slide}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            showsPagination={false}
            autoplayTimeout={10}
            autoplayDirection={true}
          >
            <ItemSlide
              uris="https://firebasestorage.googleapis.com/v0/b/shop-19fe0.appspot.com/o/4914207.png?alt=media&token=4334f7e9-07e8-43b5-8df3-ef8339a8dc98&_gl=1*1u3sfhx*_ga*ODgxNzExMjkuMTY5Mjg1NzY3OQ..*_ga_CW55HF8NVT*MTY5NzcyOTA1Ny4xNC4xLjE2OTc3MjkyMDQuNDQuMC4w"
              titles="Help is our main goal"
              colors={["#C7B7FB", "#A58FEC"]}
            />
            <ItemSlide
              uris="https://cdn-icons-png.flaticon.com/128/2194/2194769.png"
              titles="Our primary is to assist"
              colors={["rgb(214, 224, 255)", "rgb(254, 168, 168)"]}
            />
            <ItemSlide
              uris="https://cdn-icons-png.flaticon.com/128/1598/1598431.png"
              titles="Save the green planet"
              colors={["#d4fc79", "#96e6a1"]}
            />
          </Swiper>
        </View>
        <View style={styles.causes}>
          <View style={styles.titleCausesContainer}>
            <Text style={styles.titleCauses}>Causes</Text>
            <Text style={styles.titleTextHello}>See all</Text>
          </View>
          <View style={styles.causesType}>
            <TouchableOpacity style={styles.type}>
              <Image
                style={styles.typeImage}
                accessibilityLabel="Type Causes"
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/10490/10490270.png",
                }}
                resizeMode="contain"
              />
              <Text style={styles.typeText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type}>
              <Image
                style={styles.typeImage}
                accessibilityLabel="Type Causes"
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/10473/10473299.png",
                }}
                resizeMode="contain"
              />
              <Text style={styles.typeText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type}>
              <Image
                style={styles.typeImage}
                accessibilityLabel="Type Causes"
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/2231/2231662.png",
                }}
                resizeMode="contain"
              />
              <Text style={styles.typeText}>Education</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.type}>
              <Image
                style={styles.typeImage}
                accessibilityLabel="Type Causes"
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/12084/12084570.png",
                }}
                resizeMode="contain"
              />
              <Text style={styles.typeText}>Water</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.emergency}>
          <View style={styles.titleEmergencyContainer}>
            <Text style={styles.titleEmergency}>Emergency Help</Text>
            <Text
              style={styles.titleTextHello}
              onPress={() => navigation.navigate("SearchStack")}
            >
              See all
            </Text>
          </View>
          <View style={styles.bannerContainer}>
            <Swiper
              style={styles.wrapper}
              autoplay={true}
              showsPagination={false}
              autoplayTimeout={10}
              autoplayDirection={true}
            >
              <Banner onPress={() => navigation.navigate("Item")} />
              <Banner onPress={() => navigation.navigate("Item")} />
              <Banner onPress={() => navigation.navigate("Item")} />
              <Banner onPress={() => navigation.navigate("Item")} />
              <Banner onPress={() => navigation.navigate("Item")} />
            </Swiper>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    height: 80,
    marginHorizontal: 16,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    height: "auto",
  },
  titleTextHello: {
    fontSize: 22,
    color: "#F89E90",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  titleUserName: {
    fontSize: 36,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  titleImg: {
    height: 80,
    width: 80,
    borderRadius: 20,
    backgroundColor: "#FBABB0",
    padding: 10,
  },
  titleImage: {
    height: 60,
    width: 60,
  },
  slide: {
    height: 200,
    backgroundColor: "#FEE8E5",
    marginHorizontal: 14,
    marginTop: 10,
    borderRadius: 20,
  },
  causes: {
    height: 180,
    marginHorizontal: 14,
    marginTop: 10,
    borderRadius: 20,
  },
  titleCausesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 10,
  },
  titleCauses: {
    fontSize: 30,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  causesType: { flexDirection: "row", justifyContent: "space-between" },
  type: {
    flex: 1,
    height: 80,
    backgroundColor: "#F7F6FE",
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent : "center",
    padding : 5,
  },
  typeImage: {
    height: 60,
    width: 60,
  },
  typeText: {
    fontFamily: "raleway",
  },
  emergency: {
    height: 320,
    marginHorizontal: 12,
    borderRadius: 20,
  },
  titleEmergencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  titleEmergency: {
    fontSize: 26,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  bannerContainer: {
    height: 260,
  },
  wrapper: {},
});
