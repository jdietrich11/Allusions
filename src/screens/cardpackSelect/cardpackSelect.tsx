import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

import apiCall from "../../helper/APi/api";

import cardpackStyles from "./cardpackSelect.styles";

interface Props {
  navigation: any;
}

interface Cardpack {
  id: any;
  cardpack_name: string;
  image_url: string;
}
interface SelectedCardpacks {
  id: number;
}

const CardpackSelectScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const [cardCount, setCardCount] = useState(60);
  const [cardpacks, setCardpacks] = useState<Cardpack[]>([]);
  const [selectedCardpacks, setSelectedCardpacks] = useState<
    SelectedCardpacks[]
  >([]);

  useEffect(() => {
    const getPacks = async (data: string) => {
      let cardpack = await apiCall(data);
      const { cardpack_list } = await cardpack.data;
      setCardpacks(cardpack_list);
    };

    let cardpackQuery = "cardpack_list { id cardpack_name image_url }";

    getPacks(cardpackQuery);
  }, []);

  const changeSelected = (id: any) => {
    if (selectedCardpacks.includes(id)) {
      setSelectedCardpacks(
        selectedCardpacks.filter((selectedId) => selectedId !== id)
      );
      console.log("found");
    }
    if (!selectedCardpacks.includes(id)) {
      setSelectedCardpacks([...selectedCardpacks, id]);
      console.log("not found");
    }
    console.log(id);
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
            {cardpacks.map((cardpack) => (
              <Pressable
                style={
                  !selectedCardpacks.includes(cardpack.id)
                    ? cardpackStyles.cardpack
                    : cardpackStyles.selectedCardpack
                }
                key={cardpack.id}
                onPress={() => changeSelected(cardpack.id)}
              >
                <Image
                  source={{ uri: cardpack.image_url }}
                  style={
                    !selectedCardpacks.includes(cardpack.id)
                      ? cardpackStyles.cardpackImage
                      : cardpackStyles.cardpackImageSelected
                  }
                />
                <View
                  style={
                    !selectedCardpacks.includes(cardpack.id)
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
