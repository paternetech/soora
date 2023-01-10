import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = ({ selected, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <View
        style={selected ? styles.selectedLine : styles.nSelectedLine}
      ></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  selectedLine: {
    backgroundColor: "#000",
    width: 10,
    height: 2,
    marginTop: 3,
    borderRadius: 100,
  },
  nSelectedLine: {
    display: "none",
  },
});

export default Tab;
