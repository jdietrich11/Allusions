import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./src/config/routes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {routes.map((r, i) => (
          <Stack.Screen key={i} name={r.name} component={r.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
