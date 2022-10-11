import { StyleSheet } from "react-native";

const instructionStyles = StyleSheet.create({
  informationPageContainer: {
    flex: 1,
  },
  timerContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  timerText: {
    fontSize: 42,
    marginBottom: 8,
  },
  playAreaInfo: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rulesContainer: {
    marginLeft: 42,
  },
  rulesTitle: {
    textAlign: "center",
    marginLeft: -42,
    fontSize: 28,
    textDecorationLine: "underline",
  },
  ruleText: {
    fontSize: 22,
  },
  skipContainer: {
    height: "90%",
    width: 32,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderTopRightRadius: 100000,
    borderBottomRightRadius: 100000,
  },
  deckContainer: {
    height: "90%",
    width: 32,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderTopLeftRadius: 100000,
    borderBottomLeftRadius: 100000,
  },
  skipText: {
    fontSize: 42,
    textTransform: "uppercase",
    textAlign: "center",
  },
  deckText: {
    fontSize: 42,
    textTransform: "uppercase",
    textAlign: "center",
  },
  playerRulesContainer: {
    width: "70%",
    height: "90%",
    borderWidth: 2,
    borderRadius: 12,
  },
  playerNameContainer: {
    marginTop: 12,
  },
  playerName: {
    fontSize: 42,
    textAlign: "center",
  },
  readyButton: {
    marginTop: "auto",
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    height: 72,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "green",
  },
  readyButtonText: {
    fontSize: 44,
    textTransform: "uppercase",
  },
  scoreContainer: {
    alignSelf: "center",
    width: "75%",
    height: "8%",
    marginTop: -42,
    borderWidth: 2,
    borderTopRightRadius: 42,
    borderTopLeftRadius: 42,
    borderStyle: "dashed",
  },
  scoreText: {
    textAlign: "center",
    fontSize: 32,
  },
});

export default instructionStyles;
