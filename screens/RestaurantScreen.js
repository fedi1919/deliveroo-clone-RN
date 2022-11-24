import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";

import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setRestaurant,
} from "../redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const [dishes, setDishes] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //pull the navigation props
  const {
    params: { id, imgUrl, title, rating, genre, address, shortDescription },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
      })
    );
  }, []);

  useEffect(() => {
    const getDishes = async () => {
      try {
        const response = await axios.get(
          `http://192.168.100.180:5000/api/dish/${id}`
        );
        setDishes(response?.data);
      } catch (error) {
        console.log("err", error);
      }
    };
    getDishes();
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView className="mt-10">
        <View className="relative">
          <Image source={{ uri: imgUrl }} className="w-full h-64" />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-10 left-5 bg-gray-100 rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1 justify-between">
              <View className="flex-row items-center space-x-2">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}.</Text> {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <MapPinIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>
        </View>
        <View className="pb-28">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dishes row*/}
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              label={dish.label}
              price={dish.price}
              image={dish.dishImg}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
