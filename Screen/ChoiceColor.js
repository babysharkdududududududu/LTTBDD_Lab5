import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
const ChoiceColor = ({ navigation }) => {
  const [img, setImg] = React.useState(require("../assets/vs_black.png"));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={img}></Image>
        <Text>Điện thoại Vmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.footer}>
        <Text
          style={{ marginLeft: -200, marginBottom: 20, fontWeight: "bold" }}
        >
          Chọn một màu bên dưới
        </Text>

        <TouchableOpacity
          style={styles.black}
          onPress={() => setImg(require("../assets/vs_black.png"))}
        >
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setImg(require("../assets/vs_blue.png"))}
        >
          <View style={styles.blue}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setImg(require("../assets/vs_red.png"))}
        >
          <View style={styles.red}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setImg(require("../assets/vs_silver.png"))}
        >
          <View style={styles.silver}></View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.chon}
          onPress={() => navigation.navigate("Home", { img })}
        >
          <Text
            style={{
              textAlign: "center",
              lineHeight: 25,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Xong
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ChoiceColor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 8,
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  black: {
    height: 100,
    width: 100,
    backgroundColor: "black",
  },
  red: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  blue: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
  silver: {
    height: 100,
    width: 100,
    backgroundColor: "silver",
  },
  chon: {
    backgroundColor: "#4d6dc1",
    borderColor: "red",
    borderWidth: 1,
    width: 200,
    height: 30,
    marginTop: 20,
    borderRadius: 5,
    textAlign: "center",
  },
});
