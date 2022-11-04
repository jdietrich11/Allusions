import { StyleSheet } from "react-native";

const deckStyles = StyleSheet.create({
  deckContainer: {
    height: "90%",
    width: 32,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderTopLeftRadius: 100000,
    borderBottomLeftRadius: 100000,
  },
  deckText: {
    fontSize: 42,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default deckStyles;
