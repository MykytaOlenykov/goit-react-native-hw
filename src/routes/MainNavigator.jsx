import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigator } from "./BottomNavigator";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { LoginScreen } from "../screens/LoginScreen";

const MainStack = createStackNavigator();

export const MainNavigator = () => (
  <MainStack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <MainStack.Screen name="Registration" component={RegistrationScreen} />
    <MainStack.Screen name="Login" component={LoginScreen} />
    <MainStack.Screen name="Home" component={BottomNavigator} />
  </MainStack.Navigator>
);
