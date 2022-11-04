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
});

export default playerTurnStyles;
