import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PlusCircleIcon, ShoppingCartIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ADD_TO_CART } from "../store/types/ProductTypes";
const FeaturedButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentProduct = useSelector(
    (state) => state.productReducer.currentProduct
  );
  const onHandleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: currentProduct._id });
  };

  const onHandleBuyNow = () => {};
  return (
    <View className="absolute bottom-10 w-full z-50">
      <View className="flex-row justify-between px-4">
        <TouchableOpacity
          onPress={onHandleAddToCart}
          className="py-4 w-1/2 flex-row justify-center items-center bg-white border-r-2 rounded-l-lg border-gray-300"
        >
          <PlusCircleIcon color={"#00CCBB"} />
          <Text>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onHandleBuyNow}
          className="py-4 w-1/2 flex-row justify-center items-center bg-white border-l-2 rounded-r-lg border-gray-300"
        >
          <ShoppingCartIcon color={"#00CCBB"} />
          <Text>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedButton;
