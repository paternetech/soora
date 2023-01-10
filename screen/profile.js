import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const ProfileScreen = () => {
  return (
    <View style={styles.profileCont}>
      <Text style={styles.anouncementText}>
        Profile page is in development !!!!!!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  anouncementText: {
    fontFamily: "interBold",
    fontSize: 15,
  },
});

export default ProfileScreen;
