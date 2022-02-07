import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  authService,
  signOutEx,
  updateProfileEx,
} from "../fbase";

export default ({ refreshUser ,userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    signOutEx(authService);
    history.push("/");
  };
  const onChange = (event) => {
      const {
          target: {value},
      } = event;
      setNewDisplayName(value);
  };
  const onSubmit = async(event) => {
      event.preventDefault();
      if(userObj.displayName !== newDisplayName){
          await updateProfileEx(authService.currentUser, {displayName: newDisplayName});
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
    <>
    <form onSubmit={onSubmit}>
        <input
            onChange={onChange}
            type="text"
            placeholder="Display name"
            value={newDisplayName}
            />
        <input type="submit" value="Update Profile" />    
    </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
