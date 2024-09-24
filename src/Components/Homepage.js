// import React, { useContext, useEffect, useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Homepage.css";
// import axios from "axios";
// import { Modal } from "react-bootstrap";
// // /Users/rahul/Desktop/pollingbooth/src/CssComponents

// import {
//   Card,
//   Button,
//   Row,
//   Col,
//   Form,
//   InputGroup,
//   ProgressBar,
//   Container,
// } from "react-bootstrap";
// import Polllist from "./Polllist";
// import AddPoll from "./AddPoll";
// import Pollresults from "./Pollresults";
// import Userdetails from "./Userdetails";
// import CommentsComp from "./Common/CommentsComp";
// import { PageContext } from "../App";
// // import logo from './src/images/logo.png';
// import OTPVerificationModal from "./Common/Otpverify";
// import { useLocation, useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";
// import CategoryComp from "./Common/CategoryComp";

// function Homepage() {
//   let loginuser = useLocation();
//   let newuser = loginuser.state;
//   console.log(newuser);
//   console.log(loginuser.state);
//   let [page, setPage] = useContext(PageContext);
//   let [polls, setPolls] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const [trendingPolls, setTrendingPolls] = useState([]);

//   const [googlegmail, setGooglegmail] = useState(
//     sessionStorage.getItem("email") || ""
//   );
//   const [googleusername, setGoogleusername] = useState(
//     sessionStorage.getItem("username") || ""
//   );

//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [show, setShow] = useState(false);

//   const [step, setStep] = useState(1);

//   let userId =
//     sessionStorage.getItem("loginuserId") ||
//     sessionStorage.getItem("googleuserId");
//   console.log("userId:", userId);
//   console.log("loginuserid", sessionStorage.getItem("loginuserId"));
//   console.log("googleuseriod", sessionStorage.getItem("googleuserId"));
//   useEffect(() => {
//     if (searchQuery) {
//       handleSearch();
//     } else {
//       // Retrieve polls from the API on component mount
//       fetchPolls();
//     }
//   }, [searchQuery]);
//   // Function to fetch polls data from the API
//   //   const fetchPolls = async () => {
//   //    try {
//   //      const response = await axios.post("http://92.205.109.210:8028/polls/getall", {
//   //        user_id: userId
//   //      });
//   //      setPolls(response.data); // Set the initial polls data
//   //      setFilteredPolls(response.data); // Also set the filtered polls initially
//   //      sessionStorage.setItem("polls", JSON.stringify(response.data)); // Save the polls to sessionStorage
//   //    } catch (error) {
//   //      console.error("Error fetching polls:", error);
//   //    }
//   //  };

//   //getall polls
//   const [filteredPolls, setFilteredPolls] = useState([]);
//   const fetchPolls = async () => {
//     try {
//       const response = await axios.post(
//         "http://92.205.109.210:8028/polls/getall",
//         {
//           user_id: userId,
//         }
//       );
//       console.log(response.data);
//       setPolls(response.data);
//       sessionStorage.setItem("polls", JSON.stringify(response.data)); // Save the polls to sessionStorage
//     } catch (error) {
//       console.error("Error fetching polls:", error);
//     }
//   };

//   useEffect(() => {
//     if (selectedCategory) {
//       console.log("fetch cagegory");
//       console.log("Selected Category:", selectedCategory);

//       const filteredCategory = polls.filter((poll) =>
//         poll.category.some((cat) => cat._id === selectedCategory._id)
//       );
//       console.log("Filtered Polls:", filteredCategory);
//       setFilteredPolls(filteredCategory);
//       console.log(filteredPolls);

//       setPage("category");
//     } else {
//       fetchPolls();
//     }
//   }, [selectedCategory]);
//   //for categories

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "http://92.205.109.210:8028/category/getall"
//         );
//         console.log(response.data);
//         setCategories(response.data);
//         console.log(categories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleCategoryPage = (category) => {
//     setPage("category");
//     console.log("Selected Category:", category);
//     setSelectedCategory(category);
//   };
//   console.log("Selected Category:", selectedCategory);
//   console.log("Selected Category page:", page);
//   // const [otp, setOtp] = useState('');
//   // const [show, setShow] = useState(false);
//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true);

