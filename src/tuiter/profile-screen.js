import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "./services/auth-thunks";
function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 const [ profile, setProfile ] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = async () => { await dispatch(updateUserThunk(profile)); };
 useEffect(async () => {
   const loadProfile = async () => {
     const { payload } = await dispatch(profileThunk());
     setProfile(payload);
   };
   loadProfile();
 }, []);
 return (
    <div>
        <h1>Profile Screen</h1>
   {profile && (<div>
     <div>
      <label>First Name</label>
      <div>{profile.firstName}</div>
      <input type="text" value={profile.firstName}
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
    onClick={() => {
      dispatch(logoutThunk());
      navigate("/login");
    }}>                   Logout</button>
   <button onClick={save}>Save  </button>
    </div>
 ); // see below
}
export default ProfileScreen;