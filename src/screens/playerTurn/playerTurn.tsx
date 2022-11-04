import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import {
  GestureDetector,
  Gesture,
  FlingGestureHandler,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";
import playerTurnStyles from "./playerTurn.styles";
import { Card } from "../../helper/interfaces/interfaces";

const PlayerTurnScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, drawCard } = useContext(GlobalContext);
  const { navigation } = props;
  const [timer, setTimer] = useState(state.turnTime);

  const isPressed = useSharedValue(false);
  const start = useSharedValue({ x: 0, y: 0 });
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 0.75 : 1) },
      ],
      backgroundColor: isPressed.value ? "yellow" : "blue",
    };
  });

  const resetLocation = () => {
    "worklet";
    offset.value = {
      x: 0,
      y: 0,
    };
  };

  const drawACard = () => {
    "worklet";
    let card: Card = state.deck.shift();
    drawCard(card);
  };

  const flingGestureDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onBegin((e) => {})
    .onEnd(() => {
      // add score to active user
      state.activePlayer.score =
        state.activePlayer.score +
        state.activeCard?.point_value * state.roundCount;
      // animate card to bottom
      offset.value = {
        x: 0,
        y: 700,
      };
      console.log("down end");
    })
    .onFinalize(() => {
      "worklet";
      // resetLocation();
      // draw new card
      drawACard();
      console.log("down finalize");
    });

  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onBegin((e) => {})
    .onEnd(() => {
      // add card to skip pile

      // animate card to left
      offset.value = {
        x: -100,
        y: 0,
      };
    })
    .onFinalize(() => {
      "worklet";
      // resetLocation();
      // draw new card
      drawACard();
      console.log("left");
    });

  // const tickTimer = () => {
  //   setTimeout(() => {
  //     if (timer > 0) {
  //       setTimer(timer - 1);
  //     }
  //     if (timer < 1) {
  //       navigation.navigate("scores");
  //     }
  //   }, 1000);
  // };

  useEffect(() => {
    drawACard();
  }, []);

  // useEffect(() => {
  //   tickTimer();
  // }, [timer]);

  return (
    <View style={playerTurnStyles.playerTurnPageContainer}>
      <View style={playerTurnStyles.timerContainer}>
        <Text style={playerTurnStyles.timerText}>{timer + " Seconds"}</Text>
      </View>
      <View style={playerTurnStyles.middlePlayArea}>
        <View style={playerTurnStyles.skipContainer}>
          <Text style={playerTurnStyles.areaText}>Skip</Text>
        </View>
        <GestureDetector gesture={flingGestureDown}>
          <GestureDetector gesture={flingGestureLeft}>
            <Animated.View
              style={[playerTurnStyles.cardContainer, animatedStyles]}
            >
              <View style={playerTurnStyles.cardImageContainer}>
                <Image
                  style={playerTurnStyles.cardImage}
                  source={{ uri: state.activeCard?.image_url }}
                />
              </View>
              <View style={playerTurnStyles.cardTitle}>
                <Text style={playerTurnStyles.cardTitleText}>
                  {state.activeCard?.card_name}
                </Text>
              </View>
              <View style={playerTurnStyles.cardDescription}>
                <Text
                  adjustsFontSizeToFit={true}
                  style={playerTurnStyles.cardDescriptionText}
                >
                  {state.activeCard?.card_hint}
                </Text>
              </View>
              <View style={playerTurnStyles.pointValueContainer}>
                <Text style={playerTurnStyles.pointValue}>
                  {state.activeCard?.point_value}
                </Text>
              </View>
            </Animated.View>
          </GestureDetector>
        </GestureDetector>
        <View style={playerTurnStyles.deckContainer}>
          <Text style={playerTurnStyles.areaText}>Deck</Text>
        </View>
      </View>
      <View style={playerTurnStyles.correctContainer}>
        <Text style={playerTurnStyles.correctText}>Correct</Text>
      </View>
    </View>
  );
};

export default PlayerTurnScreen;
