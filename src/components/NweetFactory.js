import React, { useState, useRef } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const NweetFactory = ({ userObj }) => {
  const fileInput = useRef();
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (event) => {
    if (nweet === "") {
      return;
    }
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
    setAttachment("");
    fileInput.current.value = null;
  };

  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="fatoryInput__container">
        <input
          className="fatoryInput__input"
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        {/* <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInput}
    /> */}
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label htmlFor="attach-file" className="factoryInput_label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input 
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
            opacity: 0,
        }}/>
      {attachment && (
        <div className="factoryForm__attachment">
          <img src={attachment} style={{backgroundImage:attachment,}} />
          <div className="factoryForm__clear" onClick={onClearAttachment}>
              <span>Remove</span>
              <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
