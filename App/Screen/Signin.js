import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { publicRequest } from "../../requestMethods";
import CryptoJS from "react-native-crypto-js";
import {PASS_SEC} from "@env";
import Toast from "react-native-toast-message";

const type = ["Person", "Company"];
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const Signin = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = (text,name) => {
 
    setInputs((prev) => {
      return {
        ...prev,
        [name]: text,
      };
    });
  };
  const handleSubmit = () => {
    if(inputs.username && inputs.password && inputs.address && inputs.type && inputs.email && inputs.phone){
      const _password = CryptoJS.AES.encrypt(
        inputs.password,
        PASS_SEC
      ).toString();
      inputs.password = _password;
      const register = async () => {
        try {
          const res = await publicRequest.post("/auth/register", inputs);
          if (res.status === 201) {
            // Handle successful registration
            console.log("Registration successful");
            // navigation.navigate("AccessRegister");
          } else {
            // Handle registration error
            console.error("Registration failed");
          }
        } catch (error) {
          if (error.response?.data && error.response?.data.code === 3) {
            Toast.show({
              type: "error",
              text1: "Xảy ra lỗi trong quá trình xử lý",
              text2: "Vui lòng thử lại",
            });
          }
        }
      };
      register();
    }
    else {
      Toast.show({
        type: "warning",
        text1: "Hãy điền đầy đủ thông tin",
        text2: "Vui lòng thử lại",
      });
    }
  }

  return (
    <ScrollView style={styles.vi}>
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
            <Text style={{ marginLeft: "20%", fontSize: 30 }}>Registers</Text>
          </View>
          <SelectDropdown
            data={type}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              handleChange(selectedItem, "type");
            }}
            defaultButtonText={"You are Person or Company"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <MaterialIcons
                  name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex:Ronaldo de Lima"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => handleChange(text, "username")}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex:Fifa2002@worlcup.com"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => handleChange(text, "email")}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 99999999999"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => handleChange(text, "phone")}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => handleChange(text, "address")}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Ex : ***************"
              placeholderTextColor="#A9A9A9"
              onChangeText={(text) => handleChange(text, "password")}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit}>
            <LinearGradient
              colors={["#384CFF", "#00A3FF"]}
              style={styles.button}
              start={{ x: 0, y: 0.5 }} // Điểm bắt đầu ở giữa trên (x: 0, y: 0.5)
              end={{ x: 1, y: 0.5 }} // Điểm kết thúc ở giữa dưới (x: 1, y: 0.5)
            >
              <Text style={styles.buttonText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.text1}>
            Already have an account ?.
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color: "red", marginLeft: "5" }}
            >
              Login
            </Text>
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  vi: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    marginTop: 20,
    height: 60,
    width: "100%",
    alignItems: "center",
  },
  buttonBack: {
    height: 60,
    width: 60,
    backgroundColor: "#DDEFBB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  isContainer: {
    flex: 1,
    width: screenWidth,
    alignItems: "center",
    height : screenHeight,
  },
  dropdown1BtnStyle: {
    marginTop: 50,
    width: "85%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginTop: 40,
  },
  label: {
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  input: {
    color: "black",
    fontWeight: "bold",
    width: "100%",
    height: 35,
    borderBottomWidth: 2,
    borderBottomColor: "#A9A9A9",
    fontSize: 20,
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
  text1: {
    height: 17,
    width: 320,
    marginLeft: 100,
    color: "#384CFF",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Signin;
