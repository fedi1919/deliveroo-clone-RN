import { View, TextInput } from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const SearchBox = () => {
  return (
    <View className="mx-4 flex-row items-center space-x-2 pb-2">
      <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
        <MagnifyingGlassIcon color="#00CCBB" />
        <TextInput
          placeholder="Restaurants and Cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsHorizontalIcon color="#00CCBB" />
    </View>
  );
};

export default SearchBox;
