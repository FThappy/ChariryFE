import { View, Text, StyleSheet } from "react-native";
import React from 'react'
import { BaseToast, ErrorToast } from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons"; 


const ToastConfig = {
  success: ({ text1, text2 }) => (
    <View style={styles.container}>
      <Ionicons
        name="md-checkmark-circle"
        size={36}
        color="#23B93C"
        style={{ marginRight: 15 }}
      />
      <View>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    </View>
  ),
  error: ({ text1, text2 }) => (
    <View style={styles.errorContainer}>
      <Ionicons
        name="alert-circle"
        size={36}
        color="red"
        style={{ marginRight: 10 }}
      />
      <View>
        <Text style={styles.errorText1}>{text1}</Text>
        <Text style={styles.errorText2}>{text2}</Text>
      </View>
    </View>
  ),
  warning: ({ text1, text2 }) => (
    <View style={styles.warningContainer}>
      <Ionicons
        name="warning"
        size={36}
        color="#FFDD44"
        style={{ marginRight: 15 }}
      />
      <View>
        <Text style={styles.warningText1}>{text1}</Text>
        <Text style={styles.warningText2}>{text2}</Text>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderLeftColor: "#23B93C",
    borderLeftWidth: 5,
    borderRightColor: "#23B93C",
    borderRightWidth: 5,
  },
  text1: {
    color: "green",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "raleway",
  },
  text2: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "raleway",
    color: "#A8A8A8",
  },
  errorContainer: {
    height: "100%",
    width: "70%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderLeftColor: "red",
    borderLeftWidth: 5,
    borderRightColor: "red",
    borderRightWidth: 5,
  },
  errorText1: {
    color: "red",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "raleway",
  },
  errorText2: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "raleway",
    color: "#A8A8A8",
  },
  errorContainer: {
    height: "100%",
    width: "70%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderLeftColor: "red",
    borderLeftWidth: 5,
    borderRightColor: "red",
    borderRightWidth: 5,
  },
  errorText1: {
    color: "red",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "raleway",
  },
  errorText2: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "raleway",
    color: "#A8A8A8",
  },
  warningContainer: {
    height: "100%",
    width: "70%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderLeftColor: "#FFDD44",
    borderLeftWidth: 5,
    borderRightColor: "#FFDD44",
    borderRightWidth: 5,
  },
  warningText1: {
    color: "#FFDD44",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "raleway",
  },
  warningText2: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "raleway",
    color: "#A8A8A8",
  },
});

export default ToastConfig