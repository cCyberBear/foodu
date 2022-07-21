import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { CurrencyDollarIcon, DatabaseIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { CURRENT_ID } from "../store/types/ProductTypes";
import { useDispatch } from "react-redux";
import { getProductById } from "../store/actions/productAction";

const RestaurantCart = ({ id, imgUrl, title, price, genre, quantity }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePressViewDetail = () => {
    dispatch(getProductById(id));
    navigation.navigate("ProductsDetail");
  };
  return (
    <TouchableOpacity
      onPress={handlePressViewDetail}
      className="mr-4 bg-white shadow overflow-hidden items-center">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-64 w-64 rounded-sm object-contain"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-ld pt-2 w-64">{title}</Text>
        <View className="items-end mt-4">
          <View className="flex-row items-center space-x-1">
            <CurrencyDollarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-700">{price}.00</Text>
              {genre}
            </Text>
          </View>
          <View className="flex-row items-center">
            <DatabaseIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">
              Available · {quantity}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCart;
