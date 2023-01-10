import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const NotificationScreen = (props) => {
  return (
    <View style={styles.notificationCont}>
      <Text style={styles.anouncementText}>
        Notification page is in development !!!!!!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  anouncementText: {
    fontFamily: "interBold",
    fontSize: 15,
  },
});

export default NotificationScreen;
