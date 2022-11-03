import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
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
  const { state } = useContext(GlobalContext);
  const { navigation } = props;
  const [timer, setTimer] = useState(state.turnTime);
  const [activeCard, setActiveCard] = useState<Card>();

  const isPressed = useSharedValue(false);
  const start = useSharedValue({ x: 0, y: 0 });
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? "yellow" : "blue",
    };
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
      console.log("click");
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
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
    setActiveCard(state.deck[0]);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    tickTimer();
  }, [timer]);
=======
  // useEffect(() => {
  //   tickTimer();
  // }, [timer]);
>>>>>>> 41b716b35b03b8296a95490b0b7ca92fe831ac33

  return (
    <View style={playerTurnStyles.playerTurnPageContainer}>
      <View style={playerTurnStyles.timerContainer}>
        <Text style={playerTurnStyles.timerText}>{timer + " Seconds"}</Text>
      </View>
      <View style={playerTurnStyles.middlePlayArea}>
        <View style={playerTurnStyles.skipContainer}>
          <Text style={playerTurnStyles.areaText}>Skip</Text>
        </View>
<<<<<<< HEAD
        <View style={playerTurnStyles.cardContainer}>
          <View style={playerTurnStyles.cardImage}>
            <Image source={{ uri: activeCard?.image_url }} />
          </View>
          <View style={playerTurnStyles.cardTitle}>
            <Text style={playerTurnStyles.cardTitleText}>
              {activeCard?.card_name}
            </Text>
          </View>
          <View style={playerTurnStyles.cardDescription}>
            <Text style={playerTurnStyles.cardDescriptionText}>
              {activeCard?.card_hint}
            </Text>
          </View>
          <View>
            <Text>{activeCard?.point_value}</Text>
          </View>
        </View>
=======
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[playerTurnStyles.cardContainer, animatedStyles]}
          >
            <View style={playerTurnStyles.cardImageContainer}>
              <Image
                style={playerTurnStyles.cardImage}
                source={{ uri: activeCard?.image_url }}
              />
            </View>
            <View style={playerTurnStyles.cardTitle}>
              <Text style={playerTurnStyles.cardTitleText}>
                {activeCard?.card_name}
              </Text>
            </View>
            <View style={playerTurnStyles.cardDescription}>
              <Text
                adjustsFontSizeToFit={true}
                style={playerTurnStyles.cardDescriptionText}
              >
                {activeCard?.card_hint}
              </Text>
            </View>
            <View style={playerTurnStyles.pointValueContainer}>
              <Text style={playerTurnStyles.pointValue}>
                {activeCard?.point_value}
              </Text>
            </View>
          </Animated.View>
        </GestureDetector>
>>>>>>> 41b716b35b03b8296a95490b0b7ca92fe831ac33
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
