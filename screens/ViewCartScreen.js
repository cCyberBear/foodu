import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ViewCartScreen = () => {
  const cart = useSelector((state) => state.productReducer.cart);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>{JSON.stringify(cart)}</Text>
    </View>
  );
};

export default ViewCartScreen;
