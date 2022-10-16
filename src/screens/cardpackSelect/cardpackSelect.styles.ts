import { StyleSheet } from "react-native";

const cardpackStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "black",
    height: "10%",
    justifyContent: "flex-end",
  },
  backBtn: {
    margin: 12,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtnText: {
    color: "white",
    fontSize: 69,
    marginTop: -25,
  },
  cardpackSelectContainer: {
    height: "70%",
    padding: 12,
  },
  cardpackSelectTitleContainer: {
    alignItems: "center",
    marginBottom: 12,
    marginTop: 12,
  },
  cardpackSelectTitleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  avaliableCardpacks: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scrollViewContent: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  },
  cardpack: {
    flexDirection: "column",
    width: "30%",
    height: "35%",
    margin: 5,
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
  selectedCardpack: {
    flexDirection: "column",
    width: "30%",
    height: "35%",
    margin: 5,
    borderWidth: 8,
    borderRadius: 16,
    borderColor: "blue",
    overflow: "hidden",
  },
  cardpackImage: {
    flex: 5,
    borderWidth: 2,
    borderColor: "black",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    resizeMode: "stretch",
    overflow: "hidden",
  },
  cardpackImageSelected: {
    flex: 1,
    resizeMode: "stretch",
    overflow: "hidden",
  },
  cardpackTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  selectedCardpackTitleContainer: {
    flex: 0,
    height: 0,
    width: 0,
  },
  cardpackTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  gameLengthContainer: {
    height: "10%",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 8,
    alignItems: "center",
  },
  cardCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardCounter: {
    flexDirection: "row",
    marginRight: 8,
  },
  cardCounterText: {
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: -3,
  },
  cardCounterTextFrom: {
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  cardAdjustmentCounter: {
    borderWidth: 2,
    height: 30,
    width: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardCountBox: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
  },
  cardCount: {
    height: 25,
    width: 75,
    fontSize: 18,
    textAlign: "center",
    marginTop: 1,
  },
  secondsPerTurnContainer: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  secondsCounter: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 2,
    height: 32,
    width: 72,
    fontSize: 24,
    textAlign: "center",
    marginRight: 8,
  },
  secondTurnsText: {
    fontSize: 28,
    marginTop: -4,
  },
  nextPageButton: {
    borderWidth: 2,
    height: 32,
    width: 75,
    borderRadius: 3,
    justifyContent: "center",
    overflow: "hidden",
  },
  nextPageButtonText: {
    textAlign: "center",
    fontSize: 69,
    marginTop: -47,
  },
  cardpackCounter: {},
  playtimeContainer: {},
});

export default cardpackStyles;
