import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { CreatePostsInput } from "../components/CreatePostsInput";
import { FormButton } from "../components/FormButton";
import testPostImg from "../assets/images/testPostImg1.jpg";

export const CreatePostsScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [isShowTestImg, setIsShowTestImg] = useState(false);

  const isDisabledButton = !(name && place && isShowTestImg);

  const handleToggleShowImg = () => {
    setIsShowTestImg((prev) => !prev);
  };

  const handleLeaveScreen = () => {
    setName("");
    setPlace("");
    setIsShowTestImg(false);
    navigation.navigate("Posts");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.primaryContainer}>
        <KeyboardAvoidingView
          style={styles.secondaryContainer}
          behavior={Platform.OS == "ios" ? "padding" : undefined}
        >
          <View style={styles.form}>
            <View style={styles.imageThumb}>
              {isShowTestImg && (
                <Image style={styles.image} source={testPostImg} />
              )}
              <TouchableOpacity
                style={
                  isShowTestImg
                    ? [styles.button, styles.buttonWhenShowImg]
                    : [styles.button]
                }
                onPress={handleToggleShowImg}
              >
                <MaterialIcons
                  name="camera-alt"
                  size={24}
                  color={isShowTestImg ? "#FFF" : "#BDBDBD"}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>
              {isShowTestImg ? "Редагувати фото" : "Завантажте фото"}
            </Text>

            <View style={styles.inputContainer}>
              <CreatePostsInput
                placeholder="Назва..."
                value={name}
                onChangeValue={setName}
                isPrimaryInputText
              />
            </View>

            <View>
              <CreatePostsInput
                placeholder="Місцевість..."
                value={place}
                onChangeValue={setPlace}
                isShowIcon
              />
            </View>

            <View style={styles.buttonContainer}>
              <FormButton isDisabled={isDisabledButton} text="Опубліковати" />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleLeaveScreen}
            style={styles.clearButton}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  secondaryContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  imageThumb: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F6F6F6",
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
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 30,
  },
  buttonWhenShowImg: {
    backgroundColor: "rgba(255, 255, 255, 0.30)",
  },
  text: {
    marginTop: 8,
    marginBottom: 32,
    color: "#BDBDBD",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  inputContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 32,
  },
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
