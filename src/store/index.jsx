import { createGlobalState } from "react-hooks-global-state";
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"

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
      image:
        "https://pbs.twimg.com/profile_images/1553402925929603072/qPN5j2_Y_400x400.jpg",
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
      image:
        "https://pbs.twimg.com/profile_images/1550845443235528706/nxhES5Cf_400x400.jpg",
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
      image:
        "https://pbs.twimg.com/profile_images/1591469678165200897/Amdxffw4_400x400.jpg",
      userName: "The Cyber guy",
      userAccount: "@Cyberguy_fct",
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
  follow: [
    {
      id: 1,
      image:avatar1,
      userName: "Jane Doe",
      userAccount: "@Jane Doe",
    },
    {
      id: 2,
      image:avatar2,
      userName: "Joe Doe",
      userAccount: "@Joe Doe",
    },
    {
      id: 3,
      image:avatar3,
      userName: "Anonymous",
      userAccount: "@Anonymous",
    },
  ],
});

export { setGlobalState, useGlobalState, getGlobalState };