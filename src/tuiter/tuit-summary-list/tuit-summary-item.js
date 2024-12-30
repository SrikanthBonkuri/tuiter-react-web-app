import React from "react";
//import { deleteTuit } from "../reducers/tuits-reducer";
import { deleteTuitThunk, updateTuitThunk } from "../services/tuits-thunks";
import {useDispatch} from "react-redux";
import {AiOutlineClose, AiOutlineHeart, AiOutlineComment, AiOutlineRetweet} from "react-icons/ai";
import TuitStats from "../tuits/tuit-stats";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png",
     "replies": 123,
     "retuits": 432,
     "likes": 2345,
     "handle": "@spacex",
   }
 }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-8">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <i class="fa fa-window-close" aria-hidden="true"></i>
       <div>{tuit.tuit}</div>
     </div>
     <div className="col-3">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-1">
        <AiOutlineClose className="float-end" href="javascript:void(0)" style={{fontSize: '20px'}} onClick={() => deleteTuitHandler(tuit._id)}/>
     </div>
     <div style={{display:"flex", justifyContent:"space-around"}}>
                <div><a href="javascript:void(0)"><AiOutlineHeart className="text-danger" style={{fontSize: '20px'}} onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))} /></a><span>{tuit.likes}</span></div>
                <div><a href="javascript:void(0)"><AiOutlineComment className="" href="" style={{fontSize: '20px'}} onClick={() => dispatch(updateTuitThunk({ ...tuit, replies: tuit.replies + 1 }))} /></a><span>{tuit.replies}</span></div>
                <div><a href="javascript:void(0)"><AiOutlineRetweet className="" href="" style={{fontSize: '20px'}} onClick={() => dispatch(updateTuitThunk({ ...tuit, retuits: tuit.retuits + 1 }))} /></a><span>{tuit.retuits}</span></div>
      </div>
      
      <div>
      </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;