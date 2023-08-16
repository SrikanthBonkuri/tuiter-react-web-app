import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginScreen() {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
 /*const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");*/
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = async (e) => {
  /*try {
    await dispatch(loginThunk({ username, password }));
    navigate("/profile");
  } catch (e) {
    alert(e);
  }*/
  e.preventDefault();
  console.log(user);
  await dispatch(loginThunk(user));
  navigate("/tuiter/profile");
 };
 return (
    <div>
   <h1>Login Screen</h1>
   <div className="mt-2">
    <label>Username</label>
    <input className="form-control" type="text" placeholder="Username" value={user.username}
     onChange={(event) => setUser({ ...user, username: event.target.value })}/>
   </div>
   <div className="mt-2">
     <label>Password</label>
     <input className="form-control" type="password" placeholder="Password" value={user.password}
       onChange={(event) => setUser({ ...user, password: event.target.value })}/>
   </div>
   <button className="btn btn-primary mt-2"
           onClick={handleLogin}>
     Login
   </button>
  </div>
 );
}
export default LoginScreen;