//   // const handleChange = (e) => {
//   //   setOtp(e.target.value);
//   // };

//   // const onSubmit = () => {

//   //   handleClose();
//   // };
//   sessionStorage.getItem("username");
//   console.log("session data", sessionStorage.getItem("username"));
//   const [googleuser, setgoogleuser] = useState(
//     sessionStorage.getItem("username")
//   );

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handlePhoneChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };
//   const onPhoneSubmit = async () => {
//     try {
//       const response = await axios.post(
//         "http://92.205.109.210:8028/mobileauth/send-otp-sms",
//         { number: phoneNumber }
//       );
//       if (response.status === 200) {
//         console.log("OTP sent successfully");
//         setStep(2); // Move to OTP verification step
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   const navigate = useNavigate();

//   const handleOtpSubmit = async () => {
//     console.log(phoneNumber);
//     try {
//       const response = await axios.post(
//         "http://92.205.109.210:8028/mobileauth/verify-otp-sms",
//         { number: phoneNumber, otp: otp }
//       );
//       if (response.status === 200) {
//         console.log("OTP verified successfully");
//         navigate(`/newpassword/${phoneNumber}`);
//       } else {
//         console.error("OTP verification failed");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//     }
//   };

//   // let googlegmail=sessionStorage.getItem("email")
//   // let googleusername=sessionStorage.getItem("username")

//   console.log(googlegmail, googleusername);

//   useEffect(() => {
//     axios
//       .get("http://92.205.109.210:8028/polls/top3")
//       .then((response) => {
//         setTrendingPolls(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching trending polls:", error);
//       });
//   }, []);

