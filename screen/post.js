import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const PostScreen = () => {
  return (
    <View style={styles.postCont}>
      <Text style={styles.anouncementText}>
        Post page is in development !!!!!!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  anouncementText: {
    fontFamily: "interBold",
    fontSize: 15,
  },
});

export default PostScreen;
