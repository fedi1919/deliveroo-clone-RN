import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

import * as Progress from "react-native-progress";
import MapView, {Marker} from "react-native-maps";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/outline";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <View className="mt-10 z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="white" size={50} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help </Text>
        </View>
      </View>
      <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold">15-25 min</Text>
          </View>
          <Image
            source={{
              uri: "https://cdn.dribbble.com/users/125186/screenshots/5368944/scooter-courier.gif",
            }}
            className="h-20 w-24"
          />
        </View>
        <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
        <Text className="mt-3 text-gray-500">
          Your Order at {restaurant.title} is being prepared
        </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: 35.8460572,
          longitude: 10.6050537,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        className="z-0 mt-10 flex-1"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 35.8460572,
            longitude: 10.6050537,
          }}
          title={restaurant.title}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
