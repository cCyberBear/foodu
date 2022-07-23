import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IMG_URL } from "../utils/constants";
import CurrencyFormat from "react-currency-format";
import { CurrencyDollarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getProductById } from "../store/actions/productAction";
const ProdcutSmallCard = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePressViewDetail = () => {
    dispatch(getProductById(data._id));
    navigation.navigate("ProductsDetail");
  };
  return (
    <TouchableOpacity className="w-1/2" onPress={handlePressViewDetail}>
      <View className="m-1 bg-white ">
        <View className="items-center">
          <Image
            source={{
              uri: IMG_URL + data.img,
            }}
            className="object-contain h-48 w-full rounded-sm"
          />
        </View>
        <View>
          <Text className="text-xs font-bold px-4 py-2">{data.name}</Text>

          <CurrencyFormat
            value={data.retailPrice}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => (
              <View className="flex-row items-center px-4 pb-2">
                <CurrencyDollarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs font-bold ">{value}.00</Text>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProdcutSmallCard;
