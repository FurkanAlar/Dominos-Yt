import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import MenuComponent from "../components/MenuComponent";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-n_NBXmFXRWT7iGC-THljTXxeSLHJsV9kg&usqp=CAU",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEez8xQZfPxqFsk250_vhXqgRz5Nv8NsHayohTjVexmQwLwhsFUxnElS6bkxLb7gTvHTM&usqp=CAU",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyDcZ1Y3GcIx0CB9Qd8MGw5IE6eASPzwWVIs-yklFqqd7O3bfXj5egUmREG0dUK6M6o8&usqp=CAU",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View style={{ margin: 5 }} key={index}>
            <Image
              style={{ width: 220, height: 130 }}
              source={{ uri: item.image }}
            />
          </View>
        ))}
      </ScrollView>
      <MenuComponent />
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel10.png",
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel9.png",
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel13.png",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
