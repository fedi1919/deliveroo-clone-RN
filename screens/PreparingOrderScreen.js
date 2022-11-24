import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    //Mocking the accepting from the restaurant
    useEffect(() => {
    setTimeout(() => {navigation.navigate("Delivery")}, 4000)
    }, [])
  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/ontheway.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96 bg-[#00CCBB]"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your Order.
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </View>
  );
};

export default PreparingOrderScreen;
