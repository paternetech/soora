import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Animated, Text } from "react-native";
import Tab from "./Tab";

const { width } = Dimensions.get("screen");

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState("Home");
  const { routes } = state;
  const renderSelected = (currentTab) =>
    currentTab === selected ? true : false;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            selected={renderSelected(route.name)}
            key={route.key}
          />
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: -2,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: width,
    height: 70,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default TabBar;
