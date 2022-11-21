import { createGlobalState } from "react-hooks-global-state";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState(
  {
    user:[
        {
            id:1,
            image:avatar1,
            userName:"Saran Pariyar",
            userAccount:"@Saran Pariyar",
            post:"",
            time:"4.h",
            likes:3,
            retweets:8,
            comments:4,
        },
        {
            id:2,
            image:avatar1,
            userName:"Binary Blackbelt",
            userAccount:"",
            post:"",
            time:"4.h",
            likes:3,
            retweets:4,
            comments:1,
        },
        {
            id:3,
            image:avatar2,
            userName:"ismaty.tez",
            userAccount:"@",
            post:"",
            time:"2.h",
            likes:4,
            retweets:3,
            comments:2,
        },
        {
            id:4,
            image:avatar3,
            userName:"Jary Cruz",
            userAccount:"@",
            post:"",
            time:"10.s",
            likes:4,
            retweets:4,
            comments:3,
        },
        {
            id:5,
            image:avatar2,
            userName:"Samuel Adebayo",
            userAccount:"@",
            post:"",
            time:"1m",
            likes:2,
            retweets:1,
            comments:3,
        },
    ]
  }
);

export { setGlobalState, useGlobalState, getGlobalState };