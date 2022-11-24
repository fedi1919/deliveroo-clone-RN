import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  const user = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Screens */}
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
