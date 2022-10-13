import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";

import apiCall from "../../helper/APi/api";

import cardpackStyles from "./cardpackSelect.styles";

interface Props {
  navigation: any;
}

interface Cardpack {
  id: number;
  cardpack_name: string;
  imageURL: string;
}

const CardpackSelectScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const [cardCount, setCardCount] = useState(37);
  const [cardpacks, setCardpacks] = useState<Cardpack[]>([]);

  useEffect(() => {
    const getPacks = async (data: string) => {
      let cardpack = await apiCall(data);
      const { cardpack_list } = await cardpack.data;
      setCardpacks(cardpack_list);
    };

    let cardpackQuery = "cardpack_list { id cardpack_name }";

    getPacks(cardpackQuery);
  }, []);

  return (
    <View style={cardpackStyles.container}>
      <View style={cardpackStyles.header}>
        <Pressable
          style={cardpackStyles.backBtn}
          onPress={() => navigation.navigate("teamsPage")}
        >
          <Text style={cardpackStyles.backBtnText}>&larr;</Text>
        </Pressable>
      </View>
      <View style={cardpackStyles.cardpackSelectContainer}>
        <View style={cardpackStyles.cardpackSelectTitleContainer}>
          <Text style={cardpackStyles.cardpackSelectTitleText}>
            SELECT YOUR CARDPACKS!
          </Text>
        </View>
        <View style={cardpackStyles.avaliableCardpacks}>
          {cardpacks.map((cardpack) => (
            <View style={cardpackStyles.cardpack} key={cardpack.id}>
              <Image
                source={`${cardpack.imageURL}`}
                style={cardpackStyles.cardpackImage}
              />
              <View style={cardpackStyles.cardpackTitleContainer}>
                <Text style={cardpackStyles.cardpackTitle}>
                  {cardpack.cardpack_name}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={cardpackStyles.gameLengthContainer}>
        <View style={cardpackStyles.cardCounterContainer}>
          <View style={cardpackStyles.cardCounter}>
            <Pressable
              style={cardpackStyles.cardAdjustmentCounter}
              onPress={() => setCardCount(cardCount - 1)}
            >
              <Text style={cardpackStyles.cardCounterText}>-</Text>
            </Pressable>
            <View style={cardpackStyles.cardCountBox}>
              <Text style={cardpackStyles.cardCount}>
                {cardCount + " cards"}
              </Text>
            </View>
            <Pressable
              style={cardpackStyles.cardAdjustmentCounter}
              onPress={() => setCardCount(cardCount + 1)}
            >
              <Text style={cardpackStyles.cardCounterText}>+</Text>
            </Pressable>
          </View>
          <View style={cardpackStyles.cardpackCounter}>
            <Text style={cardpackStyles.cardCounterTextFrom}>
              {"from 3 cardpacks"}
            </Text>
          </View>
        </View>
        <View style={cardpackStyles.playtimeContainer}>
          <Text>{"~ 40 Minutes"}</Text>
        </View>
      </View>
      <View style={cardpackStyles.secondsPerTurnContainer}>
        <View style={cardpackStyles.secondsCounter}>
          <TextInput style={cardpackStyles.textInput} value="160" />
          <Text style={cardpackStyles.secondTurnsText}>second turns</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("instruction")}
          style={cardpackStyles.nextPageButton}
        >
          <Text style={cardpackStyles.nextPageButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardpackSelectScreen;
