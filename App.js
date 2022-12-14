import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Photos from "./components/Photos";
import PhotoInfo from "./components/PhotoInfo";
import StartScreen from "./components/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen}></Stack.Screen>
        <Stack.Screen name="Photo" component={Photos}></Stack.Screen>
        <Stack.Screen name="PhotoInfo" component={PhotoInfo}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
