import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 22,
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homeBtnContainer: {
    height: 45,
    width: 45,
    overflow: "hidden",
  },
  homeText: {
    color: "white",
    marginTop: -20,
    fontSize: 48,
    fontWeight: "bold",
  },
  howToContainer: {
    flexDirection: "row",
  },
  howToText: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    marginRight: 8,
  },
  howToButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    width: 48,
    height: 48,
    borderRadius: 1000000,
  },
  howToButtonText: {
    color: "white",
    fontSize: 32,
  },
});

export default headerStyles;
