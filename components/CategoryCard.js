import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 h-20 w-60 rounded bg-teal-200 items-center justify-center">
      <Text className=" text-black font-bold ">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
