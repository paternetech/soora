import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const SearchScreen = () => {
  return (
    <View style={styles.searchCont}>
      <Text style={styles.anouncementText}>
        Search page is in development !!!!!!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  anouncementText: {
    fontFamily: "interBold",
    fontSize: 15,
  },
});

export default SearchScreen;
