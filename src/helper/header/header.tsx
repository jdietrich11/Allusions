import React from "react";
import { View, Pressable, Text } from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";

import headerStyles from "./header.styles";

const Header: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  return (
    <View style={headerStyles.headerContainer}>
      <Pressable
        style={headerStyles.homeBtnContainer}
        onPress={() => navigation.navigate("home")}
      >
        <Text style={headerStyles.homeText}>&larr;</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("rules")}
        style={headerStyles.howToContainer}
      >
        <Text style={headerStyles.howToText}>How to play</Text>
        <View style={headerStyles.howToButton}>
          <Text style={headerStyles.howToButtonText}>?</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
