import { StyleSheet } from "react-native";

const teamsStyles = StyleSheet.create({
  teamsPageContainer: {
    flex: 1,
  },
  team1Container: {
    flex: 4,
    padding: 22,
    borderBottomWidth: 2,
  },
  teamHeader: {
    width: "100%",
  },
  teamHeaderText: {
    textAlign: "center",
    fontSize: 32,
  },
  playersContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  player: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 12,
    marginRight: 12,
    borderWidth: 2,
    borderRadius: 8,
  },
  removePlyrBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -14,
    width: 24,
    height: 24,
    borderWidth: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    margin: -2,
    overflow: "hidden",
  },
  removePlyrBtnText: {
    marginTop: -8,
    fontSize: 24,
    fontWeight: "bold",
  },
  teamMemberTextInput: {
    borderWidth: 1,
    width: 140,
    height: 32,
    borderRadius: 22,
    textAlign: "center",
  },
  team2Container: {
    flex: 4,
    padding: 22,
    borderBottomWidth: 2,
  },
  nextContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 22,
  },
  nextButtonContainer: {
    borderWidth: 2,
    borderRadius: 3,
  },
  nextButtonText: {
    fontSize: 52,
    marginTop: -33,
  },
});

export default teamsStyles;
