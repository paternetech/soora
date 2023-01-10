import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../constants/styles/post";
import {
  Ionicons,
  Entypo,
  Fontisto,
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const PostComp = (props) => {
  return (
    <View style={props.lastChild ? styles.postContLastChild : styles.postCont}>
      <View style={styles.postHeaderCont}>
        <View style={styles.profileNamesCont}>
          <View style={styles.imageCont}>
            <Image style={styles.image} source={props.post.item.profile} />
          </View>
          <View style={styles.namesCont}>
            <Text style={styles.headerUserName}>
              @{props.post.item.userName}
            </Text>
            <Text style={styles.headerTimeAgo}>{props.post.item.time} ago</Text>
          </View>
        </View>
        <View style={styles.moreBtn}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      <View style={styles.postImageCont}>
        <Image
          resizeMode="cover"
          style={styles.postImage}
          source={props.post.item.post}
        />
      </View>
      <View style={styles.postBtnCont}>
        <TouchableOpacity
          style={props.post.item.likes.liked ? styles.liked : styles.likesCont}
          onPress={() => {
            props.likeFunc(props.post.item);
          }}
        >
          {props.post.item.likes.liked ? (
            <MaterialCommunityIcons
              name="cards-heart"
              size={25}
              color="white"
              style={styles.likedHeartIcon}
            />
          ) : (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={26}
              color="black"
            />
          )}
          <Text
            style={
              props.post.item.likes.liked ? styles.likedText : styles.likeText
            }
          >
            {props.post.item.likes.number}
          </Text>
        </TouchableOpacity>
        <View style={styles.messageCont}>
          <AntDesign name="message1" size={24} color="black" />
          <Text style={styles.comments}>{props.post.item.comments}</Text>
        </View>
        <View style={styles.shareCont}>
          <SimpleLineIcons name="share" size={22} color="black" />
        </View>
      </View>
      <View style={styles.descriptionCont}>
        <Text numberOfLines={10} style={styles.descText}>
          <Text style={styles.descUserName}>{props.post.item.userName} </Text>
          {props.post.item.description} ...
          <Text style={styles.moreBtn}> more</Text>
        </Text>
      </View>
    </View>
  );
};

export default PostComp;
