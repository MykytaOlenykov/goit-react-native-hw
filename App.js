import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { MainNavigator } from "./src/routes/MainNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_Regular: require("./src/assets/fonts/roboto-v30-cyrillic_latin-regular.ttf"),
    Roboto_Medium: require("./src/assets/fonts/roboto-v30-cyrillic_latin-500.ttf"),
    Roboto_Bold: require("./src/assets/fonts/roboto-v30-cyrillic_latin-700.ttf"),
    Inter: require("./src/assets/fonts/inter-v12-cyrillic_latin-500.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.root}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
