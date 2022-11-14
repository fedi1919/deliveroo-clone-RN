import React, { useLayoutEffect } from "react";
import { View, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  //As soon the screen mounts
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="my-10 bg-white">
      {/*Header */}
      <Header />
      {/* Search Box */}
      <SearchBox />
      {/* Scroll View */}
      <ScrollView
        className="bg-blue-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id="test"
          title="Near You"
          description="Check the best Restaurants near you!!"
          featuredCategory="offers"
        />
        <FeaturedRow
          id="test"
          title="Tasty Discounts"
          description="Everyone been enjoying these juicy discounts"
          featuredCategory="discounts"
        />
        <FeaturedRow
          id="test"
          title="Featured"
          description="Paid Placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
