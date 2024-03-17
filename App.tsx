import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import InstagramScreen from "./screens/InstagramScreen";

export default function App() {
  return (
    <View className="bg-back w-full h-full">
      <StatusBar style="light" />
      <InstagramScreen />
    </View>
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
