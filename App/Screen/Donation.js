import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import React,{useState}from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Banner from "../Components/Banner";

export default function Donation() {
        const navigation = useNavigation();

        const [text, setText] = useState(null);

        const onChangeText = (value) => {
          setText(value);
        };

        const onReset = (value) => {
          setText(value);
        };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={36} color="black" />
        </TouchableOpacity>
        <Text style={styles.title1}>Donation</Text>
      </View>
      <View style={styles.banner}>
        <Banner onPress={() => navigation.push("Item")} />
      </View>
      <Text style={styles.title2}> How much wanna donate ? </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Price"
        placeholderTextColor="gray" // Đổi màu placeholder nếu cần
        textAlign="center"
        value={text}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.select1} onPress={() => onReset("100")}>
        <Text style={styles.title3}>$100</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.select1} onPress={() => onReset("50")}>
        <Text style={styles.title3}>$50</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.select1} onPress={() => onReset("5")}>
        <Text style={styles.title3}>$5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("CheckOutPayMent")}
      >
        <Text style={styles.title7}>Check Out</Text>
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
    marginTop: 20,
    alignItems: "center",
  },
  buttonBack: {
    width: 60,
    height: 60,
    backgroundColor: "#fff9ae",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  title1: {
    marginLeft: 100,
    fontSize: 26,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  banner: {
    height : 320,
    marginHorizontal: 10,
    marginTop: 40,
  },
  title2: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 26,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#F1F1EEF1",
    marginTop: 20,
    height: 80,
    width: 320,
    alignSelf: "center",
    borderRadius: 20,
    fontSize: 20,
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  select1: {
    backgroundColor: "white",
    marginTop: 10,
    height: 80,
    width: 320,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Đặt bán kính là một nửa của chiều rộng (hoặc chiều cao)
    borderWidth: 4, // Độ dày của border
    borderColor: "#A58FEC", // Màu của border
  },
  title3: {
    fontSize: 20,
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  buttons: {
    borderRadius: 25,
    marginHorizontal: 16,
    width: 320,
    height: 70,
    backgroundColor: "#A58FEC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center",
  },
  title7: {
    fontSize: 32,
    color: "white",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
});
