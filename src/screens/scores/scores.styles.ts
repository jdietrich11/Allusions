import { StyleSheet } from "react-native";

const scoreScreenStyles = StyleSheet.create({
  scoreScreenContainer: {
    flex: 1,
  },
  roundContainer: {
    flex: 0.5,
    borderBottomWidth: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  roundText: {
    marginBottom: 12,
    fontSize: 32,
  },
  teamsContainer: {
    flex: 2,
    flexDirection: "row",
  },
  teamContainer: {
    flex: 1,
    borderRightWidth: 2,
    marginRight: -2,
  },
  teamTitle: {
    textAlign: "center",
    marginTop: 64,
    fontSize: 24,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  teamScore: {
    textAlign: "center",
    fontSize: 54,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 24,
  },
  teamMVP: {
    textAlign: "center",
    fontSize: 22,
    marginTop: 12,
  },
  winsTitleContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  winsTitleText: {
    fontSize: 52,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  winsCounterContainer: {
    flex: 1,
    flexDirection: "row",
  },
  teamRoundContainer: {
    flex: 1,
    borderRightWidth: 2,
    marginRight: -2,
  },
  teamRoundWinText: {
    textAlign: "center",
    fontSize: 32,
  },
});

export default scoreScreenStyles;
