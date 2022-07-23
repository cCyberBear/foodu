import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ProdcutSmallCard from "../components/ProdcutSmallCard";
import { AdjustmentsIcon, SearchIcon } from "react-native-heroicons/solid";
import SafeAndroiView from "../components/SafeAndroiView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProductDetailScreen from "./ProductDetailScreen";

// const Stack = createNativeStackNavigator();
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
    <SafeAndroiView>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1 items-center">
          <SearchIcon size={20} color="#00CCBB" />
          <TextInput placeholder="find something ?" keyboardType="default" />
        </View>
        <AdjustmentsIcon size={20} color="#00CCBB" />
      </View>
      <ScrollView>
        <View className="flex-row flex-wrap bg-gray-100">
          {products.map((val) => (
            <ProdcutSmallCard data={val} key={val._id} />
          ))}
        </View>
      </ScrollView>
      {/* <Stack.Navigator>
        <Stack.Screen name="ProductsDetail" component={ProductDetailScreen} />
      </Stack.Navigator> */}
    </SafeAndroiView>
  );
};

export default ViewAllScreen;
