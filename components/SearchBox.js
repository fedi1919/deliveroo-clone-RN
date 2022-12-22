import React from "react";
import { View, TextInput } from "react-native";
import {
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";

const SearchBox = ({restaurants, setSearchResults}) => {
  const searchHandler = () => {}

  const searchChangeHandler = (text) => {
    if (!text) return setSearchResults(restaurants)

    const resultsArray = restaurants.filter((restaurant) => restaurant.title.includes(text))
    setSearchResults(resultsArray);
  }


  return (
    <View className="mx-4 flex-row items-center space-x-2 pb-2">
      <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
        <MagnifyingGlassIcon color="#00CCBB" onPress={searchHandler}/>
        <TextInput
          placeholder="Search for Restaurants"
          keyboardType="default"
          onChangeText={searchChangeHandler}
        />
      </View>
    </View>
  );
};

export default SearchBox;
