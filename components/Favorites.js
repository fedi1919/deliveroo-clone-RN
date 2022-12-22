import { ScrollView, Text } from "react-native";
import React from "react";
import FavoriteCard from "./FavoriteCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favs = useSelector((state) => state?.user?.favorites);

  if (favs.length === 0) return null;

  return (
    <>
    <Text className="ml-4 mt-4 text-lg font-semibold">My Favorites</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      >
      {
        favs?.map((item, index) => <FavoriteCard key={index} imgUrl={item.imgUrl} title={item.title} />)
      }
      
    </ScrollView>
      </>
  );
};

export default Favorites;
