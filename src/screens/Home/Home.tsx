import { Text, View, Pressable } from "react-native";
import { IStackScreenProps } from "../../library/StackScreenProps";

import homeStyles from "./Home.styles";

const HomeScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation, route, name } = props;

  return (
    <View style={homeStyles.container}>
      <Pressable
        style={homeStyles.buttonContainer}
        onPress={() => navigation.navigate("teams")}
      >
        <Text style={homeStyles.button}>Play!</Text>
      </Pressable>
      <Pressable style={homeStyles.buttonContainer}>
        <Text style={homeStyles.button}>Fast Rules!</Text>
      </Pressable>
      <Pressable style={homeStyles.buttonContainer}>
        <Text style={homeStyles.button}>Browse Cardpacks</Text>
      </Pressable>
      <Pressable style={homeStyles.buttonContainer}>
        <Text style={homeStyles.button}>Settings</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
