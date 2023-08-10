import React from "react";
import { deleteTuit } from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import {AiOutlineClose, AiOutlineHeart, AiOutlineComment, AiOutlineRetweet} from "react-icons/ai";

const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   }
 }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-8">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <i class="fa fa-window-close" aria-hidden="true"></i>
       <div>{tuit.title}</div>
     </div>
     <div className="col-3">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-1">
        <AiOutlineClose className="float-end" href="javascript:void(0)" style={{fontSize: '20px'}} onClick={() => deleteTuitHandler(tuit._id)}/>
     </div>
     <div style={{display:"flex", justifyContent:"space-around"}}>
                <div><a href="javascript:void(0)"><AiOutlineHeart style={{fontSize: '20px'}} /></a><span>{tuit.likes}</span></div>
                <div><a href="javascript:void(0)"><AiOutlineComment className="" href="" style={{fontSize: '20px'}} /></a><span>{tuit.replies}</span></div>
                <div><a href="javascript:void(0)"><AiOutlineRetweet className="" href="" style={{fontSize: '20px'}} /></a><span>{tuit.retuits}</span></div>
      </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;