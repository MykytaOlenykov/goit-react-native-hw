import { ImageBackground, StyleSheet } from "react-native";
import imageBg from "../assets/images/authBg.jpg";

export const BgImage = ({ children }) => (
  <ImageBackground source={imageBg} style={styles.imageBg}>
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
