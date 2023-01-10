import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import { LogBox } from "react-native";
import HomeScreen from "./screen/home";
import AppLoading from "expo-app-loading";
import Navigation from "./navigation";
export default function App() {
  const customFonts = {
    interBold: require("./assets/fonts/Inter-Bold.ttf"),
    interMedium: require("./assets/fonts/Inter-Medium.ttf"),
    interRegular: require("./assets/fonts/Inter-Regular.ttf"),
    interSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  };

  LogBox.ignoreLogs(["Warning: ..."]);

  const [isLoaded] = useFonts(customFonts);

  console.disableYellowBox = true;
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 20 : 10,
  },
});
