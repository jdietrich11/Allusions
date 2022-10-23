import React from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Header from "../../helper/header/header";
import { IStackScreenProps } from "../../library/StackScreenProps";

import settingsStyles from "./settings.styles";

const SettingsScreen: React.FC<IStackScreenProps> = (props) => {
  const { name, navigation, route } = props;
  return (
    <View>
      <Header name={name} navigation={navigation} route={route} />
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <Pressable>
        <Text>Login</Text>
      </Pressable>
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
