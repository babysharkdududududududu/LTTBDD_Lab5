import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

const Home = ({ navigation, route }) => {
  const [numStar, setNumStar] = useState(0);

  const handleSelectedStar = (starSelected) => {
    setNumStar(starSelected);
  };

  const renderStar = (numStarRender) => {
    return (
      <TouchableOpacity onPress={() => handleSelectedStar(numStarRender)}>
        <AntDesign
          name={numStarRender <= numStar ? "star" : "staro"}
          size={24}
          color={numStarRender <= numStar ? "gold" : "black"}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={styles.img} source={route.params?.img}></Image>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text> Điện thoại Vmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View style={styles.star}>
            {renderStar(1)}
            {renderStar(2)}
            {renderStar(3)}
            {renderStar(4)}
            {renderStar(5)}

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <Text>Xem 828 danh gia</Text>
            </View>
          </View>
        </View>

        <View style={styles.price}>
          <Text style={{ fontWeight: "bold", marginRight: 20 }}>
            1.790.000 d
          </Text>
          <Text style={{ textDecorationLine: "line-through" }}>
            1.790.000 d
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ChoiceColor")}
            style={styles.button}
          >
            <View>
              <Text style={{ marginLeft: 70 }}>4 mau - chon mau</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 200,
            height: 40,
            backgroundColor: "red",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          onPress={() => alert("Thành công")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Chọn mua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  star: {
    flexDirection: "row",
  },
  price: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    width: "65%",
    height: 30,
    borderWidth: 2,
    borderBlockColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
});
