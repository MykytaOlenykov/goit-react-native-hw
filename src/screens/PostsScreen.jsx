import { Text, View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { UserInfo } from "../components/UserInfo";
import { PostCard } from "../components/PostCard";
import img_1 from "../assets/images/testPostImg1.jpg";
import img_2 from "../assets/images/testPostImg2.jpg";

const data = [
  {
    id: "1",
    imgUrl: img_1,
    name: "Name_1",
    place: "Place_1",
  },
  {
    id: "2",
    imgUrl: img_2,
    name: "Name_2",
    place: "Place_2",
  },
  {
    id: "3",
    imgUrl: img_1,
    name: "Name_3",
    place: "Place_3",
  },
  {
    id: "4",
    imgUrl: img_2,
    name: "Name_4",
    place: "Place_4",
  },
];

export const PostsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <UserInfo />

      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <Text>
            <PostCard data={item} />
          </Text>
        )}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    height: "100%",
    backgroundColor: "#FFF",
  },
  list: {
    display: "flex",
    paddingVertical: 32,
  },
});
