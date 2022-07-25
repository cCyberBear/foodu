import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IMG_URL } from "../utils/constants";
import {
  MinusSmIcon,
  PlusSmIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART } from "../store/types/ProductTypes";
import CurrencyFormat from "react-currency-format";
const ProductCart = ({ data, key }) => {
  const dispatch = useDispatch();
  const handlePressPlus = (id) => {
    dispatch({ type: UPDATE_CART, payload: { id, inCart: data.inCart + 1 } });
  };
  const handlePressMinus = (id) => {
    dispatch({ type: UPDATE_CART, payload: { id, inCart: data.inCart - 1 } });
  };
  const handleRemoveFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  return (
    <View
      key={key}
      className="border-[#00000011] border-b-2 mx-2 flex-row p-3 items-center">
      <Image
        source={{
          uri: IMG_URL + data.img,
        }}
        className="w-20 h-20 mr-3"
      />
      <View>
        <Text>{data.name}</Text>
        <View className="flex-row items-center pt-2">
          <TouchableOpacity
            disabled={data.inCart <= 1}
            className={
              data.inCart <= 1
                ? "bg-[#9fabaa] rounded-full"
                : "bg-[#00CCBB] rounded-full"
            }
            onPress={() => handlePressMinus(data._id)}>
            <MinusSmIcon color={"#fff"} />
          </TouchableOpacity>
          <Text className="px-4">{data.inCart}</Text>
          <TouchableOpacity
            className="bg-[#00CCBB] rounded-full"
            onPress={() => handlePressPlus(data._id)}>
            <PlusSmIcon color={"#fff"} />
          </TouchableOpacity>
        </View>
        <CurrencyFormat
          value={data.inCart * data.retailPrice}
          displayType={"text"}
          thousandSeparator={true}
          renderText={(value) => (
            <Text className="pt-3 text-sm text-gray-400">
              {data.inCart} x {data.retailPrice} = ${value}
            </Text>
          )}
        />
      </View>
      <TouchableOpacity
        className="absolute bottom-1/2 right-2"
        onPress={() => handleRemoveFromCart(data._id)}>
        <XCircleIcon color={"red"} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCart;
