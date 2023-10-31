import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity,Image, ScrollView,Button} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Readmore from '../Components/Readmore';
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Item = () => {

    const navigation = useNavigation();

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonHeart}>
            <AntDesign name="heart" size={36} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            accessibilityLabel="User Image"
            source={{
              uri: "https://cf.ltkcdn.net/charity/images/orig/254503-1600x1030-how-organize-food-drive.jpg",
            }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title1}>Donate For Hunger People</Text>
        <View style={styles.userDonate}>
          <Image
            style={styles.imageDonate}
            accessibilityLabel="User Image"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5415/5415232.png",
            }}
            resizeMode="contain"
          />
          <Image
            style={styles.imageDonate}
            accessibilityLabel="User Image"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5415/5415232.png",
            }}
            resizeMode="contain"
          />
          <Image
            style={styles.imageDonate}
            accessibilityLabel="User Image"
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5415/5415232.png",
            }}
            resizeMode="contain"
          />
          <Text style={styles.title2}> 265+ Donated</Text>
          <View style={styles.timeDonate}>
            <Text style={styles.title3}>2 Day Left</Text>
          </View>
        </View>
        <Text style={styles.textBy}>
          by
          <Text style={styles.title4}> Dreamy Charity</Text>
        </Text>
        <Readmore>
          The effects of regional conflicts, sharply rising costs, extreme
          weather events, and the social and economic impacts of the COVID-19
          pandemic are threatening an unprecedented number of people around the
          globe with hunger and starvation. The World Food Programme estimates
          that the 276 million people currently facing acute food insecurity
          could rise to between 309 million and 323 million under different
          scenarios due to the conflict in Ukraine. David Beasley, executive
          director of the World Food Programme, has said, “We have no choice but
          to take food from the hungry to feed the starving.”
        </Readmore>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyTarget}>
            <View style={styles.icon1}>
              <FontAwesome5 name="money-bill-wave" size={36} color="#A58FEC" />
            </View>
            <View style={styles.textTarget}>
              <Text style={styles.title5}>Target</Text>
              <Text style={styles.title6}>$8400</Text>
            </View>
          </View>
          <View style={styles.moneyWaiting}>
            <View style={styles.icon2}>
              <View style={styles.icons}>
                <MaterialIcons name="attach-money" size={36} color="#A58FEC" />
              </View>
            </View>
            <View style={styles.textTarget}>
              <Text style={styles.title5}>Waiting</Text>
              <Text style={styles.title6}>$2000</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Donation")}>
          <Text style={styles.title7}>Donate Now</Text>
        </TouchableOpacity>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    height: 60,
  },
  buttonBack: {
    height: 60,
    width: 60,
    backgroundColor: "#fff9ae",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonHeart: {
    width: 60,
    height: 60,
    backgroundColor: "#F1F1EEF1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  imageContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  image: {
    height: 220,
    width: "100%",
    borderRadius: 10,
  },
  title1: {
    marginHorizontal: 16,
    marginTop: 10,
    fontSize: 26,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  userDonate: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 10,
    alignItems: "center",
  },
  imageDonate: {
    width: 40,
    height: 40,
    backgroundColor: "#F89E90",
    borderRadius: 100,
  },
  title2: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "raleway",
    marginLeft: 10,
  },
  timeDonate: {
    backgroundColor: "#F2F0FF",
    width: "25%",
    height: 30,
    marginLeft: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title3: {
    color: "#A58FEC",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "raleway",
  },
  textBy: {
    marginHorizontal: 16,
    marginTop: 10,
    color: "gray",
    fontSize: 26,
    fontFamily: "raleway",
  },
  title4: {
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  moneyContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
    height: 100,
  },
  moneyTarget: {
    width: 180,
    height: "100%",
    backgroundColor: "#F2F0FF",
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  moneyWaiting: {
    width: 180,
    height: "100%",
    backgroundColor: "#F2F0FF",
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  icon1: {
    width: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textTarget: {
    marginLeft: 10,
  },
  title5: {
    color: "gray",
    fontSize: 20,
    fontFamily: "raleway",
  },
  title6: {
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
  },

  icon2: {
    width: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    height: 60,
    width: "75%",
    borderRadius: 50, // Đặt bán kính là một nửa của chiều rộng (hoặc chiều cao)
    borderWidth: 4, // Độ dày của border
    borderColor: "#A58FEC", // Màu của border
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    marginHorizontal: 16,
    width: "92%",
    height: 70,
    backgroundColor: "#A58FEC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: "30%",
  },
  title7: {
    fontSize: 32,
    color: "white",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
});

export default Item;
