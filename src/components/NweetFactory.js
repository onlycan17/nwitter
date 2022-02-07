import React,{ useState, useRef } from "react";
import {
    addDocEx,
    collectionEx,
    dbService,
    getDownloadURLEx,
    refEx,
    serverTimestampEx,
    storage,
    uploadStringEx,
  } from "../fbase";
  import { v4 as uuidv4 } from "uuid";


const NweetFactory = ({userObj}) => {
    const fileInput = useRef();
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
          const fileRef = refEx(storage, `${userObj.uid}/${uuidv4()}`);
          const response = await uploadStringEx(fileRef, attachment, "data_url");
          attachmentUrl = await getDownloadURLEx(response.ref);
          console.log(response);
        }
    
        const nweetObj = {
          text: nweet,
          createdAt: serverTimestampEx(),
          creatorId: userObj.uid,
          attachmentUrl,
        };
    
        try {
          const docRef = await addDocEx(
            collectionEx(dbService(), "nweets"),
            nweetObj
          );
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    
        setNweet("");
        setAttachment("");
      };
    
      const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNweet(value);
      };
      const onFileChange = (event) => {
        const {
          target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
          console.log(finishedEvent);
          const {
            currentTarget: { result },
          } = finishedEvent;
          setAttachment(result);
        };
        reader.readAsDataURL(theFile);
      };
      const onClearAttachment = () => {
        setAttachment(null);
        fileInput.current.value = null;
      };
    
    return (
        <form onSubmit={onSubmit}>
            <input value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120} />
            <input type="file"
                accept="image/*" onChange={onFileChange} />
            <input type="submit" value="Nweet" />
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px" />
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}        
        </form>
    );
}

export default NweetFactory;