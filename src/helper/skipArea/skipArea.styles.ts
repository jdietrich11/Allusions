import { StyleSheet } from "react-native";

const skipStyles = StyleSheet.create({
  skipContainer: {
    height: "90%",
    width: 32,
    justifyContent: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderTopRightRadius: 100000,
    borderBottomRightRadius: 100000,
  },
  skipText: {
    fontSize: 42,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default skipStyles;
