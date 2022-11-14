import { Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Categorie Card */}
      <CategoryCard
        imgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039"
        title="Plan B"
      />
      <CategoryCard
        imgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039"
        title="Taxi Pizza"
      />
      <CategoryCard
        imgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039"
        title="Taxi Pizza"
      />
      <CategoryCard
        imgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039"
        title="Taxi Pizza"
      />
      <CategoryCard
        imgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039"
        title="Inferno"
      />
      <CategoryCard
        imgUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-video-ad-for-facebook-cover-design-template-34555606d4b6776707b7d030464a861b_screen.jpg?ts=1579265039"
        title="Jackson Pizza"
      />
    </ScrollView>
  );
};

export default Categories;
