import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useRef, useEffect } from "react";

const StartScreen = ({ navigation }) => {
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ flex: 1 }}
      >
        <View style={{ alignItems: "center" }}>
          <FadeInView>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Welcome to furias
            </Text>
          </FadeInView>

          <Text>A premium online store for women</Text>
          <Text>and their stylish choice</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Photo");
            }}
            style={{
              backgroundColor: "black",
              marginTop: 20,
              height: 30,
              width: 150,
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white", padding: 5 }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
