import { StyleSheet } from "react-native";

const endGameStyles = StyleSheet.create({
  endGameContainer: {
    flex: 1,
  },
  gameOverContainer: {
    flex: 0.75,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gameOverText: {
    textDecorationLine: "underline",
    fontSize: 44,
    marginBottom: 32,
  },
  awardsContainer: {
    flex: 1,
  },
  awardText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bttn: {
    borderWidth: 4,
    width: "75%",
    height: "30%",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 44,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default endGameStyles;