//   // Function to handle page navigation
//   let handlePageClick = (component) => {
//     setPage(component);
//   };
//   // Function to add a new poll to the poll list
//   let addNewPoll = (newPoll) => {
//     setPolls([...polls, newPoll]);
//     setPage("Polllist"); // Navigate to Polllist after adding a poll
//   };
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   const handleSearch = async () => {
//     console.log(searchQuery);
//     try {
//       const response = await axios.post(
//         "http://92.205.109.210:8028/polls/search",
//         {
//           query: searchQuery,
//         }
//       );
//       console.log(response);
//       setPolls(response.data.poll_ids);
//       // setFilteredPolls(response.data);
//       // Set filtered polls based on the search result
//     } catch (error) {
//       console.error("Error searching polls:", error);
//     }
//   };

//   const handleAddPoll = () => {
//     if (googlegmail && googleusername) {
//       handleShow();

//       // return <OTPVerificationModal />;
//     } else {
//       setPage("AddPoll");
//     }
//   };
//   const handleSignOut = async () => {
//     const auth = getAuth(); // Initialize Firebase Auth
//     try {
//       await signOut(auth); // Sign out the user using Firebase
//       sessionStorage.clear(); // Clear session storage
//       localStorage.removeItem("authToken"); // Remove any auth token
//       sessionStorage.clear();
//       navigate("/loginpg"); // Redirect to login page
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   return (
//     <div className="polling-booth">
//       <header>
//         <h1>POLLING BOOTH</h1>
//         <input
//           type="search"
//           placeholder="Search Polls"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <div className="user-info">
//           <h4>
//             Welcome... {googleuser ? googleuser : newuser}{" "}
//             <i class="bi bi-person-circle"></i> !
//           </h4>
//         </div>
//       </header>
//       <div className="container">
//         <aside>
//           <nav>
//             <ul>
//               <li onClick={() => handlePageClick("Polllist")}>
//                 <i class="bi bi-list"> </i>Poll List
//               </li>
//               <li onClick={handleAddPoll}>
//                 <i class="bi bi-plus-circle"> </i> Add Poll
//               </li>
//               {/* <li onClick={() => handlePageClick("Pollresults")}>
//                 <i class="bi bi-check2-circle"></i> Voted Polls
//               </li> */}
//               <li onClick={() => handlePageClick("Userdetails")}>
//                 <i class="bi bi-person-circle"></i> User Details
//               </li>
//             </ul>
//           </nav>
//           <div className="categories">
//             <h4>CATEGORIES</h4>
//             <nav>
//               {categories.map((cat) => (
//                 <button
//                   onClick={() => handleCategoryPage(cat)}
//                   key={cat.category_id}
//                 >
//                   {cat.category_name}
//                 </button>
//               ))}
//             </nav>
//             <button className="sign-out" onClick={handleSignOut}>
//               Sign Out <i className="bi bi-box-arrow-right"></i>
//             </button>
//           </div>
//         </aside>
//         <main>
//           <nav>
//             {/*
//           {page === 'Polllist' && <Polllist />}
//       {page === 'AddPoll' && <AddPoll />}
//       {page === 'Pollresults' && <Pollresults />}
//       {page === 'Userdetails' && <Userdetails/>}
//  */}

//             {page === "Polllist" && (
//               <Polllist
//                 polls={polls}
//                 setPolls={setPolls}
//                 selectedCategory={selectedCategory}
//               />
//             )}
//             {page === "AddPoll" && <AddPoll addNewPoll={addNewPoll} />}

//             {page === "Pollresults" && <Pollresults />}
//             {page === "Userdetails" && <Userdetails />}
//             {page === "CommentsComp" && <CommentsComp />}
//             {page === "category" && (
//               <CategoryComp
//                 polls={polls}
//                 setPolls={setPolls}
//                 filteredPolls={filteredPolls}
//               />
//             )}
//           </nav>

//           {/* Add more polls here */}
//         </main>
//         <aside className="trending-polls">
//           <h4>TRENDING POLLS</h4>
//           <hr />

//           <nav>
//             {trendingPolls.map((poll) => (
//               <Card key={poll._id}>
//                 <Card.Body>
//                   <Card.Header>Question: {poll.question}</Card.Header>
//                   <Card.Text>
//                     <p>
//                       <i className="bi bi-check2-circle"></i> Total Votes:{" "}
//                       {poll.totalVotes}
//                     </p>
//                     <hr />
//                     <p>
//                       <i className="bi bi-heart-fill"></i> Total Likes:{" "}
//                       {poll.totalLikes}
//                     </p>
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             ))}
//           </nav>
//         </aside>
//       </div>
//       {/* <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Verify OTP</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group controlId="formOtp">
//             <Form.Label>Enter OTP</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={handleChange}
//             />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={onSubmit}>
//           Verify
//         </Button>
//       </Modal.Footer>
//     </Modal> */}
//       {/* OTP VERIFICATION MODAL */}
//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {step === 1 ? "Verify Phone Number" : "Verify OTP"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             {step === 1 && (
//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Enter Phone Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Phone Number"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                 />
//               </Form.Group>
//             )}
//             {step === 2 && (
//               <Form.Group controlId="formOtp">
//                 <Form.Label>Enter OTP</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={handleOtpChange}
//                 />
//               </Form.Group>
//             )}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button
//             variant="primary"
//             onClick={step === 1 ? onPhoneSubmit : handleOtpSubmit}
//           >
//             {step === 1 ? "Send OTP" : "Verify OTP"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Homepage;

//----

//updatedone

