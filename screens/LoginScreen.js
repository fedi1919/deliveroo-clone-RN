import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="bg-[#00CCBB] flex-1 relative">
      <View className="absolute top-20 justify-center items-center w-full">
        <Text className="text-3xl text-white font-extrabold tracking-widest">
          Fast Delivery
        </Text>
        <Image source={require("../assets/livri.gif")} className="h-36 w-36" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white absolute bottom-0 h-[65%] w-full shadow-2xl shadow-black rounded-t-[80px]"
      >
        <View className="m-10">
          <Text className=" text-[#00CCBB] text-2xl font-semibold">LOGIN</Text>
          <View className="flex-row space-x-2 mt-2">
            <Text className=" text-gray-500 text-sm">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-[#00CCBB] font-medium">Register Now</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-16 space-y-2">
            <Text className=" text-gray-500 text-md">Email</Text>
            <TextInput
              className="border-b-2 border-gray-400 py-4"
              placeholder="Enter Your Email"
              keyboardType="email-address"
            />
          </View>
          <View className="mt-8 space-y-2">
            <Text className=" text-gray-500 text-md">Password</Text>
            <View className="flex-row items-center  border-b-2 border-gray-400">
              <TextInput
                className=" py-4 flex-1"
                placeholder="Enter Your Password"
                secureTextEntry={showPassword ? false : true}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeSlashIcon color="#00CCBB" />
                ) : (
                  <EyeIcon color="#00CCBB" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity className="bg-[#00CCBB] rounded-full p-4 mt-12 mx-8">
            <Text className="text-center text-white text-xl font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
