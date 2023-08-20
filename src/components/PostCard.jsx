import { View, Image, StyleSheet } from "react-native";

export const PostCard = ({ data }) => {
  const { id, imgUrl, name, place } = data;

  return (
    <View style={styles.container}>
      <View style={styles.imageThumb}>
        <Image style={styles.image} source={imgUrl} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageThumb: {
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
