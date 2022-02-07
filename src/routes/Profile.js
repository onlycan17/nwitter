import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, signOutEx, updateProfileEx } from "../fbase";

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    signOutEx(authService);
    history.push("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfileEx(authService.currentUser, {
        displayName: newDisplayName,
      });
    }
    refreshUser();
  };
  //   const getMyNweets = async () => {
  //       console.log('test');
  //     const q = queryEx(
  //       collectionEx(dbService(), "nweets"),
  //       whereEx("creatorId", "==", userObj.uid),
  //       orderbyEx("createdAt",'asc')
  //     );
  //     console.log(q);
  //     const querySnapshot = await getDocsEx(q);
  //     console.log(querySnapshot);
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, "=>", doc.data());
  //     });
  //   };
  //   useEffect(() => {
  //     getMyNweets();
  //   }, []);
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logout" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
