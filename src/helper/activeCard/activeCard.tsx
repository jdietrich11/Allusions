import React, { useContext, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { GlobalContext } from "../../context/globalContext";
import { Card } from "../interfaces/interfaces";

import activeCardStyles from "./activeCard.styles";

const ActiveCard: React.FC = () => {
  const { state, drawCard, increaseScore, addToSkipped } =
    useContext(GlobalContext);

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

  const drawACard = () => {
    let card: Card = state.deck.shift();
    drawCard(card);
  };

  const resetLocation = () => {
    "worklet";
    offset.value = {
      x: 0,
      y: 0,
    };
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
        // animate card to top
        offset.value = {
          x: 0,
          y: -500,
        };
        // add card to skip pile
        runOnJS(addToSkipped)(state.activeCard);
      }
      if (offset.value.y > 0) {
        // score
        // add score to active user
        // add card to discard pile
        let score = state.activeCard.point_value * state.roundCount;
        runOnJS(increaseScore)(score, state.activeCard);

        // animate card to bottom
        offset.value = {
          x: 0,
          y: 500,
        };
      }
      // remove active card
    })
    .onFinalize(() => {
      isPressed.value = false;
      // reset location
      offset.value = {
        x: 0,
        y: 0,
      };
      // draw new card
      runOnJS(drawACard)();
    });

  useEffect(() => {
    drawACard();
  }, []);

  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.View style={[activeCardStyles.cardContainer, animatedStyles]}>
        <View style={activeCardStyles.cardImageContainer}>
          <Image
            style={activeCardStyles.cardImage}
            source={{ uri: state.activeCard?.image_url }}
          />
        </View>
        <View style={activeCardStyles.cardTitle}>
          <Text style={activeCardStyles.cardTitleText}>
            {state.activeCard?.card_name}
          </Text>
        </View>
        <View style={activeCardStyles.cardDescription}>
          <Text
            adjustsFontSizeToFit={true}
            style={activeCardStyles.cardDescriptionText}
          >
            {state.activeCard?.card_hint}
          </Text>
        </View>
        <View style={activeCardStyles.pointValueContainer}>
          <Text style={activeCardStyles.pointValue}>
            {state.activeCard?.point_value}
          </Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default ActiveCard;
