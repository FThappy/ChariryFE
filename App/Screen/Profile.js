import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../service/userRedux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "./../../firebase";
import { updateImg } from "../service/apiCalls";

export default function Profile() {
  const [loadingSignIn, setLoadingSignIn] = React.useState(false);

  const dispatch = useDispatch();
  // Stores the selected image URI
  const [file, setFile] = useState(null);
  const user = useSelector((state) => state.user?.currentUser);
  // Stores any error message
  const [error, setError] = useState(null);
  // Function to pick an image from
  //the device's media library
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera  
                 roll permission to upload images.`
      );
    } else {
      // Launch the image library and get
      // the selected image
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        // If an image is selected (not cancelled),
        // update the file state variable
        console.log(result.assets[0].uri);
        setFile(result.assets[0].uri);

        // Clear any previous errors
        setError(null);
      }
    }
  };
  const handleUploadFile = async () => {
    

    const filename = new Date().getTime() + file;
    console.log(new Date().getTime());
    const storage = getStorage(app);
    const storageRef = ref(storage, filename);
    const response = await fetch(file);
    const blob = await response.blob();
    


    const uploadTask = uploadBytesResumable(storageRef, blob);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      async () => {
        // Xử lý khi tải lên thành công
        // Nhận URL tải xuống
        setLoadingSignIn(true);
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at:", downloadURL);
        data = {
          id : user._id,
          img : downloadURL,
        }
        console.log(data);
        try {
          const res = await updateImg(dispatch, data);
          console.log(res);
          setLoadingSignIn(false);
          setFile("")
        } catch (error) {
          console.log(error);
          setLoadingSignIn(false);
        }
        
      }
    );
  };
  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Profiles</Text>
        <View style={styles.imageContainer}>
          {file ? (
            <Image
              style={styles.image}
              accessibilityLabel="User Image"
              source={{
                uri: file,
              }}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={styles.image}
              accessibilityLabel="User Image"
              source={{
                uri: user.img
                  ? `${user.img}`
                  : "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.pngz",
              }}
              resizeMode="contain"
            />
          )}
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Feather name="camera" size={24} color="#CA4D64" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.textName}>{user.username}</Text>
          <Text style={styles.textEmail}>{user.email}</Text>
          <TouchableOpacity style={styles.infomationContainer}>
            <View style={styles.information}>
              <FontAwesome5 name="user" size={32} color="gray" />
              <Text style={styles.textUser}>My Proflie</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={32} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infomationContainer}>
            <View style={styles.information}>
              <FontAwesome5 name="donate" size={32} color="gray" />
              <Text style={styles.textUser}>Donation</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={32} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infomationContainer}>
            <View style={styles.information}>
              <AntDesign name="folder1" size={32} color="gray" />
              <Text style={styles.textUser}>My Charity Project</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={32} color="gray" />
          </TouchableOpacity>
          {file && (
            <TouchableOpacity
              style={styles.changeImage}
              onPress={handleUploadFile}
            >
              {!loadingSignIn ? (
                <Text style={styles.textLogout}>Save Change</Text>
              ) : (
                <ActivityIndicator size={"large"} color={"black"} />
              )}
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
            <Text style={styles.textLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AD99F0",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    color: "white",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginTop: 30,
    zIndex: 9,
  },
  imageContainer: {
    backgroundColor: "#F89E90",
    marginTop: 20,
    width: "45%",
    height: "23.5%",
    borderRadius: 50,
    alignItems: "center",
    padding: 5,
    zIndex: 9,
  },
  image: {
    padding: 10,
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginTop: -10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  bottom: {
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    top: "25%",
    zIndex: 0, // Đặt độ ưu tiên thấp
    alignItems: "center",
  },
  textName: {
    marginTop: "25%",
    fontSize: 32,
    color: "#39395D",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  textEmail: {
    fontSize: 22,
    color: "gray",
    fontFamily: "raleway",
    fontWeight: "bold",
    marginBottom: 20,
  },
  infomationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "88%",
    marginHorizontal: 16,
    alignItems: "center",
  },
  information: {
    flexDirection: "row",
    alignItems: "center",
  },
  textUser: {
    marginLeft: 30,
    fontSize: 22,
    color: "gray",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
  changeImage: {
    width: "90%",
    backgroundColor: "#3bb077",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 50,
    marginBottom: "5%",
    marginTop: "5%",
  },
  logout: {
    width: "90%",
    backgroundColor: "#FF4545",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 50,
  },
  textLogout: {
    fontSize: 22,
    color: "white",
    fontFamily: "raleway",
    fontWeight: "bold",
  },
});
