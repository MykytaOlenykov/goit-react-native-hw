import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { PostsScreen } from "../screens/PostsScreen";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const CreatePostsTabScreen = () => (
  <Tabs.Screen
    name="CreatePosts"
    component={CreatePostsScreen}
    options={({ navigation }) => ({
      title: "Створити публікацію",
      tabBarStyle: { display: "none" },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
      ),
      tabBarIcon: () => (
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("CreatePosts")}
        >
          <AntDesign name="plus" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      ),
    })}
  />
);

export const BottomNavigator = () => (
  <Tabs.Navigator
    initialRouteName="Posts"
    screenOptions={{
      headerTitleAlign: "center",
      headerRightContainerStyle: { paddingRight: 16 },
      headerLeftContainerStyle: { paddingLeft: 16 },
      headerTitleStyle: styles.title,
      headerStyle: styles.header,
      tabBarShowLabel: false,
      tabBarStyle: styles.bottomNavigator,
    }}
  >
    <Tabs.Screen
      name="Posts"
      component={PostsScreen}
      options={({ navigation }) => ({
        title: "Публікації",
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        ),
        tabBarIcon: () => (
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Posts")}
          >
            <AntDesign
              name="appstore-o"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Tabs.Screen
      name="CreatePosts"
      component={CreatePostsScreen}
      options={({ navigation }) => ({
        title: "Створити публікацію",
        tabBarStyle: { display: "none" },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          </TouchableOpacity>
        ),
        tabBarIcon: () => (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate("CreatePosts")}
          >
            <AntDesign name="plus" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        ),
      })}
    />
    <Tabs.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerShown: false,
        tabBarIcon: () => (
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
          </TouchableOpacity>
        ),
      })}
    />
  </Tabs.Navigator>
);

const styles = StyleSheet.create({
  header: {
    height: 88,
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 0, 0, 0.30)",
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  bottomNavigator: {
    paddingTop: 9,
    paddingBottom: 34,
    paddingHorizontal: 40,
    height: 83,
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 0, 0, 0.30)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto_Medium",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
  primaryButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  secondaryButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});
