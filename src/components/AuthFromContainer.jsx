import { ImageBackground, StyleSheet, View } from "react-native";
import imageBg from "../assets/images/authBg.jpg";

export const AuthFromContainer = ({ children }) => (
  <View style={styles.authContainer}>
    <ImageBackground source={imageBg} style={styles.imageBg}>
      {children}
    </ImageBackground>
  </View>
);
const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
