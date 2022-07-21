import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ViewAllScreen = () => {
  const navigation = useNavigation();
  const productView = useSelector((state) => state.productReducer.productView);
  let products = [];
  if (productView === 1) {
    products = useSelector((state) => state.productReducer.topProducts);
  } else if (productView === 2) {
    products = useSelector((state) => state.productReducer.listProducts);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <Text>{JSON.stringify(products)}</Text>
    </ScrollView>
  );
};

export default ViewAllScreen;
