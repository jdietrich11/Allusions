import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { Cardpack } from "../../helper/interfaces/interfaces";

import cardpackStyles from "./cardpackSelect.styles";

const CardpackSelectScreen: React.FC<IStackScreenProps> = (props) => {
  const {
    state,
    removeCardpack,
    selectCardpack,
    setTurnTime,
    decreaseCardCount,
    increaseCardCount,
  } = useContext(GlobalContext);
  const { navigation } = props;
  const [cardpacks, setCardpacks] = useState<Cardpack[]>([]);

  useEffect(() => {
    setCardpacks(state.cardpacks);
  }, []);

  const changeSelected = (id: any) => {
    if (state.selectedCardpacks.includes(id)) {
      removeCardpack(id);
    }
    if (!state.selectedCardpacks.includes(id)) {
      selectCardpack(id);
    }
  };

  const handleTurnTimeChange = (text: string) => {
    if (+text < 0) {
      alert("Number must be positive");
      return;
    }
    if (text.includes("-") || text.includes(",")) {
      alert("Not a number");
      return;
    }
    setTurnTime(+text);
  };

  return (
    <View style={cardpackStyles.container}>
      <View style={cardpackStyles.header}>
        <Pressable
          style={cardpackStyles.backBtn}
          onPress={() => navigation.navigate("teams")}
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
          <ScrollView
            style={cardpackStyles.scrollView}
            contentContainerStyle={cardpackStyles.scrollViewContent}
          >
            {cardpacks.map((cardpack: Cardpack) => (
              <Pressable
                style={
                  !state.selectedCardpacks.includes(cardpack.id)
                    ? cardpackStyles.cardpack
                    : cardpackStyles.selectedCardpack
                }
                key={cardpack.id}
                onPress={() => changeSelected(cardpack.id)}
              >
                <Image
                  source={{ uri: cardpack.image_url }}
                  style={
                    !state.selectedCardpacks.includes(cardpack.id)
                      ? cardpackStyles.cardpackImage
                      : cardpackStyles.cardpackImageSelected
                  }
                />
                <View
                  style={
                    !state.selectedCardpacks.includes(cardpack.id)
                      ? cardpackStyles.cardpackTitleContainer
                      : cardpackStyles.selectedCardpackTitleContainer
                  }
                >
                  <Text
                    adjustsFontSizeToFit={true}
                    style={cardpackStyles.cardpackTitle}
                  >
                    {cardpack.cardpack_name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={cardpackStyles.gameLengthContainer}>
        <View style={cardpackStyles.cardCounterContainer}>
          <View style={cardpackStyles.cardCounter}>
            <Pressable
              style={cardpackStyles.cardAdjustmentCounter}
              onPress={() => decreaseCardCount()}
            >
              <Text style={cardpackStyles.cardCounterText}>-</Text>
            </Pressable>
            <View style={cardpackStyles.cardCountBox}>
              <Text style={cardpackStyles.cardCount}>
                {state.cardCount + " cards"}
              </Text>
            </View>
            <Pressable
              style={cardpackStyles.cardAdjustmentCounter}
              onPress={() => increaseCardCount()}
            >
              <Text style={cardpackStyles.cardCounterText}>+</Text>
            </Pressable>
          </View>
          <View style={cardpackStyles.cardpackCounter}>
            <Text style={cardpackStyles.cardCounterTextFrom}>
              {`from ${state.selectedCardpacks.length} cardpacks`}
            </Text>
          </View>
        </View>
        <View style={cardpackStyles.playtimeContainer}>
          <Text>{`~ ${state.cardCount} Minutes`}</Text>
        </View>
      </View>
      <View style={cardpackStyles.secondsPerTurnContainer}>
        <View style={cardpackStyles.secondsCounter}>
          <TextInput
            keyboardType="numeric"
            style={cardpackStyles.textInput}
            onChangeText={(text) => handleTurnTimeChange(text)}
            value={state.turnTime.toString()}
          />
          <Text style={cardpackStyles.secondTurnsText}>second turns</Text>
        </View>
        <Pressable
          onPress={() =>
            state.selectedCardpacks.length >= 1
              ? navigation.navigate("instruction")
              : alert("please select desired cardpacks first")
          }
          style={cardpackStyles.nextPageButton}
        >
          <Text style={cardpackStyles.nextPageButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardpackSelectScreen;
