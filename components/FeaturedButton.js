import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PlusCircleIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
const FeaturedButton = () => {
  return (
    <View className="absolute bottom-10 w-full z-50">
      <View className="flex-row justify-between px-4">
        <TouchableOpacity className="py-4 w-1/2 flex-row justify-center items-center bg-white border-r-2 rounded-l-lg border-gray-300">
          <PlusCircleIcon color={"#00CCBB"} />
          <Text>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-4 w-1/2 flex-row justify-center items-center bg-white border-l-2 rounded-r-lg border-gray-300">
          <ShoppingCartIcon color={"#00CCBB"} />
          <Text>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedButton;
