import { View, Text, SafeAreaView, FlatList, Pressable } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import pizza from "../Data/pizza";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CartItems } from "../Context";

const PizzaScreen = () => {
  const navigation = useNavigation();
  const data = pizza;
  const { cart, setCart } = useContext(CartItems);
  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <SafeAreaView>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={24}
        color="black"
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />

      {total === 0 ? null : (
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={{
            backgroundColor: "#36013F",
            padding: 10,
            position: "absolute",
            bottom: 100,
            left: 150,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Go to Cart
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default PizzaScreen;
