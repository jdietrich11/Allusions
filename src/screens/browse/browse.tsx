import React from "react";
import { View, Text, Pressable } from "react-native";

import Header from "../../helper/header/header";
import { IStackScreenProps } from "../../library/StackScreenProps";

import browseStyles from "./browse.styles";

const BrowseScreen: React.FC<IStackScreenProps> = (props) => {
  const { name, navigation, route } = props;
  return (
    <View style={browseStyles.pageContainer}>
      <Header name={name} navigation={navigation} route={route} />
      <View style={browseStyles.container}>
        <View>
          <Text>Cardpacks</Text>
        </View>
        <View>
          <Text>Checkout</Text>
          <Text>Total: </Text>
          <Pressable>
            <Text>BUY!</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default BrowseScreen;

// todo
/*
  git all packs
  checkout function (stripe)
*/
