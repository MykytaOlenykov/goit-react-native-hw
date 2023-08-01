import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import testUserAvatar from "../assets/images/testUserAvatar.jpg";
import testBigNarutoAvatar from "../assets//images/614743.png";

export const UserAvatarForm = () => {
  const [isShowTestUserAvatar, setIsShowTestUserAvatar] = useState(false);
  const btnStyle = isShowTestUserAvatar
    ? [styles.button, styles.button_when_show_avatar]
    : [styles.button];
  const btnLineXStyle = isShowTestUserAvatar
    ? [styles.buttonLineX, styles.button_line_when_show_avatar]
    : [styles.buttonLineX];
  const btnLineYStyle = isShowTestUserAvatar
    ? [styles.buttonLineY, styles.button_line_when_show_avatar]
    : [styles.buttonLineY];

  const handleToggleShowAvatar = () => {
    setIsShowTestUserAvatar((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageThumb}>
        {isShowTestUserAvatar && (
          <Image source={testBigNarutoAvatar} style={styles.image} />
        )}
      </View>

      <TouchableOpacity style={btnStyle} onPress={handleToggleShowAvatar}>
        <View style={btnLineXStyle} />
        <View style={btnLineYStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageThumb: {
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  button: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
  },
  button_when_show_avatar: {
    backgroundColor: "#FFF",
    borderColor: "#E8E8E8",
    transform: [{ rotate: "45deg" }],
  },
  buttonLineX: {
    position: "absolute",
    width: 13,
    height: 1,
    backgroundColor: "#FF6C00",
  },
  buttonLineY: {
    position: "absolute",
    width: 1,
    height: 13,
    backgroundColor: "#FF6C00",
  },
  button_line_when_show_avatar: {
    backgroundColor: "#BDBDBD",
  },
});
