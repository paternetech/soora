import React, { useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import styles from "../constants/styles/home";
import HeaderComp from "../components/header";
import PostComp from "../components/post";

import {
  Logo,
  profile,
  postImage,
  postImageOne,
  postImageTwo,
  postImageThree,
} from "../constants/images";

export const HomeScreen = (props) => {
  const [data, setData] = useState([
    {
      _id: 1438934,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImage,
      description:
        "By Gods grace this  next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: true,
      },
      comments: "310",
    },
    {
      _id: 23379839,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageOne,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 443438439,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageTwo,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 49749873,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageThree,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 10,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImage,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 20,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageOne,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 30,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageTwo,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 40,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageThree,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 8881,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImage,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 3332,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageOne,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 388,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageTwo,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 4382729,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageThree,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 1,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImage,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 237983,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageOne,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 397493704,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageTwo,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: false,
      },
      comments: "310",
    },
    {
      _id: 49792832,
      profile: profile,
      userName: "beebah",
      time: "15 secs",
      post: postImageThree,
      description:
        "By Gods grace this time next year i want to be an Hafiz. May God almighty make it an easy for and everyone",
      likes: {
        number: "10.3k",
        liked: true,
      },
      comments: "310",
    },
  ]);

  const likeFunc = (post) => {
    post.likes.liked = !post.likes.liked;
    console.log(post);
    setData((el) => [...el, post]);
  };

  return (
    <View style={styles.homeCont}>
      <HeaderComp />
      <ScrollView style={styles.postListCont}>
        <FlatList
          data={data}
          renderItem={(post) => (
            <PostComp
              lastChild={post.index == data.length - 1 ? true : false}
              post={post}
              likeFunc={likeFunc}
            />
          )}
          keyExtractor={(post) => post._id}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
