import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";

import cardpackStyles from "./cardpackSelect.styles";

interface Props {
  navigation: any;
}

const TempCardpacks = [
  "Starting",
  "history",
  "Marvel",
  "Actors",
  "Theatre",
  "Sports",
];

const CardpackSelectScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const [cardCount, setCardCount] = useState(37);

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
          {TempCardpacks.map((cardpack) => (
            <View style={cardpackStyles.cardpack} key={cardpack}>
              <Image source={"/"} style={cardpackStyles.cardpackImage} />
              <View style={cardpackStyles.cardpackTitleContainer}>
                <Text style={cardpackStyles.cardpackTitle}>{cardpack}</Text>
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
