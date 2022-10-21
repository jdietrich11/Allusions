import React, { useState, useEffect, useContext } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import apiCall from "../../helper/APi/api";
import { Cardpack } from "../../helper/interfaces/interfaces";

import cardpackStyles from "./cardpackSelect.styles";

const CardpackSelectScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { navigation } = props;
  const [cardpacks, setCardpacks] = useState<Cardpack[]>([]);
  const [playtime, setPlaytime] = useState(45);

  useEffect(() => {
    const getPacks = async (data: string) => {
      let cardpack = await apiCall(data);
      const { purchased_cardpack } = await cardpack.data;
      return purchased_cardpack;
    };
    const getOwnedPacks = async (purchasedCardpacks: any[]) => {
      let ids: number[] = [];
      let packs: Cardpack[] = [];
      for (let i = 0; i < purchasedCardpacks.length; i++) {
        ids = [...ids, purchasedCardpacks[i].cardpack_id];
      }
      for (let j = 0; j < ids.length; j++) {
        let res = await apiCall(cardpackQuery(ids[j]));
        let { cardpack_list } = await res.data;
        packs = [...packs, cardpack_list[0]];
      }
      setCardpacks(packs);
    };

    let cardpackQuery = (id: number) => {
      return `cardpack_list(where: {id: {_eq: ${id}}}) { id cardpack_name image_url }`;
    };
    let ownedPacksQuery =
      "purchased_cardpack(where: {user_id: {_eq: 1}}) { cardpack_id }";

    getPacks(ownedPacksQuery).then((res) => getOwnedPacks(res));
  }, []);

  useEffect(() => {
    let perTurn = Math.floor(
      ((state.team1.length + state.team2.length) * state.cardCount) / 12
    );
    setPlaytime(perTurn);
    dispatch({
      type: "SET_TURN_TIME",
      payload: Math.floor(
        (state.cardCount / (state.team1.length + state.team2.length)) * 12
      ),
    });
  }, [state.cardCount]);

  const changeSelected = (id: any) => {
    if (state.selectedCardpacks.includes(id)) {
      dispatch({
        type: "REMOVE_CARDPACK",
        payload: id,
      });
    }
    if (!state.selectedCardpacks.includes(id)) {
      dispatch({
        type: "SELECT_CARDPACK",
        payload: id,
      });
    }
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
              onPress={() => dispatch({ type: "DECREASE_CARD_COUNT" })}
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
              onPress={() => dispatch({ type: "INCREASE_CARD_COUNT" })}
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
          <Text>{`~ ${playtime} Minutes`}</Text>
        </View>
      </View>
      <View style={cardpackStyles.secondsPerTurnContainer}>
        <View style={cardpackStyles.secondsCounter}>
          <Text style={cardpackStyles.textInput}>{state.turnTime}</Text>
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
