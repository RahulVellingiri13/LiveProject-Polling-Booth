// import React, { createContext } from 'react'
// import Homepage from './Components/Homepage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import CommentsComp from './Components/Common/CommentsComp'
// import Frontpg from './Frontpage'
// import Signup from './Signup'
// import Loginpg from './Loginpg';
// import VerifyPg from './Verifypg';
// import Newpassword from './Newpassword';
// import Onepoll from './Components/Onepoll'
// import { useState } from 'react'
// export let PageContext=createContext()
// function App() {
//   let [page,setPage]=useState("Polllist")
//   let [pollid,setPollid]=useState("")

//   return (
//     <div>

//   <PageContext.Provider  value={[page,setPage,pollid,setPollid]}>

//    {/* <Homepage/> */}
// <BrowserRouter>
//   <Routes>
//   <Route path="/" element={<Frontpg/>} />
//   <Route path="/Signup" element={<Signup />} />
//   <Route path="/Loginpg" element={<Loginpg />} />
//   <Route path="/VerifyPg" element={<VerifyPg />} />
//   <Route path="/Newpassword" element={<Newpassword />} />
//   <Route path="/Loginpg" element={<Loginpg />} />
//   <Route path="/Homepage" element={<Homepage />} />
//   <Route path="/newpassword/:number" element={<Newpassword />} />
//   <Route path='/viewcomment' element={<CommentsComp/>}/>
//   <Route path='/onepoll/:id' element={<Onepoll/>}/>
//   </Routes>
// </BrowserRouter>
//  </PageContext.Provider>
//     </div>
//   )
// }

// export default App

//----------

// import { React, createContext } from "react";
// import Homepage from "./Components/Homepage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CommentsComp from "./Components/Common/CommentsComp";
// import Frontpg from "./Frontpage";
// import Signup from "./Signup";
// import Loginpg from "./Loginpg";
// import VerifyPg from "./Verifypg";
// import Newpassword from "./Newpassword";
// import Onepoll from "./Components/Onepoll";
// import { useState } from "react";
// import Newpasswordph from "./Newpasswordph";
// export let PageContext = createContext();
// function App() {
//   // let [page,setPage]=useState("Polllist")
//   // let [pollid,setPollid]=useState("")

//   // let [totallike, setTotallike] = useState(0);
//   // const [liked, setLiked] = useState(false);
//   // const [likeCount, setLikeCount] = useState("");

//   // const [isFollowing, setIsFollowing] = useState(false);

//   return (
//     <div>
//       {/* <PageContext.Provider  value={[page,setPage,pollid,setPollid,totallike,setTotallike,liked,setLiked,likeCount,setLikeCount,isFollowing,setIsFollowing]}> */}

//       {/* <Homepage/> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Frontpg />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Loginpg" element={<Loginpg />} />
//           <Route path="/VerifyPg" element={<VerifyPg />} />
//           <Route path="/newpasswordph/:number" element={<Newpasswordph />} />
//           {/* <Route path="/Newpassword" element={<Newpassword />} /> */}
//           <Route path="/Loginpg" element={<Loginpg />} />
//           <Route path="/Homepage" element={<Homepage />} />
//           <Route path="/newpassword/:number" element={<Newpassword />} />
//           <Route path="/viewcomment" element={<CommentsComp />} />
//           <Route path="/onepoll/:id" element={<Onepoll />} />
//         </Routes>
//       </BrowserRouter>
//       {/* </PageContext.Provider> */}
//     </div>
//   );
// }

// export default App;

//------

import { React, createContext } from "react";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CommentsComp from "./Components/Common/CommentsComp";
import Frontpg from "./Frontpage";
import Signup from "./Signup";
import Loginpg from "./Loginpg";
import VerifyPg from "./Verifypg";
import Newpassword from "./Newpassword";
import Onepoll from "./Components/Onepoll";
import { useState } from "react";
import Newpasswordph from "./Newpasswordph";
export let PageContext = createContext();


const isAuthenticated = () => {
  const userId =
    sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId");
  return !!userId; 
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

function App() {
  // let [page,setPage]=useState("Polllist")
  // let [pollid,setPollid]=useState("")

  // let [totallike, setTotallike] = useState(0);
  // const [liked, setLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState("");

  // const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div>
      {/* <PageContext.Provider  value={[page,setPage,pollid,setPollid,totallike,setTotallike,liked,setLiked,likeCount,setLikeCount,isFollowing,setIsFollowing]}> */}

      {/* <Homepage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpg />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Loginpg" element={<Loginpg />} />
          <Route path="/VerifyPg" element={<VerifyPg />} />
          <Route path="/newpasswordph/:number" element={<Newpasswordph />} />
          {/* <Route path="/Newpassword" element={<Newpassword />} /> */}
          <Route path="/Loginpg" element={<Loginpg />} />

          <Route path="/Homepage" element={<ProtectedRoute element={<Homepage />} />} />
        <Route path="/newpassword/:number" element={<ProtectedRoute element={<Newpassword />} />} />
        <Route path="/viewcomment" element={<ProtectedRoute element={<CommentsComp />} />} />
        <Route path="/onepoll/:id" element={<ProtectedRoute element={<Onepoll />} />} />

          
        </Routes>
      </BrowserRouter>
      {/* </PageContext.Provider> */}
    </div>
  );
}

export default App;