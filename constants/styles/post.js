import { StyleSheet, Dimensions } from "react-native";

// likesCont;
const width = Dimensions.get("window").width;
export default StyleSheet.create({
  postCont: {
    borderTopColor: "#f5f5f5",
    borderTopWidth: 1,
    marginBottom: 20,
  },
  postContLastChild: {
    borderTopColor: "#f5f5f5",
    borderTopWidth: 1,
    marginBottom: 40,
  },
  postHeaderCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileNamesCont: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  moreBtn: {
    paddingRight: 8,
  },
  namesCont: {
    marginLeft: 8,
  },
  headerUserName: {
    fontFamily: "interBold",
  },
  headerTimeAgo: {
    fontFamily: "interMedium",
    fontSize: 12,
    color: "#787878",
  },
  postImageCont: {
    // width: "100%",
    // height: "60%",
    // height: 100,
  },
  postImage: {
    width: "100%",
    height: 400,
    // flex: 1,
    // display: "none",
    // resizeMode: "contain",
    // height: "fit",
  },
  postBtnCont: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  likesCont: {
    flexDirection: "row",
    alignContent: "center",
    width: 80,
    justifyContent: "space-between",
    marginRight: 8,
    paddingHorizontal: 5,
    backgroundColor: "#DFDFDF",
    paddingTop: 6,
    borderRadius: 20,
  },
  liked: {
    flexDirection: "row",
    alignContent: "center",
    width: 80,
    justifyContent: "space-between",
    marginRight: 8,
    paddingHorizontal: 5,
    backgroundColor: "#E63E3E",
    paddingTop: 6,
    borderRadius: 20,
  },
  likeText: {
    fontFamily: "interSemiBold",
    paddingTop: 5,
  },
  likedText: {
    fontFamily: "interSemiBold",
    color: "#fff",
    paddingTop: 5,
  },
  messageCont: {
    flexDirection: "row",
    alignContent: "center",
    // width: 80,
    marginRight: 8,
    paddingVertical: 7,
    marginLeft: 9,
  },
  comments: {
    fontFamily: "interSemiBold",
    marginTop: 3,
    marginLeft: 4,
  },
  shareCont: {
    width: 70,
    paddingTop: 8,
  },
  descriptionCont: {
    marginLeft: 10,
    marginTop: 10,
    // flexDirection: "row",
  },
  descText: {
    fontFamily: "interRegular",
    fontSize: 14,
    color: "#0B0B0B",
    marginRight: 10,
  },
  descUserName: {
    fontFamily: "interBold",
    fontSize: 15,
    color: "#0B0B0B",
  },
  moreBtn: {
    fontFamily: "interBold",
    fontSize: 14,
    color: "#787878",
  },
  moreBtnCont: {
    position: "absolute",
  },
});
