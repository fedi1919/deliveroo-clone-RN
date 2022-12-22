import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { UserIcon } from "react-native-heroicons/outline";
import { logout, selectUser } from "../redux/features/userSlice";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <View className="flex-row mt-4 pb-3 items-center mx-4 space-x-2">
      <View className="flex-1 space-y-2">
        <Text className="font-bold tet-xl">{user?.fullName}</Text>
        <Text className="font-bold text-gray-400 text-xs">{user?.email}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text className="text-teal-500 text-xl font-medium">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
