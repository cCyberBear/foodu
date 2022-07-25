import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ProductCart from "../components/ProductCart";
import CurrencyFormat from "react-currency-format";

const ViewCartScreen = () => {
  const [selected, setSelected] = useState(0);
  const cart = useSelector((state) => state.productReducer.cart);
  const listCategories = useSelector(
    (state) => state.categoryReducer.listCategories
  );
  const price = cart.reduce(
    (acc, val) => acc + val.retailPrice * val.inCart,
    0
  );
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handlePressCategory = (id) => {
    setSelected(id);
  };
  return (
    <View className="bg-white flex-1 pt-10">
      <View className="h-1/6 bg-white ">
        <View className="h-1/2 flex-row border-b-2 border-b-[#00bbcc1c] justify-center items-center">
          <Text className="text-xl font-bold">Cart</Text>
        </View>
        {/* Select category */}
        <View className="border-b-2 border-b-[#00bbcc1c]">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => handlePressCategory(0)}
              className={
                selected === 0
                  ? "mr-4 border-b-2 border-b-[#00CCBB] p-4"
                  : "mr-4 p-4"
              }>
              <Text className={"text-[#00CCBB] text-lg"}>All</Text>
            </TouchableOpacity>
            {listCategories.map((val) => (
              <TouchableOpacity
                key={val._id}
                className={
                  selected === val._id
                    ? "mr-4 border-b-2 border-b-[#00CCBB] p-4"
                    : "mr-4 p-4"
                }>
                <Text
                  onPress={() => handlePressCategory(val._id)}
                  className={"text-[#00CCBB] text-lg"}>
                  {val.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <ScrollView className="h-4/6">
        {cart.map((val) => (
          <ProductCart key={val._id} data={val} />
        ))}
      </ScrollView>

      {/* total */}
      <View className="w-screen h-1/6 bg-white border-t-2 border-t-[#00bbcc1c]">
        <View className="flex-row w-screen justify-end items-center">
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => (
              <Text className="text-lg text-gray-400 font-bold p-4">
                Total : ${value}
              </Text>
            )}
          />
        </View>
        <TouchableOpacity className="mx-4 p-2 bg-[#00CCBB] rounded-md">
          <Text className="py-2 w-full text-white font-bold text-xl text-center">
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCartScreen;
