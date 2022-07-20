import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCart from "./RestaurantCart";

const FeatureRow = ({ is, title, description, featuredCategory }) => {
  const [food, setFood] = useState([]);

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
        className="pt-4"
      >
        {food.map((val) => (
          <RestaurantCart
            id={val.id}
            imgUrl={val.img}
            title={val.name}
            rating={val.quantity}
            genre="Japanese"
            address="123 Main street"
            short_des="this is short description"
            dishes={[]}
            long={20}
            lat={0}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
