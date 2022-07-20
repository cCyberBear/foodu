import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAndroiView from "../components/SafeAndroiView";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Category from "../components/Category";
import FeatureRow from "../components/FeatureRow";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllCatetgoryAction } from "../store/actions/categoryAction";
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(getAllCatetgoryAction());
  }, []);
  return (
    <SafeAndroiView>
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-5 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs">Delivery Now !!!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1 items-center">
          <SearchIcon size={20} color="#00CCBB" />
          <TextInput placeholder="find something ?" keyboardType="default" />
        </View>
        <AdjustmentsIcon size={20} color="#00CCBB" />
      </View>
      {/* body */}
      <ScrollView className="bg-gray-100">
        <Category />
        <FeatureRow
          id="1"
          title="Feature"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeatureRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
          featuredCategory="discounts"
        />
        <FeatureRow
          id="3"
          title="Offers near you"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAndroiView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
