import React from "react";
import { deleteTuit } from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

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
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <i class="fa fa-window-close" aria-hidden="true"></i>
       <div>{tuit.title}</div>
     </div>
     <div className="col-auto">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-4">
        <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;