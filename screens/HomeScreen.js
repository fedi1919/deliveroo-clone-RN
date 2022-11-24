import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, ScrollView, ActivityIndicator } from "react-native";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import RestaurantCard from "../components/RestaurantCard";

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://192.168.100.180:5000/api/restaurant"
        );

        setRestaurants(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    };
    getAllRestaurants();
  }, []);

  return (
    <View className="mt-10 mb-40">
      <View className=" bg-white">
        <Header />
        <SearchBox />
        <ScrollView
          className="bg-gray-200"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Categories */}
          <Categories />
          {/* Featured Rows */}
          {restaurants?.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              id={restaurant._id}
              imgUrl={restaurant.imgUrl}
              title={restaurant.title}
              rating={restaurant.rating}
              genre={restaurant.genre}
              address={restaurant.address}
              shortDescription={restaurant.shortDescription}
              dishes={[]}
              long={20}
              lat={40}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
