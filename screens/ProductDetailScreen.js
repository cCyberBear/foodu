import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { CurrencyDollarIcon } from "react-native-heroicons/outline";

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
    <View className="relative">
      <View className="h-20 w-max bg-black absolute left-0 bottom-0">
        <TouchableOpacity className="">
          <Text>Buy</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: IMG_URL + currentProduct.img,
        }}
        className="h-1/2 w-max object-contain"
      />
      <ScrollView className="h-1/2 bg-gray-500">
        <Text className="text-lg font-bold px-4 pt-4">
          {currentProduct.name}
        </Text>
        <Text className="px-4">
          {currentProduct?.subCategory.map((val) => (
            <Text className="text-xs text-gray-400 px-4">{val.subName} | </Text>
          ))}
        </Text>
        <View className="px-4 pt-2 items-center flex-row">
          <CurrencyDollarIcon size={30} color={"#00CCBB"} />
          <Text className="text-3xl font-bold">
            {"  "}
            {currentProduct.retailPrice}.00
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;
