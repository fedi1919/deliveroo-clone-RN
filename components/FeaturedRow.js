import React from "react";
import { View, Text, ScrollView } from "react-native";

import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({
  id,
  title,
  description,
  featuredCategory,
  restaurants,
}) => {
  return (
    <View>
      <View className="flex-row items-center mt-4 justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        {restaurants?.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            id="1"
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
        {/* <RestaurantCard
          id="1"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvw3-ikg1WyDCqu7KMrmouoUPwA8mXTjbQQ&usqp=CAU"
          title="Burger King"
          rating={4.5}
          genre="Fast Food"
          address="Sahloul Sousse"
          shortDescription="This a dummy Description"
          dishes={[]}
          long={20}
          lat={40}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvw3-ikg1WyDCqu7KMrmouoUPwA8mXTjbQQ&usqp=CAU"
          title="Burger King"
          rating={4.5}
          genre="Fast Food"
          address="Sahloul Sousse"
          shortDescription="This a dummy Description"
          dishes={[]}
          long={20}
          lat={40}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvw3-ikg1WyDCqu7KMrmouoUPwA8mXTjbQQ&usqp=CAU"
          title="Burger King"
          rating={4.5}
          genre="Fast Food"
          address="Sahloul Sousse"
          shortDescription="This a dummy Description"
          dishes={[]}
          long={20}
          lat={40}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvw3-ikg1WyDCqu7KMrmouoUPwA8mXTjbQQ&usqp=CAU"
          title="Burger King"
          rating={4.5}
          genre="Fast Food"
          address="Sahloul Sousse"
          shortDescription="This a dummy Description"
          dishes={[]}
          long={20}
          lat={40}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
