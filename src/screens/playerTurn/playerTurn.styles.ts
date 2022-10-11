import { StyleSheet } from "react-native";

const playerTurnStyles = StyleSheet.create({
  playerTurnPageContainer: {
    flex: 1,
  },
  timerContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  timerText: {
    marginBottom: 12,
    fontSize: 32,
  },
  middlePlayArea: {
    flex: 3,
    flexDirection: "row",
  },
  skipContainer: {
    flex: 0.5,
    borderWidth: 2,
    justifyContent: "center",
    borderTopRightRadius: 1000000,
    borderBottomRightRadius: 1000000,
  },
  cardContainer: {
    flex: 3,
    borderWidth: 2,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  cardImage: {
    flex: 3,
    border: 2,
    borderWidth: 2,
    marginTop: 12,
    width: "90%",
    borderRadius: 12,
  },
  cardTitle: {
    flex: 1,
    width: "90%",
    alignItems: "center",
  },
  cardTitleText: {
    fontSize: 32,
  },
  cardDescription: {
    flex: 3,
    width: "90%",
  },
  cardDescriptionText: {
    fontSize: 22,
  },
  deckContainer: {
    flex: 0.5,
    borderWidth: 2,
    justifyContent: "center",
    borderBottomLeftRadius: 10000000,
    borderTopLeftRadius: 10000000,
  },
  correctContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  correctText: {
    borderWidth: 2,
    padding: 12,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    fontSize: 32,
    width: "70%",
    textAlign: "center",
    textTransform: "uppercase",
  },
  areaText: {
    fontSize: 62,
    textTransform: "uppercase",
    alignSelf: "center",
  },
});

export default playerTurnStyles;
