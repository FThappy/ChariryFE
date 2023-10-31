import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react"; 

export default function Readmore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    }; 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isReadMore ? text.slice(0, 200) : text}
        <Text onPress={toggleReadMore} style={{color:"#CA4D64"}}>
          {isReadMore ? "...read more" : " ...show less"}
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
  },
  text: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});