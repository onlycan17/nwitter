import React, {useEffect, useState} from "react";
import {
    addDocEx,
    collectionEx,
    dbService,
    docEx,
    getDocsEx,
    nowDate,
    onSnapShotEx,
    orderbyEx, queryEx,
    serverTimestampEx
} from "../fbase";
import Nweet from "../components/Nweet";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState();
    const [nweets, setNweets] = useState([]);
    const getNweets = async () => {
        const dbNweets = await getDocsEx(collectionEx(dbService(), "nweets"));
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id: document.id,
            };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    };
    useEffect(() => {
        const q = queryEx(collectionEx(dbService(), "nweets"), orderbyEx("createdAt", "desc"));
        onSnapShotEx(q, (snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => {
                    console.log('...doc.data()-------------');
                    console.log(doc.data());
                    return ({
                        id: doc.id,
                        ...doc.data(),
                    })
                }
            )
            setNweets(nweetArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDocEx(collectionEx(dbService(), "nweets"), {
                text: nweet,
                createdAt: serverTimestampEx(),
                creatorId: userObj.uid,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        // await dbService.collection("nweets").add({
        //     nweet,
        //     createdAt: Date.now(),
        // });
        setNweet("");
    }
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNweet(value);
    };
    console.log(nweets);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} text="text" placeholder="What's on your mind?"
                       maxLength={120}/>
                <input type="submit" value="Nweet"/>
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
                ))}
            </div>
        </div>
    )
}
export default Home;