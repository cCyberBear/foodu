import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import {
  CurrencyDollarIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import CurrencyFormat from "react-currency-format";
import FeaturedButton from "../components/FeaturedButton";
const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const currentProduct = useSelector(
    (state) => state.productReducer.currentProduct
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <FeaturedButton />
      <ScrollView className="relative">
        <Image
          source={{
            uri: IMG_URL + currentProduct.img,
          }}
          className="h-96 w-max object-contain"
        />
        <View>
          <Text className="text-xl font-bold px-4 pt-4 bg-white">
            {currentProduct.name}
          </Text>
          <Text className="px-4 bg-white">
            {currentProduct?.subCategory?.map((val) => (
              <Text key={val._id} className="text-xs text-gray-400 px-4">
                {val.subName} |{" "}
              </Text>
            ))}
          </Text>
          <View className="px-4 pb-2 mb-1 flex-row justify-between items-end bg-white">
            <View className="flex-row items-center">
              <CurrencyDollarIcon size={30} color={"#00CCBB"} />
              <CurrencyFormat
                value={currentProduct.retailPrice}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => (
                  <Text className="text-2xl font-bold"> {value}.00</Text>
                )}
              />
            </View>
            <View className="flex-row items-center ">
              <Text className="text-sm font-bold text-gray-400">
                Available: {currentProduct.quantity}
              </Text>
            </View>
          </View>
          <View className="px-4 py-2 my-1  bg-white ">
            <Text className="text-lg font-bold ">Description</Text>
            <Text className="text-sm px-2">{currentProduct.description}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetailScreen;
