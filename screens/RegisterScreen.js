import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { signup } from "../api/user";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const error = useSelector((state) => state?.user?.error);

  const userRegister = () => {
    signup(dispatch, { fullName, email, inputPassword });
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
          <Text className=" text-[#00CCBB] text-2xl font-semibold">
            REGISTER
          </Text>
          <View className="flex-row space-x-2 mt-2">
            <Text className=" text-gray-500 text-sm">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-[#00CCBB] font-medium">Login Now</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-4">
            <Text className=" text-gray-500 text-md font-bold">Full Name</Text>
            <TextInput
              className="border-b-2 border-gray-400 p-4"
              placeholder="Enter your full name"
              keyboardType="default"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
          </View>

          <View className="mt-4">
            <Text className=" text-gray-500 text-md font-bold">Email</Text>
            {error && <Text className="text-red-600 font-bold my-2">{error}</Text>}
            <TextInput
              className={`border-b-2 border-gray-400 p-4 ${
                error && "bg-red-300 border-red-300 rounded-md border"
              }`}
              placeholder="Enter Your Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View className="mt-8 space-y-2">
            <Text className=" text-gray-500 text-md font-bold">Password</Text>
            <View className="flex-row items-center  border-b-2 border-gray-400">
              <TextInput
                className=" p-4 flex-1"
                placeholder="Enter Your Password"
                secureTextEntry={showPassword ? false : true}
                value={inputPassword}
                onChangeText={(text) => setInputPassword(text)}
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
          <TouchableOpacity
            onPress={userRegister}
            className="bg-[#00CCBB] rounded-full p-4 mt-12 mx-8"
          >
            <Text className="text-center text-white text-xl font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
