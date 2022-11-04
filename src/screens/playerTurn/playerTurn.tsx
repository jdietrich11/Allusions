import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";
import { Card } from "../../helper/interfaces/interfaces";
import DeckArea from "../../helper/deck/deck";
import SkipArea from "../../helper/skipArea/skipArea";
import playerTurnStyles from "./playerTurn.styles";

const PlayerTurnScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, drawCard, increaseScore } = useContext(GlobalContext);
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
    let card: Card = state.deck.shift();
    drawCard(card);
  };

  const gestureHandler = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: 0,
        y: start.value.y + e.translationY,
      };
    })
    .onEnd(() => {
      if (offset.value.y < 0) {
        // skip
        state.skippedPile = [...state.skippedPile, state.activeCard];
        // animate card to top
        offset.value = {
          x: 0,
          y: -500,
        };
      }
      if (offset.value.y > 0) {
        ("runOnJS");
        // score
        // add score to active user
        let cardPoints = state.activeCard.point_value * state.roundCount;
        runOnJS(increaseScore)(cardPoints);
        // animate card to bottom
        offset.value = {
          x: 0,
          y: 500,
        };
      }
    })
    .onFinalize(() => {
      // reset location
      resetLocation();

      // draw new card
      runOnJS(drawACard);
      isPressed.value = false;
      console.log(state.deck.length);
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
        <SkipArea />
        <GestureDetector gesture={gestureHandler}>
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
        <DeckArea />
      </View>
      <View style={playerTurnStyles.correctContainer}>
        <Text style={playerTurnStyles.correctText}>Correct</Text>
      </View>
    </View>
  );
};

export default PlayerTurnScreen;
