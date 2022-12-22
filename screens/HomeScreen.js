import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, ScrollView, ActivityIndicator, Text } from "react-native";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import RestaurantCard from "../components/RestaurantCard";
import Favorites from "../components/Favorites";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const favs = useSelector((state) => state?.user?.favorites);

  const results = searchResults.map((result, index) => (
    <RestaurantCard
      key={index}
      id={result._id}
      imgUrl={result.imgUrl}
      title={result.title}
      rating={result.rating}
      genre={result.genre}
      address={result.address}
      shortDescription={result.shortDescription}
      dishes={result.dishes}
      long={20}
      lat={40}
    />
  ));

  const content = results?.length ? (
    <ScrollView
      className="bg-gray-200"
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* Categories */}
      <Favorites />

      {favs.length != 0 && (
        <Text className="ml-4 mt-4 text-lg font-semibold">All Restaurants</Text>
      )}

      {results}
    </ScrollView>
  ) : (
    <View className="relative top-36">
      <Text className="text-center text-3xl font-bold">No Matching Found</Text>
    </View>
  );

  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://192.168.100.180:5000/api/restaurant"
        );

        setRestaurants(response?.data);
        setSearchResults(response?.data);
        setIsLoading(false)
      } catch (error) {
        console.log("err", error.response);
      }
    };
    getAllRestaurants();
  }, []);

  if (isLoading)
    return (
      <View className="relative top-96">
        <ActivityIndicator size={40} />
      </View>
    );

  return (
    <View className="mt-10 mb-40">
      <View className=" bg-white">
        <Header />
        <SearchBox restaurants={restaurants} setSearchResults={setSearchResults}/>
        {content}
      </View>
    </View>
  );
};

export default HomeScreen;