import React, { createContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Homepage.css";
import axios from "axios";
import { Modal } from "react-bootstrap";
// /Users/rahul/Desktop/pollingbooth/src/CssComponents

import {
  Card,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  ProgressBar,
  Container,
} from "react-bootstrap";
import Polllist from "./Polllist";
import AddPoll from "./AddPoll";
import Pollresults from "./Pollresults";
import Userdetails from "./Userdetails";
import CommentsComp from "./Common/CommentsComp";
// import { PageContext } from "../App";
// import logo from './src/images/logo.png';
import OTPVerificationModal from "./Common/Otpverify";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import CategoryComp from "./Common/CategoryComp";
export const PageContext = createContext();

function Homepage({ poll }) {
  let userId =
    sessionStorage.getItem("loginuserId") ||
    sessionStorage.getItem("googleuserId");
  console.log("userId:", userId);
  console.log("loginuserid", sessionStorage.getItem("loginuserId"));
  console.log("googleuseriod", sessionStorage.getItem("googleuserId"));
  let [polls, setPolls] = useState([]);

  //below are states for the useContexts

  let [page, setPage] = useState("Polllist");
  let [pollid, setPollid] = useState("");

  let [totallike, setTotallike] = useState(
    polls.map((poll) => poll.createdBy.total_likes)
  );
  const [liked, setLiked] = useState(
    polls.map((poll) => poll.createdBy.isLiked)
  );
  const [likeCount, setLikeCount] = useState(
    polls.map((poll) => poll.createdBy.total_likes)
  );

  const [likedPolls, setLikedPolls] = useState([]);

  //   let [totallike, setTotallike] = useState(0);
  // const [liked, setLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState("");

  const [isFollowing, setIsFollowing] = useState(
    polls.map((poll) => poll.createdBy.isFollowing)
  );

  //  const [isFollowing, setIsFollowing] = useState(false);

  const [followStatus, setFollowStatus] = useState({});

  console.log(isFollowing);

  // const [selectedOption, setSelectedOption] = useState( polls.map((option) => option.option));
  const [selectedOption, setSelectedOption] = useState(null);
  const [showVoteButton, setShowVoteButton] = useState(false);
  // const [hasVoted, setHasVoted] = useState(polls.map(poll=>poll.createdBy.isVoted));
  //   const [hasVoted, setHasVoted] = useState(() => {
  //     return polls.map(poll => poll.createdBy?.isVoted || false);
  // });
  const [hasVoted, setHasVoted] = useState({});

  console.log("hasVoted", hasVoted);
  const [voteResults, setVoteResults] = useState([]);
  const [totalVotes, setTotalVotes] = useState(polls.total_votes);

  // const [hasVotedbutton, setHasvotedbutton] = useState(
  //   polls.createdBy.isVoted ? "unvote" : "vote"
  // );

  //-------------------------

  let loginuser = useLocation();
  let newuser = loginuser.state;
  console.log(newuser);
  console.log(loginuser.state);

  const [searchQuery, setSearchQuery] = useState("");

  const [trendingPolls, setTrendingPolls] = useState([]);

  const [googlegmail, setGooglegmail] = useState(
    sessionStorage.getItem("email") || ""
  );
  const [googleusername, setGoogleusername] = useState(
    sessionStorage.getItem("username") || ""
  );

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);

  const [step, setStep] = useState(1);

  // const [hasLiked, setHasLiked] = useState("");
  // const [hasVoted, setHasVoted] = useState(false);
  // const [isFollowing, setIsFollowing] = useState(true);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    } else {
      // Retrieve polls from the API on component mount
      fetchPolls();
    }
  }, [searchQuery, userId]);

  // Function to fetch polls data from the API
  //   const fetchPolls = async () => {
  //    try {
  //      const response = await axios.post("http://92.205.109.210:8028/polls/getall", {
  //        user_id: userId
  //      });
  //      setPolls(response.data); // Set the initial polls data
  //      setFilteredPolls(response.data); // Also set the filtered polls initially
  //      sessionStorage.setItem("polls", JSON.stringify(response.data)); // Save the polls to sessionStorage
  //    } catch (error) {
  //      console.error("Error fetching polls:", error);
  //    }
  //  };

  //getall polls

  const [filteredPolls, setFilteredPolls] = useState([]);
  const fetchPolls = async () => {
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/polls/getall",
        {
          user_id: userId,
        }
      );
      console.log(response.data);
      setPolls(response.data);
      sessionStorage.setItem("polls", JSON.stringify(response.data)); // Save the polls to sessionStorage
    } catch (error) {
      console.error("Error fetching polls:", error);
    }
  };

  // useEffect(() => {

  //   polls.forEach((poll) => {

  //     const userVoted = poll.options.some(option => option.voters.includes(userId));

  //     const userLiked = poll.likers.some(liker => liker._id === userId);

  //     const userFollow = poll.createdBy.isFollowing;

  //     if (userVoted)
  //       {
  //         setHasVoted(true);
  //       }
  //       else{
  //         setHasVoted(false);
  //       }
  //     if (userLiked)
  //       {
  //         setHasLiked(true);

  //   }else{
  //     setHasLiked(false);
  //   }
  //   if (userFollow)
  //     {
  //       setIsFollowing(true);

  // }else{
  //   setIsFollowing(false);
  // }
  // });
  // }, [polls, userId]);

  useEffect(() => {
    if (selectedCategory) {
      console.log("fetch cagegory");
      console.log("Selected Category:", selectedCategory);

      const filteredCategory = polls.filter((poll) =>
        poll.category.some((cat) => cat._id === selectedCategory._id)
      );
      console.log("Filtered Polls:", filteredCategory);
      setFilteredPolls(filteredCategory);
      console.log(filteredPolls);

      setPage("category");
    } else {
      fetchPolls();
    }
  }, [selectedCategory]);
  //for categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://92.205.109.210:8028/category/getall"
        );
        console.log(response.data);
        setCategories(response.data);
        console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryPage = (category) => {
    setPage("category");
    console.log("Selected Category:", category);
    setSelectedCategory(category);
  };
  console.log("Selected Category:", selectedCategory);
  console.log("Selected Category page:", page);
  // const [otp, setOtp] = useState('');
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleChange = (e) => {
  //   setOtp(e.target.value);
  // };

  // const onSubmit = () => {

  //   handleClose();
  // };
  sessionStorage.getItem("username");
  console.log("session data", sessionStorage.getItem("username"));
  const [googleuser, setgoogleuser] = useState(
    sessionStorage.getItem("username")
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const onPhoneSubmit = async () => {
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/mobileauth/send-otp-sms",
        { number: phoneNumber }
      );
      if (response.status === 200) {
        console.log("OTP sent successfully");
        setStep(2); // Move to OTP verification step
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const navigate = useNavigate();

  const handleOtpSubmit = async () => {
    console.log(phoneNumber);
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/mobileauth/verify-otp-sms",
        { number: phoneNumber, otp: otp }
      );
      if (response.status === 200) {
        console.log("OTP verified successfully");
        sessionStorage.setItem("verifiedPhoneNumber", phoneNumber);
        sessionStorage.setItem("isVerified", true);
        navigate(`/newpassword/${phoneNumber}`);
      } else {
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  // let googlegmail=sessionStorage.getItem("email")
  // let googleusername=sessionStorage.getItem("username")

  console.log(googlegmail, googleusername);

  useEffect(() => {
    axios
      .get("http://92.205.109.210:8028/polls/top3")
      .then((response) => {
        setTrendingPolls(response.data);
      })
      .catch((error) => {
        console.error("Error fetching trending polls:", error);
      });
  }, []);

  // Function to handle page navigation
  let handlePageClick = (component) => {
    setPage(component);
  };
  // Function to add a new poll to the poll list
  let addNewPoll = (newPoll) => {
    setPolls([...polls, newPoll]);
    setPage("Polllist"); // Navigate to Polllist after adding a poll
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  const handleSearch = async () => {
    console.log(searchQuery);
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/polls/search",
        {
          query: searchQuery,
        }
      );
      console.log(response);
      setPolls(response.data.poll_ids);
      // setFilteredPolls(response.data);
      // Set filtered polls based on the search result
    } catch (error) {
      console.error("Error searching polls:", error);
    }
  };

  const handleAddPoll = () => {
    const verifiedPhoneNumber = sessionStorage.getItem("verifiedPhoneNumber");
    const isVerified = sessionStorage.getItem("isVerified");

    if (googlegmail && googleusername) {
      if (isVerified && verifiedPhoneNumber) {
        setPage("AddPoll");
      } else {
        handleShow();
      }
    } else {
      setPage("AddPoll");
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth(); // Initialize Firebase Auth
    try {
      await signOut(auth); // Sign out the user using Firebase
      sessionStorage.clear(); // Clear session storage
      localStorage.removeItem("authToken"); // Remove any auth token
      sessionStorage.clear();
      navigate("/loginpg"); // Redirect to login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <PageContext.Provider
        value={[
          page,
          setPage,
          pollid,
          setPollid,
          totallike,
          setTotallike,
          liked,
          setLiked,
          likeCount,
          setLikeCount,
          likedPolls,
          setLikedPolls,

          isFollowing,
          setIsFollowing,
          followStatus,
          setFollowStatus,
          selectedOption,
          setSelectedOption,
          showVoteButton,
          setShowVoteButton,
          hasVoted,
          setHasVoted,
          voteResults,
          setVoteResults,
          totalVotes,
          setTotalVotes,
          showVoteButton,
          setShowVoteButton,
        ]}
      >
        <div className="polling-booth">
          <header>
            <h1>POLLING BOOTH</h1>
            <input
              type="search"
              placeholder="Search Polls"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="user-info">
              <h4>
                Welcome... {googleuser ? googleuser : newuser}{" "}
                <i class="bi bi-person-circle"></i> !
              </h4>
            </div>
          </header>
          <div className="container">
            <aside>
              <nav>
                <ul>
                  <li onClick={() => handlePageClick("Polllist")}>
                    <i class="bi bi-list"> </i>Poll List
                  </li>
                  <li onClick={handleAddPoll}>
                    <i class="bi bi-plus-circle"> </i> Add Poll
                  </li>
                  <li onClick={() => handlePageClick("Userdetails")}>
                    <i class="bi bi-person-circle"></i> User Details
                  </li>
                </ul>
              </nav>
              <div className="categories">
                <h4>CATEGORIES</h4>
                <nav>
                  {categories.map((cat) => (
                    <button
                      onClick={() => handleCategoryPage(cat)}
                      key={cat.category_id}
                    >
                      {cat.category_name}
                    </button>
                  ))}
                </nav>
                <button className="sign-out" onClick={handleSignOut}>
                  Sign Out <i className="bi bi-box-arrow-right"></i>
                </button>
              </div>
            </aside>
            <main>
              <nav>
                {page === "Polllist" && (
                  <Polllist
                    polls={polls}
                    setPolls={setPolls}
                    selectedCategory={selectedCategory}
                  />
                )}
                {page === "AddPoll" && <AddPoll addNewPoll={addNewPoll} />}
                {page === "Pollresults" && <Pollresults />}
                {page === "Userdetails" && <Userdetails />}
                {page === "CommentsComp" && <CommentsComp />}
                {page === "category" && (
                  <CategoryComp
                    polls={polls}
                    setPolls={setPolls}
                    filteredPolls={filteredPolls}
                  />
                )}
              </nav>
            </main>
            <aside className="trending-polls">
              <h4>TRENDING POLLS</h4>
              <hr />
              <nav>
                {trendingPolls.map((poll) => (
                  <Card key={poll._id}>
                    <Card.Body>
                      <Card.Header>Question: {poll.question}</Card.Header>
                      <Card.Text>
                        <p>
                          <i className="bi bi-check2-circle"></i> Total Votes:{" "}
                          {poll.totalVotes}
                        </p>
                        <hr />
                        <p>
                          <i className="bi bi-heart-fill"></i> Total Likes:{" "}
                          {poll.totalLikes}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </nav>
            </aside>
          </div>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                {step === 1 ? "Verify Phone Number" : "Verify OTP"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {step === 1 && (
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Enter Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                    />
                  </Form.Group>
                )}
                {step === 2 && (
                  <Form.Group controlId="formOtp">
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleOtpChange}
                    />
                  </Form.Group>
                )}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={step === 1 ? onPhoneSubmit : handleOtpSubmit}
              >
                {step === 1 ? "Send OTP" : "Verify OTP"}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </PageContext.Provider>
    </div>
  );
}

export default Homepage;
