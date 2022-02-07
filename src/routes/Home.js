import React, { useEffect, useState } from "react";

import {
  collectionEx,
  dbService,
  onSnapShotEx,
  orderbyEx,
  queryEx,
} from "../fbase";
//import {uploadString} from "firebase/storage";
import Nweet from "../components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    const q = queryEx(
      collectionEx(dbService(), "nweets"),
      orderbyEx("createdAt", "desc")
    );
    onSnapShotEx(q, (snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => {
        console.log("...doc.data()-------------");
        console.log(doc.data());
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setNweets(nweetArray);
    });
  }, []);
  
  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
