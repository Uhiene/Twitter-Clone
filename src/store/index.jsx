import { createGlobalState } from "react-hooks-global-state";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  user: [
    {
      id: 1,
      image:
        "https://pbs.twimg.com/profile_images/1584936060353929216/gbHFqT11_400x400.jpg",
      userName: "Saran Pariyar",
      userAccount: "@Saran Pariyar",
      post: "",
      time: ".4h",
      likes: 3,
      retweets: 8,
      comments: 4,
    },
    {
      id: 2,
      image:
        "https://pbs.twimg.com/profile_images/1529866054746398724/6_yk41Lt_400x400.jpg",
      userName: "Darlington Gospel",
      userAccount: " @IDaltonic",
      post: "",
      time: ".4h",
      likes: 3,
      retweets: 4,
      comments: 1,
    },
    {
      id: 3,
      image: "https://twitter.com/PNgumoha/photo",
      userName: "Prince Eldn",
      userAccount: "@PNuomoha",
      post: "",
      time: ".2h",
      likes: 4,
      retweets: 3,
      comments: 2,
    },
    {
      id: 4,
      image: "https://twitter.com/dev_giftea/photo",
      userName: "Giftea",
      userAccount: "@Dev_Giftea",
      post: "",
      time: ".10s",
      likes: 4,
      retweets: 4,
      comments: 3,
    },
    {
      id: 5,
      image: avatar2,
      userName: "Samuel Adebayo",
      userAccount: "@Samuel Adebayo",
      post: "",
      time: ".1m",
      likes: 2,
      retweets: 1,
      comments: 3,
    },
  ],
  trending: [
    {
      id: 1,
      trendHeader: "Trending",
      trend: "VSCode",
      tweets: "7,456",
    },
    {
      id: 2,
      trendHeader: "Trending",
      trend: "Metaverse",
      tweets: "143k",
    },
    {
      id: 3,
      trendHeader: "Business and finace .Trending",
      trend: "Metamask",
      tweets: "28.5k",
    },
    {
      id: 4,
      trendHeader: "Trending",
      trend: "#Burna",
      tweets: "29.7k",
    },
  ],
});

export { setGlobalState, useGlobalState, getGlobalState };