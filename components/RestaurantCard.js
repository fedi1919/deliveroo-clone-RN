import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/features/userSlice";

import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const favoritesHandler = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
      setIsFavorite(false);
    } else {
      dispatch(
        addToFavorites({
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
        })
      );
      setIsFavorite(true);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
        });
      }}
      className="bg-white mx-4 my-2 shadow-xl "
    >
      <Image source={{ uri: imgUrl }} className="h-48 w-full rounded-sm" />
      <View className="flex flex-row items-center justify-between px-3 pb-4">
        <View>
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}.</Text> {genre}
            </Text>
          </View>
          <View className="flex-row items-center mt-2">
            <MapPinIcon color="green" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
          </View>
        </View>
        <HeartIcon
          color={isFavorite ? "red" : "gray"}
          onPress={favoritesHandler}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
