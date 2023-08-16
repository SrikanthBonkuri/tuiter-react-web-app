import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 //const [ profile, setProfile ] = useState(currentUser);
 //const [currentUser, setCurrentUser] = useState({});
 const [ profile, setProfile ] = useState(currentUser);
 console.log('prof', profile);

 const dispatch = useDispatch();
 const navigate = useNavigate();


 const save = async () => { await dispatch(updateUserThunk(profile)); };
 const loadProfile = async () => {
    const { payload } = await dispatch(profileThunk());
    //setCurrentUser(payload);
    setProfile(payload);
  };
 useEffect(() => {
   //loadProfile();
 }, []);

 const handleLogout = async () => {
    // await logout();
    await dispatch(logoutThunk());
    navigate("/tuiter/logout");
  };

 return (
    <div>
   <h1>Profile Screen</h1>
   {profile && (<div>
     <div>
      <label>First Name</label>
      <input type="text" value={profile.username}
       onChange={(event) => {
        const newProfile = {
         ...profile, firstName: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div>
     <div>
      <label>Last Name</label>
      <input type="text" value={profile.lastName}
       onChange={(event) => {
        const newProfile = {
         ...profile, lastName: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div></div>
   )}
   <button
    onClick={handleLogout}>Logout</button>
   <button onClick={save}>Save  </button>
  </div>
 ); // see below
}
export default ProfileScreen;