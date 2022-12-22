import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { signin } from "../api/user";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

const LoginScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const error = useSelector((state) => state?.user?.error);
  const emailError = error?.includes("Email");
  const passwordError = error?.includes("Password");

  const userLogin = () => {
    signin(dispatch, { email, inputPassword });
  };


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
            <Text className=" text-gray-500 text-md font-bold">Email</Text>
            {emailError && (
              <Text className="text-red-600 font-bold my-2">{error}</Text>
            )}
            <TextInput
              className={`border-b-2 border-gray-400 p-4 ${
                emailError && "bg-red-300 border-red-300 rounded-md border"
              }`}
              placeholder="Enter Your Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View className="mt-8 space-y-2">
            <Text className=" text-gray-500 text-md font-bold">Password</Text>
            {passwordError && (
              <Text className="text-red-600 font-bold my-2">{error}</Text>
            )}
            <View
              className={`flex-row items-center border-b-2 border-gray-400 ${
                passwordError && "bg-red-300 border-red-300 rounded-md border"
              } `}
            >
              <TextInput
                className=" p-4 flex-1"
                placeholder="Enter Your Password"
                secureTextEntry={showPassword ? false : true}
                value={inputPassword}
                onChangeText={(text) => setInputPassword(text)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeSlashIcon color="#00CCBB" className="mr-2" />
                ) : (
                  <EyeIcon color="#00CCBB" className="mr-2" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={userLogin}
            className="bg-[#00CCBB] rounded-full p-4 mt-12 mx-8"
          >
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
