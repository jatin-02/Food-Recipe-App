import React from "react";
import { View, Text, StatusBar, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "../components/CustomButton";
import { COLORS, SIZES, images, FONTS } from "../constants";

const Login = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          source={images.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: "#fff",
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cooking a delicios food easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        {/* DESCRIPTION */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>

        {/* BUTTONS */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <CustomButton
            onPress={() => {
              navigation.replace("Home");
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            buttonText="Login"
            buttonContainerStyle={{ paddingVertical: 18, borderRadius: 20 }}
          />
          <CustomButton
            onPress={() => {
              navigation.replace("Home");
            }}
            colors={[]}
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkGreen,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />

      {renderHeader()}
      {renderDetail()}
    </View>
  );
};

export default Login;
