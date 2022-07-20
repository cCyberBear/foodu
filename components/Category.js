import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

const Category = () => {
  const categories = useSelector(
    (state) => state.categoryReducer.listCategories
  );
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((val, idx) => (
        <CategoryCard key={val._id || idx} title={val.name} />
      ))}
    </ScrollView>
  );
};

export default Category;
