import React from "react";
import { View, Text, Image } from "react-native";

import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image
        className="h-14 w-14 rounded-full"
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5oJE1SXBEuhb75i1oLWgXbYISmggjMTmlkwgBGLP1w&s",
        }}
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">User Name</Text>
        <Text className="font-bold tet-xl">
          Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>
      <UserIcon size={35} color="#00CCBB" />
    </View>
  );
};

export default Header;
