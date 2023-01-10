import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import { View, Image, StyleSheet } from "react-native";
// Screens
import HomeScreen from "../screen/home";
import SearchScreen from "../screen/search";
import PostScreen from "../screen/post";
import NotificationScreen from "../screen/notification";
import ProfileScreen from "../screen/profile";

// icons
import {
  Ionicons,
  Entypo,
  Fontisto,
  SimpleLineIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import { profile } from "../constants/images";

//Screen names
const homeName = "Home";
const SearchName = "Search";
const PostName = "Post";
const NotificationName = "notification";
const ProfileName = "profile";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          initialParams={{
            icon: <Entypo name="home" size={30} color="black" />,
          }}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name={SearchName}
          component={SearchScreen}
          initialParams={{
            icon: <Feather name="search" size={30} color="black" />,
          }}
          options={{
            headerShown: false,
            tabBarLabel: "Search",
          }}
        />
        <Tab.Screen
          name={PostName}
          component={PostScreen}
          initialParams={{
            icon: (
              <Ionicons name="ios-add-circle-outline" size={30} color="black" />
            ),
          }}
          options={{
            headerShown: false,
            tabBarLabel: "Post",
          }}
        />
        <Tab.Screen
          name={NotificationName}
          component={NotificationScreen}
          initialParams={{
            icon: (
              <Ionicons name="notifications-outline" size={30} color="black" />
            ),
          }}
          options={{
            headerShown: false,
            tabBarLabel: "Notification",
          }}
        />
        <Tab.Screen
          name={ProfileName}
          component={ProfileScreen}
          initialParams={{
            icon: <Image style={styles.proImage} source={profile} />,
          }}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  proImage: {
    width: 33,
    height: 33,
    borderRadius: 1000,
  },
});
