import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/df/ca/14/dfca14e455fba51b84266b8af1e1f5c8.jpg",
        }}
        className="h-full relative"
      />
      <View className="absolute top-40 left-[10%] w-full">
        <Text className="text-white text-left  font-bold text-3xl">LOGIN</Text>
        <TextInput
          className="bg-gray-500 w-[80%] p-3 rounded-full flex-1 my-4"
          placeholder="Email"
          keyboardType={"email-address"}
        />
        <TextInput
          className="bg-gray-500 w-[80%] p-3 rounded-full flex-1 my-4"
          placeholder="Password"
          secureTextEntry={true}
        />
        
          <TouchableOpacity className="bg-teal-500 rounded-full py-2 w-[50%] ml-16 my-4">
            <Text className="text-center font-bold text-xl text-white">
              Login
            </Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default LoginScreen;
