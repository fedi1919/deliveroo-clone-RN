import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const FavoriteCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{ uri: imgUrl }} className="h-28 w-32 rounded " />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
