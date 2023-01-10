import React, { useState, useEffect, useRef } from "react";
import { View, Modal, Image } from "react-native";
import styles from "../constants/styles/header";
import { Logo, LogoC } from "../constants/images";
import { Ionicons } from "@expo/vector-icons";

export const HeaderComp = (props) => {
  return (
    <View style={styles.headerCont}>
      <View style={styles.logoCont}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View>
        <Ionicons name="mail-unread-outline" size={30} color="black" />
      </View>
    </View>
  );
};

export default HeaderComp;
