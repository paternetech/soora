import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  homeCont: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  postListCont: {
    flex: 1,
    height: "100%",
    marginBottom: 40,
  },
});
