import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCart from "./RestaurantCart";
import { IMG_URL } from "../utils/constants";

const FeatureRow = ({ is, title, description, products }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {products &&
          products.map((val) => (
            <RestaurantCart
              key={val._id}
              id={val._id}
              imgUrl={IMG_URL + val.img}
              title={val.name}
              price={val.retailPrice}
              quantity={val.quantity}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
