import React, {useEffect, useState} from "react";
import {addDocEx, collectionEx, dbService, getDocsEx, nowDate} from "../fbase";

const Home = () => {
    const [nweet, setNweet] = useState();
    const [nweets, setNweets] = useState([]);
    const getNweets = async () => {
        const dbNweets = await getDocsEx(collectionEx(dbService(),"nweets"));
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id: document.id,
            };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    };
    useEffect(()=>{
        getNweets();
    },[]);
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDocEx(collectionEx(dbService(), "nweets"), {
                nweet,
                createdAt: nowDate(),
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
                    <div key={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;