import React, { useEffect, useContext } from "react";
import { Text, View, Pressable } from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import apiCall from "../../helper/APi/api";
import { GlobalContext } from "../../context/globalContext";

import homeStyles from "./Home.styles";

const HomeScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getPacks = async (data: string) => {
      let cardpack = await apiCall(data);
      const { cardpack_list } = await cardpack.data;
      dispatch({
        type: "SET_CARDPACKS",
        payload: cardpack_list,
      });
      return cardpack_list;
    };

    let cardpackQuery = `cardpack_list { id cardpack_name image_url price }`;

    getPacks(cardpackQuery);
  }, []);

  return (
    <View style={homeStyles.container}>
      <Pressable
        style={homeStyles.buttonContainer}
        onPress={() => navigation.navigate("teams")}
      >
        <Text style={homeStyles.button}>Play!</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("rules")}
        style={homeStyles.buttonContainer}
      >
        <Text style={homeStyles.button}>How to play!</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("browse")}
        style={homeStyles.buttonContainer}
      >
        <Text style={homeStyles.button}>Browse Cardpacks</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("settings")}
        style={homeStyles.buttonContainer}
      >
        <Text style={homeStyles.button}>Settings</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
