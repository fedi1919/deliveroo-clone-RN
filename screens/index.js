import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RestaurantScreen from "./RestaurantScreen";
import RegisterScreen from "./RegisterScreen";
import DeliveryScreen from "./DeliveryScreen";
import PreparingOrderScreen from "./PreparingOrderScreen";
import BasketScreen from "./BasketScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Screens */}
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} />
            <Stack.Screen
              name="PreparingOrderScreen"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal" }}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
