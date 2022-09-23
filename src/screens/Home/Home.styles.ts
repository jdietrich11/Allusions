import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  buttonContainer: {
    borderWidth: 12,
    marginBottom: 12,
    borderColor: "grey",
    padding: 22,
    width: "100%",
  },
  button: {
    color: "grey",
    fontSize: 32,
    textAlign: "center",
  },
});

export default homeStyles;