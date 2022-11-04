import { StyleSheet } from "react-native";

const activeCardStyles = StyleSheet.create({
  cardContainer: {
    flex: 3,
    borderWidth: 2,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
    overflow: "hidden",
  },
  cardImageContainer: {
    flex: 3,
    border: 2,
    borderWidth: 7,
    marginTop: 12,
    width: "90%",
    borderRadius: 12,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    resizeMode: "stretch",
  },
  cardTitle: {
    flex: 0.5,
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
  pointValueContainer: {
    position: "absolute",
    bottom: -2,
    right: -2,
    justifyContent: "flex-end",
    height: 50,
    width: 50,
    borderWidth: 2,
    borderTopLeftRadius: 1000000000,
    backgroundColor: "red",
  },
  pointValue: {
    marginLeft: 25,
    fontSize: 22,
  },
});

export default activeCardStyles;
