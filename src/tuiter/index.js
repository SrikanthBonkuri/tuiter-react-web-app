import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import HomeScreen from "./home-screen";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen";

function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
           <Route path="/home" element={<HomeScreen />} />
           <Route path="/explore" element={<ExploreScreen />} />
           <Route path="/bookmarks" element={<BookmarksScreen />} />
           <Route path="/profile" element={<ProfileScreen />} /> 
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
         </Routes>
       </div>
       <div className="col-3">
         <WhoToFollowList />
       </div>
     </div>
   </div>
 );
}
export default Tuiter;