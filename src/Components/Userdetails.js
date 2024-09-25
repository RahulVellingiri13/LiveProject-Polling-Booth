// import React from 'react'
// import {Card , Button,} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function Userdetails() {
//   return (
//     <div>
// <Card className="user-profile-card">
//       <Card.Body className="text-center">
//         <img src="/path-to-profile-pic" alt="Profile" className="profile-pic mb-3" />
//         <Card.Title>SANJAY</Card.Title>
//         <Card.Text>@SANJAY1987765</Card.Text>
//         <Card.Text>Joined May 2024</Card.Text>
//         <Card.Text>10 Following | 0 Followers</Card.Text>
//         <Button variant="primary" className="mb-2">Get verified</Button>
//         <Button variant="secondary" className="edit-profile-button">Edit profile</Button>
//       </Card.Body>
//     </Card>

//     </div>
//   )
// }

// export default Userdetails

// import React, { useState, useEffect } from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

// const Userdetails = () => {
//   const [userData, setUserData] = useState({}); // State to hold user details
//   const [polls, setPolls] = useState([]); // State to hold polls data
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image

//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getone')
//       .then(response => {
//         setUserData(response.data); // Set the user data to the state
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to handle button clicks and API calls for polls
//   const handleButtonClick = (type) => {
//     let url = '';

//     switch (type) {
//       case 'created':
//         url = 'http://49.204.232.254:64/polls/getall';
//         break;
//       case 'voted':
//         url = 'http://49.204.232.254:64/polls/getvoted';
//         break;
//       case 'liked':
//         url = 'http://49.204.232.254:64/polls/likeonpoll';
//         break;
//       case 'commented':
//         url = 'http://49.204.232.254:64/comment/getbyid';
//         break;
//       default:
//         return;
//     }

//     axios.get(url)
//       .then(response => {
//         setPolls(response.data); // Set the fetched data to the state
//         setActiveTab(type); // Update the active tab
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             <h5>{userData.username || 'User Name'}</h5>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             <Button variant="primary">User Details</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('created')}>Created Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('voted')}>Voted Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('liked')}>Liked Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('commented')}>Commented Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       <div>
//         {polls && polls.length > 0 ? (
//           polls.map((poll, index) => (
//             <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <h6>{poll.title || 'Poll Title'}</h6>
//                 <p>{poll.description || 'Poll Description'}</p>
//                 {/* Display other poll details as needed */}
//               </Card.Body>
//             </Card>
//           ))
//         ) : (
//           <p>No data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdetails;

//---------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

// const Userdetails = () => {
//  let  userId=sessionStorage.getItem("loginuserId")||sessionStorage.getItem("googleuserId")
//  console.log("userId",userId)
//   const [userData, setUserData] = useState({}); // State to hold user details
//   // const [polls, setPolls] = useState([]); // State to hold polls data
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
// const [createdpolls,setCreatedpolls]=useState("")
// const [votedpolls,setVotedpolls]=useState("")
//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getProfile')
//       .then(response => {
//         setUserData(response.data);
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to fetch created polls
//   const fetchCreatedPolls = () => {
//     const pollId = 'your_poll_id_here'; // Replace with the actual poll_id value
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.created_polls)
//       setCreatedpolls(response.data.user.created_polls); // Set the fetched data to the state
//       setActiveTab('created'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching created polls!', error);
//     });
//   };

//   // Function to fetch voted polls
//   const fetchVotedPolls = () => {
//     const userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId"); // Retrieve the user_id from sessionStorage
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.voted_polls)
//       setVotedpolls(response.data.user.voted_polls); // Set the fetched data to the state
//       setActiveTab('voted'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching voted polls!', error);
//     });
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             <h5>{userId=sessionStorage.getItem("loginuserId")||sessionStorage.getItem("googleuserId")}</h5>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             <Button variant="primary">Edit Profile</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
//             </Col>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       {/* <div>
//         {polls && polls.length > 0 ? (
//           polls.map((poll, index) => (
//             <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <h6>{poll.title || 'Poll Title'}</h6>
//                 <p>{poll.description || 'Poll Description'}</p> */}
//                 {/* Display other poll details as needed */}
//               {/* </Card.Body>
//             </Card>
//         //   )) */}
//         {/* ) : (
//           <p>No data available.</p>
//          )}
//       </div> */}
//     </div>
//   );
// };

// export default Userdetails;

// import React, { useState, useEffect, useContext, useRef } from 'react';
// import { Card, Button, Col, Row, Popover, Overlay, ToastContainer, ProgressBar } from 'react-bootstrap';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { PageContext } from '../App';
// import { toast } from 'react-toastify';
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { useLocation } from 'react-router-dom';

// const Userdetails = (
//   {
//    polls
//   }
// ) => {
//   let userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId");
//   console.log("userId", userId);

//   const [userData, setUserData] = useState({}); // State to hold user details
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
//   const [createdpolls, setCreatedpolls] = useState([]); // State to hold created polls
//   const [votedpolls, setVotedpolls] = useState([]); // State to hold voted polls

//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(""); // New state for likes count
//   let [totallike, setTotallike] = useState(0);
//   let [page, setPage, pollid, setPollid] = useContext(PageContext);
//   // const [liked, setLiked] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showVoteButton, setShowVoteButton] = useState(false);
//   const [hasVoted, setHasVoted] = useState(true);
//   const [voteResults, setVoteResults] = useState([]); // State to hold vote results
// const [totalVotes, setTotalVotes] = useState(0); // State for total votes
// const [isFollowing, setIsFollowing] = useState(false); // State for follow/unfollow

// const [googleuser, setgoogleuser] = useState(
//   sessionStorage.getItem("username")
// );
// let loginuser = useLocation();
// let newuser = loginuser.state;
//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getProfile')
//       .then(response => {
//         setUserData(response.data);
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to fetch created polls
//   const fetchCreatedPolls = () => {
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.created_polls);
//       setCreatedpolls(response.data.user.created_polls || []); // Set the fetched data to the state
//       setActiveTab('created'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching created polls!', error);
//     });
//   };

//   // Function to fetch voted polls
//   const fetchVotedPolls = () => {
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.voted_polls);
//       setVotedpolls(response.data.user.voted_polls || []); // Set the fetched data to the state
//       setActiveTab('voted'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching voted polls!', error);
//     });
//   };

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };
//   const handleLike = () => {
//     // console.log(poll.createdBy._id);
//     axios
//       .post("http://49.204.232.254:64/polls/likeonpoll", {
//         poll_id: polls._id,
//         user_id:polls.userId,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setTotallike(res.data.Total_likes);
//         console.log(res.data.Total_likes);
//         console.log(totallike);
//       });
//   };
//   let handleOnepoll = (_id) => {
//     console.log(_id);
//     // navigate('/onepoll/'+_id
//     setPage("CommentsComp");
//     console.log(page);
//     setPollid(_id);
//     console.log(page, pollid);
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   const handleFollowToggle = () => {
//     // console.log(createdBy)
//     axios
//       .post("http://49.204.232.254:64/api/follow", {
//         user_id: userId,
//         follow_user_id:polls.userId,
//       })
//       .then((response) => {
//         if (response.data.message === "Follower added successfully") {
//           setIsFollowing(true);
//           toast.success("Followed successfully", { autoClose: 1000 });
//           // Swal.fire({
//           //   position: "top-end",
//           //   icon: "success",
//           //   title: "Followed Successfully",
//           //   showConfirmButton: false,
//           //   timer: 1000
//           // });
//         } else if (response.data.message === "Follower removed successfully") {
//           setIsFollowing(false);
//           toast.info("Unfollowed successfully", { autoClose: 1000 });
//           // Swal.fire({
//           //   position: "top-end",
//           //   icon: "warning",
//           //   title: "unFollowed Successfully",
//           //   showConfirmButton: false,
//           //   timer: 1000
//           // });
//         }
//       })
//       .catch((error) => {
//         console.error("Error following/unfollowing user:", error);
//       });
//   };
//   const fetchTotalVotes = () => {
//     axios
//       .post("http://49.204.232.254:64/polls/totalvote", {
//         poll_id: polls._id,
//       })
//       .then((response) => {
//         const updatedVoteResults = response.data.results || [];
//         const updatedTotalVotes = response.data.totalVotes || 0;

//         setVoteResults(updatedVoteResults);
//         setTotalVotes(updatedTotalVotes);
//       })
//       .catch((error) => {
//         console.error("Error fetching total votes:", error);
//       });
//   };
//   const handleVoteToggle = () => {
//     setHasVoted(!hasVoted);
//     //   console.log(hasVoted)
//     console.log(selectedOption, hasVoted);
//     if (selectedOption != null) {
//       const selectedOptionValue = polls.options[selectedOption];
//       console.log(selectedOptionValue);

//       axios
//         .post("http://49.204.232.254:64/polls/voteonpoll", {
//           poll_id: polls._id,
//           user_id: userId,
//           option: selectedOptionValue,
//         })
//         .then((response) => {
//           console.log(response.data);
//           console.log(response.data.message);
//           if (response.data.message === "Vote recorded successfully.") {
//             toast.success("Your vote is successfully registered", {
//               autoClose: 1000,
//             });
//             fetchTotalVotes();
//           } else {
//             toast.info("Your vote is removed successfully", {
//               autoClose: 1000,
//             });
//           }
//           console.log(response.data);
//           setSelectedOption("");
//         })
//         .catch((error) => {
//           console.error("Error submitting vote:", error);
//         });
//     }};

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       setSelectedOption(index); // Select the option
//       setShowVoteButton(true);
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null); // Unselect the currently selected option
//     setShowVoteButton(false);
//   };

//   const calculatePercentage = (votes) => {
//     if (totalVotes === 0) return 0;
//     return ((votes / totalVotes) * 100).toFixed(2); // Return percentage with 2 decimal places
//   };
//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             {/* <h5>{userId}</h5>*/}

//             <h3>
//             {googleuser ? googleuser : newuser}{" "}
//             </h3>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             {/* <Button variant="primary">Edit Profile</Button> */}
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
//             </Col>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       {activeTab === 'created' && (
//         <div>
//           {createdpolls.length > 0 ? (
//             createdpolls.map((poll, index) => (
//               <Card className="mb-4" key={index}>
//                 <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{poll.createdBy.user_name}</h6>
//             {/* <p>Title:{poll.title}</p> */}
//             <p>Status:{poll.status}</p>
//           </div>
//           <Button variant="primary" onClick={handleFollowToggle}>
//             {isFollowing ? "Unfollow" : "Follow"}
//           </Button>
//         </Card.Header>
//         <Card.Text>
//           <div className="mt-3 mb-3">{poll.question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//               <p>Poll Ends on {poll.expirationTime}</p>
//                         <p>
//                           Category:{" "}
//                           {poll.category &&
//                             poll.category.map((item) => item.category_name)}
//                         </p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//     {poll.options && poll.options.length > 0 ? (
//       poll.options.map((option, index) => (
//         <div key={index}>
//           {voteResults.length > 0 ? (
//             // Display the progress bar with percentage after voting
//             <div>
//               <ProgressBar
//                 now={calculatePercentage(voteResults[index]?.votes || 0)}
//                 label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ) : (
//             // Render radio buttons before voting
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index + 1}`}
//                 name="options"
//                 value={option.option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option.option}
//               {/* </label> */}

//             </div>
//           )}
//         </div>
//       ))
//     ) : (
//       <p>No options available</p>
//     )}

//     {selectedOption !== null && voteResults.length === 0 && (
//       <Button
//         variant={hasVoted ? "primary" : "danger"}
//         onClick={handleVoteToggle}
//         className="mt-3 align-self-center"
//       >
//         {hasVoted ? "Vote" : "Unvote"}
//       </Button>
//     )}
//   </Card.Text>

//               <ToastContainer />
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <button
//               onClick={toggleLike}
//               style={{ background: "none", border: "none", cursor: "pointer" }}
//             >
//               <FontAwesomeIcon
//                 icon={liked ? solidHeart : regularHeart}
//                 style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                 onClick={handleLike}
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             // onClick={()=>handleViewComment(index)}
//             onClick={() => handleOnepoll(poll._id)}
//           >
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>

//           <p
//             ref={target}
//             onClick={handleShareClick}
//             style={{ cursor: "pointer" }}
//           >
//             <i className="bi bi-share"></i> Share
//           </p>
//           <Overlay
//             show={showOverlay}
//             target={target.current}
//             placement="top"
//             containerPadding={20}
//             rootClose
//             onHide={() => setShowOverlay(false)}
//           >
//             <Popover id="popover-contained">
//               <Popover.Header as="h3">Share this Poll</Popover.Header>
//               <Popover.Body>
//                 <div className="d-flex justify-content-around">
//                   <a
//                     href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>

//               </Card>
//             ))
//           ) : (
//             <p>No created polls available.</p>
//           )}
//         </div>
//       )}

//       {activeTab === 'voted' && (
//         <div>
//           {votedpolls.length > 0 ? (
//             votedpolls.map((poll, index) => (
//               <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{poll.createdBy.user_name}</h6>
//             {/* <p>Title:{poll.title}</p> */}
//             <p>Status:{poll.status}</p>
//           </div>
//           <Button variant="primary" onClick={handleFollowToggle}>
//             {isFollowing ? "Unfollow" : "Follow"}
//           </Button>
//         </Card.Header>
//         <Card.Text>
//           <div className="mt-3 mb-3">{poll.question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//               <p>Poll Ends on {poll.expirationTime}</p>
//                         <p>
//                           Category:{" "}
//                           {poll.category &&
//                             poll.category.map((item) => item.category_name)}
//                         </p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//     {poll.options && poll.options.length > 0 ? (
//       poll.options.map((option, index) => (
//         <div key={index}>
//           {voteResults.length > 0 ? (
//             // Display the progress bar with percentage after voting
//             <div>
//               <ProgressBar
//                 now={calculatePercentage(voteResults[index]?.votes || 0)}
//                 label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ) : (
//             // Render radio buttons before voting
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index + 1}`}
//                 name="options"
//                 value={option.option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option.option}
//               {/* </label> */}

//             </div>
//           )}
//         </div>
//       ))
//     ) : (
//       <p>No options available</p>
//     )}

//     {selectedOption !== null && voteResults.length === 0 && (
//       <Button
//         variant={hasVoted ? "primary" : "danger"}
//         onClick={handleVoteToggle}
//         className="mt-3 align-self-center"
//       >
//         {hasVoted ? "Vote" : "Unvote"}
//       </Button>
//     )}
//   </Card.Text>

//               <ToastContainer />
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <button
//               onClick={toggleLike}
//               style={{ background: "none", border: "none", cursor: "pointer" }}
//             >
//               <FontAwesomeIcon
//                 icon={liked ? solidHeart : regularHeart}
//                 style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                 onClick={handleLike}
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             // onClick={()=>handleViewComment(index)}
//             onClick={() => handleOnepoll(poll._id)}
//           >
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>

//           <p
//             ref={target}
//             onClick={handleShareClick}
//             style={{ cursor: "pointer" }}
//           >
//             <i className="bi bi-share"></i> Share
//           </p>
//           <Overlay
//             show={showOverlay}
//             target={target.current}
//             placement="top"
//             containerPadding={20}
//             rootClose
//             onHide={() => setShowOverlay(false)}
//           >
//             <Popover id="popover-contained">
//               <Popover.Header as="h3">Share this Poll</Popover.Header>
//               <Popover.Body>
//                 <div className="d-flex justify-content-around">
//                   <a
//                     href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>
//               </Card>
//             ))
//           ) : (
//             <p>No voted polls available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Userdetails;

//updated one

// import React, { useState, useEffect, useContext, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, Button, Col, Row, Popover, Overlay, ToastContainer, ProgressBar } from 'react-bootstrap';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { PageContext } from '../App';
// import { toast } from 'react-toastify';
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { useLocation } from 'react-router-dom';

// const Userdetails = (
//   {
//    polls
//   }
// ) => {
//   let userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId");
//   console.log("userId", userId);

//   const [userData, setUserData] = useState({}); // State to hold user details
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
//   const [createdpolls, setCreatedpolls] = useState([]); // State to hold created polls
//   const [votedpolls, setVotedpolls] = useState([]); // State to hold voted polls

//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(""); // New state for likes count
//   let [totallike, setTotallike] = useState(0);
//   let [page, setPage, pollid, setPollid] = useContext(PageContext);
//   // const [liked, setLiked] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showVoteButton, setShowVoteButton] = useState(false);
//   const [hasVoted, setHasVoted] = useState(true);
//   const [voteResults, setVoteResults] = useState([]); // State to hold vote results
// const [totalVotes, setTotalVotes] = useState(0); // State for total votes
// const [isFollowing, setIsFollowing] = useState(false); // State for follow/unfollow

// const navigate = useNavigate();

// const [googleuser, setgoogleuser] = useState(
//   sessionStorage.getItem("username")
// );
// let loginuser = useLocation();
// let newuser = loginuser.state;
//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getProfile')
//       .then(response => {
//         setUserData(response.data);
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to fetch created polls
//   const fetchCreatedPolls = () => {
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.created_polls);
//       setCreatedpolls(response.data.user.created_polls || []); // Set the fetched data to the state
//       setActiveTab('created'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching created polls!', error);
//     });
//   };

//   // Function to fetch voted polls
//   const fetchVotedPolls = () => {
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.voted_polls);
//       setVotedpolls(response.data.user.voted_polls || []); // Set the fetched data to the state
//       setActiveTab('voted'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching voted polls!', error);
//     });
//   };

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };
//   const handleLike = () => {
//     // console.log(poll.createdBy._id);
//     axios
//       .post("http://49.204.232.254:64/polls/likeonpoll", {
//         poll_id: polls._id,
//         user_id:polls.userId,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setTotallike(res.data.Total_likes);
//         console.log(res.data.Total_likes);
//         console.log(totallike);
//       });
//   };
//   let handleOnepoll = (_id) => {
//     console.log(_id);
//     // navigate('/onepoll/'+_id
//     setPage("CommentsComp");
//     console.log(page);
//     setPollid(_id);
//     console.log(page, pollid);
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   const handleFollowToggle = () => {
//     // console.log(createdBy)
//     axios
//       .post("http://49.204.232.254:64/api/follow", {
//         user_id: userId,
//         follow_user_id:polls.userId,
//       })
//       .then((response) => {
//         if (response.data.message === "Follower added successfully") {
//           setIsFollowing(true);
//           toast.success("Followed successfully", { autoClose: 1000 });
//           // Swal.fire({
//           //   position: "top-end",
//           //   icon: "success",
//           //   title: "Followed Successfully",
//           //   showConfirmButton: false,
//           //   timer: 1000
//           // });
//         } else if (response.data.message === "Follower removed successfully") {
//           setIsFollowing(false);
//           toast.info("Unfollowed successfully", { autoClose: 1000 });
//           // Swal.fire({
//           //   position: "top-end",
//           //   icon: "warning",
//           //   title: "unFollowed Successfully",
//           //   showConfirmButton: false,
//           //   timer: 1000
//           // });
//         }
//       })
//       .catch((error) => {
//         console.error("Error following/unfollowing user:", error);
//       });
//   };
//   const fetchTotalVotes = () => {
//     axios
//       .post("http://49.204.232.254:64/polls/totalvote", {
//         poll_id: polls._id,
//       })
//       .then((response) => {
//         const updatedVoteResults = response.data.results || [];
//         const updatedTotalVotes = response.data.totalVotes || 0;

//         setVoteResults(updatedVoteResults);
//         setTotalVotes(updatedTotalVotes);
//       })
//       .catch((error) => {
//         console.error("Error fetching total votes:", error);
//       });
//   };
//   const handleVoteToggle = () => {
//     setHasVoted(!hasVoted);
//     //   console.log(hasVoted)
//     console.log(selectedOption, hasVoted);
//     if (selectedOption != null) {
//       const selectedOptionValue = polls.options[selectedOption];
//       console.log(selectedOptionValue);

//       axios
//         .post("http://49.204.232.254:64/polls/voteonpoll", {
//           poll_id: polls._id,
//           user_id: userId,
//           option: selectedOptionValue,
//         })
//         .then((response) => {
//           console.log(response.data);
//           console.log(response.data.message);
//           if (response.data.message === "Vote recorded successfully.") {
//             toast.success("Your vote is successfully registered", {
//               autoClose: 1000,
//             });
//             fetchTotalVotes();
//           } else {
//             toast.info("Your vote is removed successfully", {
//               autoClose: 1000,
//             });
//           }
//           console.log(response.data);
//           setSelectedOption("");
//         })
//         .catch((error) => {
//           console.error("Error submitting vote:", error);
//         });
//     }};

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       setSelectedOption(index); // Select the option
//       setShowVoteButton(true);
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null); // Unselect the currently selected option
//     setShowVoteButton(false);
//   };

//   const calculatePercentage = (votes) => {
//     if (totalVotes === 0) return 0;
//     return ((votes / totalVotes) * 100).toFixed(2); // Return percentage with 2 decimal places
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm("Are you sure you want to delete your account?")) {
//       axios
//         .delete('http://49.204.232.254:64/api/deleteuser', {
//           // data: { identifier: number },
//         })
//         .then((response) => {
//           if (response.status === 200) {
//             alert('Account deleted successfully');
//             navigate('/');
//           }
//         })
//         .catch((error) => {
//           console.error('There was an error deleting the account!', error);
//           alert('Failed to delete account. Please try again.');
//         });
//     }
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             {/* <h5>{userId}</h5>*/}

//             <h3>
//             {googleuser ? googleuser : newuser}{" "}
//             </h3>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             {/* <Button variant="primary">Edit Profile</Button> */}
//             <button className="btn btn-danger" onClick={handleDeleteAccount}>
//       Delete Account
//     </button>

//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
//             </Col>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       {activeTab === 'created' && (
//         <div>
//           {createdpolls.length > 0 ? (
//             createdpolls.map((poll, index) => (
//               <Card className="mb-4" key={index}>
//                 <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{poll.createdBy.user_name}</h6>
//             {/* <p>Title:{poll.title}</p> */}
//             <p>Status:{poll.status}</p>
//           </div>
//           <Button variant="primary" onClick={handleFollowToggle}>
//             {isFollowing ? "Unfollow" : "Follow"}
//           </Button>
//         </Card.Header>
//         <Card.Text>
//           <div className="mt-3 mb-3">{poll.question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//               <p>Poll Ends on {poll.expirationTime}</p>
//                         <p>
//                           Category:{" "}
//                           {poll.category &&
//                             poll.category.map((item) => item.category_name)}
//                         </p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//     {poll.options && poll.options.length > 0 ? (
//       poll.options.map((option, index) => (
//         <div key={index}>
//           {voteResults.length > 0 ? (
//             // Display the progress bar with percentage after voting
//             <div>
//               <ProgressBar
//                 now={calculatePercentage(voteResults[index]?.votes || 0)}
//                 label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ) : (
//             // Render radio buttons before voting
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index + 1}`}
//                 name="options"
//                 value={option.option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option.option}
//               {/* </label> */}

//             </div>
//           )}
//         </div>
//       ))
//     ) : (
//       <p>No options available</p>
//     )}

//     {selectedOption !== null && voteResults.length === 0 && (
//       <Button
//         variant={hasVoted ? "primary" : "danger"}
//         onClick={handleVoteToggle}
//         className="mt-3 align-self-center"
//       >
//         {hasVoted ? "Vote" : "Unvote"}
//       </Button>
//     )}
//   </Card.Text>

//               <ToastContainer />
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <button
//               onClick={toggleLike}
//               style={{ background: "none", border: "none", cursor: "pointer" }}
//             >
//               <FontAwesomeIcon
//                 icon={liked ? solidHeart : regularHeart}
//                 style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                 onClick={handleLike}
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             // onClick={()=>handleViewComment(index)}
//             onClick={() => handleOnepoll(poll._id)}
//           >
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>

//           <p
//             ref={target}
//             onClick={handleShareClick}
//             style={{ cursor: "pointer" }}
//           >
//             <i className="bi bi-share"></i> Share
//           </p>
//           <Overlay
//             show={showOverlay}
//             target={target.current}
//             placement="top"
//             containerPadding={20}
//             rootClose
//             onHide={() => setShowOverlay(false)}
//           >
//             <Popover id="popover-contained">
//               <Popover.Header as="h3">Share this Poll</Popover.Header>
//               <Popover.Body>
//                 <div className="d-flex justify-content-around">
//                   <a
//                     href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>

//               </Card>
//             ))
//           ) : (
//             <p>No created polls available.</p>
//           )}
//         </div>
//       )}

//       {activeTab === 'voted' && (
//         <div>
//           {votedpolls.length > 0 ? (
//             votedpolls.map((poll, index) => (
//               <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{poll.createdBy.user_name}</h6>
//             {/* <p>Title:{poll.title}</p> */}
//             <p>Status:{poll.status}</p>
//           </div>
//           <Button variant="primary" onClick={handleFollowToggle}>
//             {isFollowing ? "Unfollow" : "Follow"}
//           </Button>
//         </Card.Header>
//         <Card.Text>
//           <div className="mt-3 mb-3">{poll.question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//               <p>Poll Ends on {poll.expirationTime}</p>
//                         <p>
//                           Category:{" "}
//                           {poll.category &&
//                             poll.category.map((item) => item.category_name)}
//                         </p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//     {poll.options && poll.options.length > 0 ? (
//       poll.options.map((option, index) => (
//         <div key={index}>
//           {voteResults.length > 0 ? (
//             // Display the progress bar with percentage after voting
//             <div>
//               <ProgressBar
//                 now={calculatePercentage(voteResults[index]?.votes || 0)}
//                 label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ) : (
//             // Render radio buttons before voting
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index + 1}`}
//                 name="options"
//                 value={option.option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option.option}
//               {/* </label> */}

//             </div>
//           )}
//         </div>
//       ))
//     ) : (
//       <p>No options available</p>
//     )}

//     {selectedOption !== null && voteResults.length === 0 && (
//       <Button
//         variant={hasVoted ? "primary" : "danger"}
//         onClick={handleVoteToggle}
//         className="mt-3 align-self-center"
//       >
//         {hasVoted ? "Vote" : "Unvote"}
//       </Button>
//     )}
//   </Card.Text>

//               <ToastContainer />
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <button
//               onClick={toggleLike}
//               style={{ background: "none", border: "none", cursor: "pointer" }}
//             >
//               <FontAwesomeIcon
//                 icon={liked ? solidHeart : regularHeart}
//                 style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                 onClick={handleLike}
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             // onClick={()=>handleViewComment(index)}
//             onClick={() => handleOnepoll(poll._id)}
//           >
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>

//           <p
//             ref={target}
//             onClick={handleShareClick}
//             style={{ cursor: "pointer" }}
//           >
//             <i className="bi bi-share"></i> Share
//           </p>
//           <Overlay
//             show={showOverlay}
//             target={target.current}
//             placement="top"
//             containerPadding={20}
//             rootClose
//             onHide={() => setShowOverlay(false)}
//           >
//             <Popover id="popover-contained">
//               <Popover.Header as="h3">Share this Poll</Popover.Header>
//               <Popover.Body>
//                 <div className="d-flex justify-content-around">
//                   <a
//                     href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>
//               </Card>
//             ))
//           ) : (
//             <p>No voted polls available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Userdetails;

////----------------

// import React from 'react'
// import {Card , Button,} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function Userdetails() {
//   return (
//     <div>
// <Card className="user-profile-card">
//       <Card.Body className="text-center">
//         <img src="/path-to-profile-pic" alt="Profile" className="profile-pic mb-3" />
//         <Card.Title>SANJAY</Card.Title>
//         <Card.Text>@SANJAY1987765</Card.Text>
//         <Card.Text>Joined May 2024</Card.Text>
//         <Card.Text>10 Following | 0 Followers</Card.Text>
//         <Button variant="primary" className="mb-2">Get verified</Button>
//         <Button variant="secondary" className="edit-profile-button">Edit profile</Button>
//       </Card.Body>
//     </Card>

//     </div>
//   )
// }

// export default Userdetails

// import React, { useState, useEffect } from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

// const Userdetails = () => {
//   const [userData, setUserData] = useState({}); // State to hold user details
//   const [polls, setPolls] = useState([]); // State to hold polls data
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image

//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getone')
//       .then(response => {
//         setUserData(response.data); // Set the user data to the state
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to handle button clicks and API calls for polls
//   const handleButtonClick = (type) => {
//     let url = '';

//     switch (type) {
//       case 'created':
//         url = 'http://49.204.232.254:64/polls/getall';
//         break;
//       case 'voted':
//         url = 'http://49.204.232.254:64/polls/getvoted';
//         break;
//       case 'liked':
//         url = 'http://49.204.232.254:64/polls/likeonpoll';
//         break;
//       case 'commented':
//         url = 'http://49.204.232.254:64/comment/getbyid';
//         break;
//       default:
//         return;
//     }

//     axios.get(url)
//       .then(response => {
//         setPolls(response.data); // Set the fetched data to the state
//         setActiveTab(type); // Update the active tab
//       })
//       .catch(error => {
//         console.error('There was an error fetching the data!', error);
//       });
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             <h5>{userData.username || 'User Name'}</h5>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             <Button variant="primary">User Details</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('created')}>Created Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('voted')}>Voted Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('liked')}>Liked Polls</Button>
//             </Col>
//             <Col>
//               <Button variant="info" onClick={() => handleButtonClick('commented')}>Commented Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       <div>
//         {polls && polls.length > 0 ? (
//           polls.map((poll, index) => (
//             <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <h6>{poll.title || 'Poll Title'}</h6>
//                 <p>{poll.description || 'Poll Description'}</p>
//                 {/* Display other poll details as needed */}
//               </Card.Body>
//             </Card>
//           ))
//         ) : (
//           <p>No data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Userdetails;

//---------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Card, Button, Col, Row } from 'react-bootstrap';
// import axios from 'axios';

// const Userdetails = () => {
//  let  userId=sessionStorage.getItem("loginuserId")||sessionStorage.getItem("googleuserId")
//  console.log("userId",userId)
//   const [userData, setUserData] = useState({}); // State to hold user details
//   // const [polls, setPolls] = useState([]); // State to hold polls data
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
// const [createdpolls,setCreatedpolls]=useState("")
// const [votedpolls,setVotedpolls]=useState("")
//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getProfile')
//       .then(response => {
//         setUserData(response.data);
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to fetch created polls
//   const fetchCreatedPolls = () => {
//     const pollId = 'your_poll_id_here'; // Replace with the actual poll_id value
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.created_polls)
//       setCreatedpolls(response.data.user.created_polls); // Set the fetched data to the state
//       setActiveTab('created'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching created polls!', error);
//     });
//   };

//   // Function to fetch voted polls
//   const fetchVotedPolls = () => {
//     const userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId"); // Retrieve the user_id from sessionStorage
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.voted_polls)
//       setVotedpolls(response.data.user.voted_polls); // Set the fetched data to the state
//       setActiveTab('voted'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching voted polls!', error);
//     });
//   };

//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             <h5>{userId=sessionStorage.getItem("loginuserId")||sessionStorage.getItem("googleuserId")}</h5>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             <Button variant="primary">Edit Profile</Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
//             </Col>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       {/* <div>
//         {polls && polls.length > 0 ? (
//           polls.map((poll, index) => (
//             <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <h6>{poll.title || 'Poll Title'}</h6>
//                 <p>{poll.description || 'Poll Description'}</p> */}
//                 {/* Display other poll details as needed */}
//               {/* </Card.Body>
//             </Card>
//         //   )) */}
//         {/* ) : (
//           <p>No data available.</p>
//          )}
//       </div> */}
//     </div>
//   );
// };

// export default Userdetails;

// import React, { useState, useEffect, useContext, useRef } from 'react';
// import { Card, Button, Col, Row, Popover, Overlay, ToastContainer, ProgressBar } from 'react-bootstrap';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { PageContext } from '../App';
// import { toast } from 'react-toastify';
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { useLocation } from 'react-router-dom';

// const Userdetails = (
//   {
//    polls
//   }
// ) => {
//   let userId = sessionStorage.getItem("loginuserId") || sessionStorage.getItem("googleuserId");
//   console.log("userId", userId);

//   const [userData, setUserData] = useState({}); // State to hold user details
//   const [activeTab, setActiveTab] = useState(''); // State to keep track of the active tab
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150'); // State to manage profile image
//   const [createdpolls, setCreatedpolls] = useState([]); // State to hold created polls
//   const [votedpolls, setVotedpolls] = useState([]); // State to hold voted polls

//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(""); // New state for likes count
//   let [totallike, setTotallike] = useState(0);
//   let [page, setPage, pollid, setPollid] = useContext(PageContext);
//   // const [liked, setLiked] = useState(false);
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showVoteButton, setShowVoteButton] = useState(false);
//   const [hasVoted, setHasVoted] = useState(true);
//   const [voteResults, setVoteResults] = useState([]); // State to hold vote results
// const [totalVotes, setTotalVotes] = useState(0); // State for total votes
// const [isFollowing, setIsFollowing] = useState(false); // State for follow/unfollow

// const [googleuser, setgoogleuser] = useState(
//   sessionStorage.getItem("username")
// );
// let loginuser = useLocation();
// let newuser = loginuser.state;
//   // Fetch user details when the component mounts
//   useEffect(() => {
//     axios.get('http://49.204.232.254:64/api/getProfile')
//       .then(response => {
//         setUserData(response.data);
//         if (response.data.profileImage) {
//           setProfileImage(response.data.profileImage); // Set the profile image if available in response
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//       });
//   }, []);

//   // Function to handle image file input changes
//   const handleImageChange = (event) => {
//     const file = event.target.files[0]; // Get the selected file
//     if (file) {
//       const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
//       setProfileImage(imageURL); // Update the profile image state with the new image URL
//     }
//   };

//   // Function to fetch created polls
//   const fetchCreatedPolls = () => {
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.created_polls);
//       setCreatedpolls(response.data.user.created_polls || []); // Set the fetched data to the state
//       setActiveTab('created'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching created polls!', error);
//     });
//   };

//   // Function to fetch voted polls
//   const fetchVotedPolls = () => {
//     axios.post('http://49.204.232.254:64/api/getProfile', {
//       user_id: userId
//     })
//     .then(response => {
//       console.log(response.data.user.voted_polls);
//       setVotedpolls(response.data.user.voted_polls || []); // Set the fetched data to the state
//       setActiveTab('voted'); // Update the active tab
//     })
//     .catch(error => {
//       console.error('There was an error fetching voted polls!', error);
//     });
//   };

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };
//   const handleLike = () => {
//     // console.log(poll.createdBy._id);
//     axios
//       .post("http://49.204.232.254:64/polls/likeonpoll", {
//         poll_id: polls._id,
//         user_id:polls.userId,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setTotallike(res.data.Total_likes);
//         console.log(res.data.Total_likes);
//         console.log(totallike);
//       });
//   };
//   let handleOnepoll = (_id) => {
//     console.log(_id);
//     // navigate('/onepoll/'+_id
//     setPage("CommentsComp");
//     console.log(page);
//     setPollid(_id);
//     console.log(page, pollid);
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   const handleFollowToggle = () => {
//     // console.log(createdBy)
//     axios
//       .post("http://49.204.232.254:64/api/follow", {
//         user_id: userId,
//         follow_user_id:polls.userId,
//       })
//       .then((response) => {
//         if (response.data.message === "Follower added successfully") {
//           setIsFollowing(true);
//           toast.success("Followed successfully", { autoClose: 1000 });
//           // Swal.fire({
//           //   position: "top-end",
//           //   icon: "success",
//           //   title: "Followed Successfully",
//           //   showConfirmButton: false,
//           //   timer: 1000
//           // });
//         } else if (response.data.message === "Follower removed successfully") {
//           setIsFollowing(false);
//           toast.info("Unfollowed successfully", { autoClose: 1000 });
//           // Swal.fire({
//           //   position: "top-end",
//           //   icon: "warning",
//           //   title: "unFollowed Successfully",
//           //   showConfirmButton: false,
//           //   timer: 1000
//           // });
//         }
//       })
//       .catch((error) => {
//         console.error("Error following/unfollowing user:", error);
//       });
//   };
//   const fetchTotalVotes = () => {
//     axios
//       .post("http://49.204.232.254:64/polls/totalvote", {
//         poll_id: polls._id,
//       })
//       .then((response) => {
//         const updatedVoteResults = response.data.results || [];
//         const updatedTotalVotes = response.data.totalVotes || 0;

//         setVoteResults(updatedVoteResults);
//         setTotalVotes(updatedTotalVotes);
//       })
//       .catch((error) => {
//         console.error("Error fetching total votes:", error);
//       });
//   };
//   const handleVoteToggle = () => {
//     setHasVoted(!hasVoted);
//     //   console.log(hasVoted)
//     console.log(selectedOption, hasVoted);
//     if (selectedOption != null) {
//       const selectedOptionValue = polls.options[selectedOption];
//       console.log(selectedOptionValue);

//       axios
//         .post("http://49.204.232.254:64/polls/voteonpoll", {
//           poll_id: polls._id,
//           user_id: userId,
//           option: selectedOptionValue,
//         })
//         .then((response) => {
//           console.log(response.data);
//           console.log(response.data.message);
//           if (response.data.message === "Vote recorded successfully.") {
//             toast.success("Your vote is successfully registered", {
//               autoClose: 1000,
//             });
//             fetchTotalVotes();
//           } else {
//             toast.info("Your vote is removed successfully", {
//               autoClose: 1000,
//             });
//           }
//           console.log(response.data);
//           setSelectedOption("");
//         })
//         .catch((error) => {
//           console.error("Error submitting vote:", error);
//         });
//     }};

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       setSelectedOption(index); // Select the option
//       setShowVoteButton(true);
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null); // Unselect the currently selected option
//     setShowVoteButton(false);
//   };

//   const calculatePercentage = (votes) => {
//     if (totalVotes === 0) return 0;
//     return ((votes / totalVotes) * 100).toFixed(2); // Return percentage with 2 decimal places
//   };
//   return (
//     <div>
//       {/* Profile Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <div className="text-center">
//             {/* Profile Image */}
//             <img src={profileImage} alt="profile" className="rounded-circle" style={{ width: '150px', height: '150px' }} />

//             {/* Input to Upload Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: '10px' }}
//             />

//             {/* Display User Name and Stats */}
//             {/* <h5>{userId}</h5>*/}

//             <h3>
//             {googleuser ? googleuser : newuser}{" "}
//             </h3>
//             <p>{userData.posts || 0} post | {userData.followers || 0} Follower | {userData.following || 0} Following</p>
//             {/* <Button variant="primary">Edit Profile</Button> */}
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Main Content - Polls Section */}
//       <Card className="mb-4">
//         <Card.Body>
//           <Row>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "70px" }} onClick={fetchCreatedPolls}>Created Polls</Button>
//             </Col>
//             <Col sm={6}>
//               <Button variant="info" style={{ marginLeft: "90px" }} onClick={fetchVotedPolls}>Voted Polls</Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* Display the Fetched Polls */}
//       {activeTab === 'created' && (
//         <div>
//           {createdpolls.length > 0 ? (
//             createdpolls.map((poll, index) => (
//               <Card className="mb-4" key={index}>
//                 <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{poll.createdBy.user_name}</h6>
//             {/* <p>Title:{poll.title}</p> */}
//             <p>Status:{poll.status}</p>
//           </div>
//           <Button variant="primary" onClick={handleFollowToggle}>
//             {isFollowing ? "Unfollow" : "Follow"}
//           </Button>
//         </Card.Header>
//         <Card.Text>
//           <div className="mt-3 mb-3">{poll.question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//               <p>Poll Ends on {poll.expirationTime}</p>
//                         <p>
//                           Category:{" "}
//                           {poll.category &&
//                             poll.category.map((item) => item.category_name)}
//                         </p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//     {poll.options && poll.options.length > 0 ? (
//       poll.options.map((option, index) => (
//         <div key={index}>
//           {voteResults.length > 0 ? (
//             // Display the progress bar with percentage after voting
//             <div>
//               <ProgressBar
//                 now={calculatePercentage(voteResults[index]?.votes || 0)}
//                 label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ) : (
//             // Render radio buttons before voting
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index + 1}`}
//                 name="options"
//                 value={option.option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option.option}
//               {/* </label> */}

//             </div>
//           )}
//         </div>
//       ))
//     ) : (
//       <p>No options available</p>
//     )}

//     {selectedOption !== null && voteResults.length === 0 && (
//       <Button
//         variant={hasVoted ? "primary" : "danger"}
//         onClick={handleVoteToggle}
//         className="mt-3 align-self-center"
//       >
//         {hasVoted ? "Vote" : "Unvote"}
//       </Button>
//     )}
//   </Card.Text>

//               <ToastContainer />
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <button
//               onClick={toggleLike}
//               style={{ background: "none", border: "none", cursor: "pointer" }}
//             >
//               <FontAwesomeIcon
//                 icon={liked ? solidHeart : regularHeart}
//                 style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                 onClick={handleLike}
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             // onClick={()=>handleViewComment(index)}
//             onClick={() => handleOnepoll(poll._id)}
//           >
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>

//           <p
//             ref={target}
//             onClick={handleShareClick}
//             style={{ cursor: "pointer" }}
//           >
//             <i className="bi bi-share"></i> Share
//           </p>
//           <Overlay
//             show={showOverlay}
//             target={target.current}
//             placement="top"
//             containerPadding={20}
//             rootClose
//             onHide={() => setShowOverlay(false)}
//           >
//             <Popover id="popover-contained">
//               <Popover.Header as="h3">Share this Poll</Popover.Header>
//               <Popover.Body>
//                 <div className="d-flex justify-content-around">
//                   <a
//                     href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>

//               </Card>
//             ))
//           ) : (
//             <p>No created polls available.</p>
//           )}
//         </div>
//       )}

//       {activeTab === 'voted' && (
//         <div>
//           {votedpolls.length > 0 ? (
//             votedpolls.map((poll, index) => (
//               <Card className="mb-4" key={index}>
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{poll.createdBy.user_name}</h6>
//             {/* <p>Title:{poll.title}</p> */}
//             <p>Status:{poll.status}</p>
//           </div>
//           <Button variant="primary" onClick={handleFollowToggle}>
//             {isFollowing ? "Unfollow" : "Follow"}
//           </Button>
//         </Card.Header>
//         <Card.Text>
//           <div className="mt-3 mb-3">{poll.question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//               <p>Poll Ends on {poll.expirationTime}</p>
//                         <p>
//                           Category:{" "}
//                           {poll.category &&
//                             poll.category.map((item) => item.category_name)}
//                         </p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//     {poll.options && poll.options.length > 0 ? (
//       poll.options.map((option, index) => (
//         <div key={index}>
//           {voteResults.length > 0 ? (
//             // Display the progress bar with percentage after voting
//             <div>
//               <ProgressBar
//                 now={calculatePercentage(voteResults[index]?.votes || 0)}
//                 label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ) : (
//             // Render radio buttons before voting
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 id={`option${index + 1}`}
//                 name="options"
//                 value={option.option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option.option}
//               {/* </label> */}

//             </div>
//           )}
//         </div>
//       ))
//     ) : (
//       <p>No options available</p>
//     )}

//     {selectedOption !== null && voteResults.length === 0 && (
//       <Button
//         variant={hasVoted ? "primary" : "danger"}
//         onClick={handleVoteToggle}
//         className="mt-3 align-self-center"
//       >
//         {hasVoted ? "Vote" : "Unvote"}
//       </Button>
//     )}
//   </Card.Text>

//               <ToastContainer />
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <button
//               onClick={toggleLike}
//               style={{ background: "none", border: "none", cursor: "pointer" }}
//             >
//               <FontAwesomeIcon
//                 icon={liked ? solidHeart : regularHeart}
//                 style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                 onClick={handleLike}
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             // onClick={()=>handleViewComment(index)}
//             onClick={() => handleOnepoll(poll._id)}
//           >
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>

//           <p
//             ref={target}
//             onClick={handleShareClick}
//             style={{ cursor: "pointer" }}
//           >
//             <i className="bi bi-share"></i> Share
//           </p>
//           <Overlay
//             show={showOverlay}
//             target={target.current}
//             placement="top"
//             containerPadding={20}
//             rootClose
//             onHide={() => setShowOverlay(false)}
//           >
//             <Popover id="popover-contained">
//               <Popover.Header as="h3">Share this Poll</Popover.Header>
//               <Popover.Body>
//                 <div className="d-flex justify-content-around">
//                   <a
//                     href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   &nbsp;&nbsp;
//                   <a
//                     href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>
//               </Card>
//             ))
//           ) : (
//             <p>No voted polls available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Userdetails;

//updated one

import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Col,
  Row,
  Popover,
  Overlay,
  ToastContainer,
  ProgressBar,
} from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageContext } from "../Components/Homepage";
import { toast } from "react-toastify";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";

const Userdetails = ({ polls, polluserId, poll, options, optionscount }) => {
  let userId =
    sessionStorage.getItem("loginuserId") ||
    sessionStorage.getItem("googleuserId");
  console.log("userId", userId);

  const [
    page,
    setPage,
    pollid,
    setPollid,
    isFollowing,
    setIsFollowing,
    followStatus,
    setFollowStatus,
    totallike,
    setTotallike,
    liked,
    setLiked,
    likeCount,
    setLikeCount,
    likedPolls, setLikedPolls,
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
    hasVotedbutton,
    setHasvotedbutton,
  ] = useContext(PageContext);

  const [userData, setUserData] = useState(""); // State to hold user details
  const [activeTab, setActiveTab] = useState(""); // State to keep track of the active tab
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  ); // State to manage profile image
  const [createdpolls, setCreatedpolls] = useState([]); // State to hold created polls
  const [votedpolls, setVotedpolls] = useState([]); // State to hold voted polls

  // const [liked, setLiked] = useState(false); // New state for likes
  // const [likeCount, setLikeCount] = useState(""); // New state for likes count
  // let [totallike, setTotallike] = useState(0);

  // const [liked, setLiked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
  const target = useRef(null); // Reference for the share button

  //   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
  //   const [showVoteButton, setShowVoteButton] = useState(false);
  //   const [hasVoted, setHasVoted] = useState(true);
  //   const [voteResults, setVoteResults] = useState([]); // State to hold vote results
  // const [totalVotes, setTotalVotes] = useState(0); // State for total votes
  // const [isFollowing, setIsFollowing] = useState(false); // State for follow/unfollow

  const [phone_number, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const [googleuser, setgoogleuser] = useState(
    sessionStorage.getItem("username")
  );
  let loginuser = useLocation();
  let newuser = loginuser.state;

  let data = { user_id: userId };
  console.log("data", data);
  // Fetch user details when the component mounts
  useEffect(() => {
    console.log(data);
    axios
      .post("http://49.204.232.254:64/api/getProfile", {
        user_id: userId,
      })
      .then((response) => {
        console.log(response.data);
        setPhoneNumber(response.data.user.phone_number);
        setUserData(response.data);
        if (response.data.profileImage) {
          setProfileImage(response.data.profileImage); // Set the profile image if available in response
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the user details!", error);
      });
  }, []);

  // Function to handle image file input changes
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a URL for the selected image
      setProfileImage(imageURL); // Update the profile image state with the new image URL
    }
  };

  // Function to fetch created polls
  const fetchCreatedPolls = () => {
    axios
      .post("http://49.204.232.254:64/api/getProfile", {
        user_id: userId,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.user.created_polls);
        // setPhoneNumber(response.data.)
        setCreatedpolls(response.data.user.created_polls || []); // Set the fetched data to the state
        setActiveTab("created"); // Update the active tab
      })
      .catch((error) => {
        console.error("There was an error fetching created polls!", error);
      });
  };

  // Function to fetch voted polls
  const fetchVotedPolls = () => {
    axios
      .post("http://49.204.232.254:64/api/getProfile", {
        user_id: userId,
      })
      .then((response) => {
        console.log(response.data.user.voted_polls);
        setVotedpolls(response.data.user.voted_polls || []); // Set the fetched data to the state
        setActiveTab("voted"); // Update the active tab
      })
      .catch((error) => {
        console.error("There was an error fetching voted polls!", error);
      });
  };

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };
  const handleLike = () => {
    // console.log(poll.createdBy._id);
    axios
      .post("http://49.204.232.254:64/polls/likeonpoll", {
        poll_id: polls._id,
        user_id: polls.userId,
      })
      .then((res) => {
        console.log(res.data);
        setTotallike(res.data.Total_likes);
        console.log(res.data.Total_likes);
        console.log(totallike);
      });
  };
  let handleOnepoll = (_id) => {
    console.log(_id);
    // navigate('/onepoll/'+_id
    setPage("CommentsComp");
    console.log(page);
    setPollid(_id);
    console.log(page, pollid);
  };

  const handleShareClick = () => {
    setShowOverlay(!showOverlay); // Toggle the overlay visibility
  };

  const handleFollowToggle = (polluserId) => {
    const isFollowing = followStatus[polluserId] || false;

    axios
      .post("http://49.204.232.254:64/api/follow", {
        follow_user_id: polluserId,
        user_id: userId,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Follower added successfully") {
          setFollowStatus((prevState) => ({
            ...prevState,
            [polluserId]: true,
          }));
        } else if (res.data.message === "Follower removed successfully") {
          setFollowStatus((prevState) => ({
            ...prevState,
            [polluserId]: false,
          }));
        }
      })
      .catch((err) => {
        console.error("Error in follow/unfollow request:", err);
      });
  };
  const fetchTotalVotes = () => {
    axios
      .post("http://49.204.232.254:64/polls/totalvote", {
        poll_id: poll._id,
      })
      .then((response) => {
        const updatedVoteResults = response.data.results || [];
        const updatedTotalVotes = response.data.totalVotes || 0;

        setVoteResults(updatedVoteResults);
        setTotalVotes(updatedTotalVotes);
      })
      .catch((error) => {
        console.error("Error fetching total votes:", error);
      });
  };
  const handleVoteToggle = (poll_id, option) => {
    console.log(poll_id, userId, option);
    const selectedOptionValue = options[selectedOption];

    axios
      .post("http://49.204.232.254:64/polls/voteonpoll", {
        poll_id: poll._id,
        user_id: userId,
        option: selectedOptionValue,
      })
      .then((res) => {
        console.log(res.data.message);

        if (res.data.message === "Vote recorded successfully.") {
          alert("Voted");
          setHasVoted((prevState) => ({
            ...prevState,
            [poll_id]: true,
          }));
        } else if (
          res.data.message === "Vote removed successfully. Please vote again."
        ) {
          alert("Unvoted");
          setHasVoted((prevState) => ({
            ...prevState,
            [poll_id]: false,
          }));
        } else {
          setHasVoted((prevState) => ({
            ...prevState,
            [poll_id]: false,
          }));
        }

        // handleOnepoll(poll_id);
      });
  };

  useEffect(() => {
    if (poll) {
      setHasVoted((prevState) => ({
        ...prevState,
        [poll._id]: poll.voters.some((voter) => voter._id === userId),
      }));
    }
  }, [poll, userId]);

  const handleOptionChange = (index) => {
    if (selectedOption === index) {
      unselectOption(); // Unselect the option if it's already selected
    } else {
      setSelectedOption(index); // Select the option
      setShowVoteButton(true);
    }
  };

  const unselectOption = () => {
    setSelectedOption(null); // Unselect the currently selected option
    setShowVoteButton(false);
  };

  const calculatePercentage = (votes) => {
    if (totalVotes === 0) return 0;
    return ((votes / totalVotes) * 100).toFixed(2); // Return percentage with 2 decimal places
  };

  const handleDeleteAccount = () => {
    console.log("phone_number", phone_number);
    if (window.confirm("Are you sure you want to delete your account?")) {
      axios
        .post("http://49.204.232.254:64/api/deleteuser", {
          identifier: phone_number,
        })
        .then((response) => {
          if (response.status === 204) {
            alert("Account deleted successfully");
            navigate("/");
          }
          console.log(response.data);
        })
        .catch((error) => {
          console.error("There was an error deleting the account!", error);
          alert("Failed to delete account. Please try again.");
        });
    }
  };

  return (
    <div>
      {/* Profile Section */}
      <Card className="mb-4">
        <Card.Body>
          <div className="text-center">
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="profile"
              className="rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />

            {/* Input to Upload Image */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginTop: "10px" }}
            />

            {/* Display User Name and Stats */}
            {/* <h5>{userId}</h5>*/}

            <h3>{googleuser ? googleuser : newuser} </h3>
            <p>
              {userData.posts || 0} post | {userData.followers || 0} Follower |{" "}
              {userData.following || 0} Following
            </p>
            {/* <Button variant="primary">Edit Profile</Button> */}
            <button className="btn btn-danger" onClick={handleDeleteAccount}>
              Delete Account
            </button>
          </div>
        </Card.Body>
      </Card>

      {/* Main Content - Polls Section */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Button
                variant="info"
                style={{ marginLeft: "70px" }}
                onClick={fetchCreatedPolls}
              >
                Created Polls
              </Button>
            </Col>
            <Col sm={6}>
              <Button
                variant="info"
                style={{ marginLeft: "90px" }}
                onClick={fetchVotedPolls}
              >
                Voted Polls
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Display the Fetched Polls */}
      {activeTab === "created" && (
        <div>
          {createdpolls.length > 0 ? (
            createdpolls.map((poll, index) => (
              <Card className="mb-4" key={index}>
                <Card.Body>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Name:{poll.createdBy.user_name}</h6>
                      {/* <p>Title:{poll.title}</p> */}
                      <p>Status:{poll.status}</p>
                    </div>
                    {userId !== polluserId && poll && (
                      <Button
                        variant="primary"
                        onClick={() => handleFollowToggle(poll.createdBy._id)}
                      >
                        {/* {isFollowing ? "Unfollow" : "Follow"} */}
                        {followStatus[poll.createdBy._id]
                          ? "Unfollow"
                          : "Follow"}
                      </Button>
                    )}
                  </Card.Header>
                  <Card.Text>
                    <div className="mt-3 mb-3">{poll.question}</div>
                    <Card className="mb-3">
                      <Card.Body>
                        <Card.Header className="d-flex justify-content-between">
                          <p>Poll Ends on {poll.expirationTime}</p>
                          <p>
                            Category:{" "}
                            {poll.category &&
                              poll.category.map((item) => item.category_name)}
                          </p>
                        </Card.Header>
                        <Card.Text>
                          {poll && !hasVoted[poll._id]
                            ? poll.options?.map((option, index) => (
                                <div key={index}>
                                  <input
                                    type="radio"
                                    id={`option-${index + 1}`}
                                    name="options"
                                    value={option.option}
                                    onChange={() => handleOptionChange(index)}
                                  />
                                  <label htmlFor={`option-${index }`}>
                                    {option.option} {optionscount[index]}
                                  </label>
                                  <span>{option.count}</span>
                                </div>
                              ))
                            : poll.options?.map((item, index) => (
                                <div
                                  key={index}
                                  style={{ position: "relative" }}
                                >
                                  <ProgressBar
                                    now={calculatePercentage(
                                      item.count,
                                      totalVotes
                                    )}
                                    style={{
                                      height: "20px",
                                      cursor: "pointer",
                                    }}
                                    variant={
                                      selectedOption === index
                                        ? "success"
                                        : "info"
                                    }
                                    label={`${calculatePercentage(
                                      item.count,
                                      totalVotes
                                    )}%`}
                                  />
                                  <span
                                    style={{
                                      position: "absolute",
                                      left: "50%",
                                      top: "50%",
                                      transform: "translate(-50%, -50%)",
                                      color: "black",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {`${calculatePercentage(
                                      item.count,
                                      totalVotes
                                    )}%`}
                                  </span>
                                </div>
                              ))}

                          {/* {hasVoted[poll._id] && (
                  <button
                    onClick={() => handleVoteToggle(poll._id, selectedOption)}
                  >
                    Unvote
                  </button>
                )}

                <p>{selectedOption}</p>

                <button
                  onClick={() => handleVoteToggle(poll._id, selectedOption)}
                >
                  Vote
                </button> */}

                          <button
                            onClick={() =>
                              handleVoteToggle(poll._id, selectedOption)
                            }
                          >
                            {hasVoted[poll._id] ? "Unvote" : "Vote"}
                          </button>

                          <p>{selectedOption}</p>
                        </Card.Text>

                        <ToastContainer />
                      </Card.Body>
                    </Card>
                  </Card.Text>

                  <Card.Footer className="d-flex justify-content-between">
                    <p>
                      <button
                        onClick={toggleLike}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={liked ? solidHeart : regularHeart}
                          style={{
                            color: liked ? "red" : "gray",
                            fontSize: "24px",
                          }}
                          onClick={handleLike}
                        />
                      </button>
                      <span style={{ marginLeft: "8px" }}>
                        total like: {totallike}
                      </span>{" "}
                      {/* Display the like count */}
                      like
                    </p>

                    <p
                      style={{ cursor: "pointer", color: "blue" }}
                      // onClick={()=>handleViewComment(index)}
                      onClick={() => handleOnepoll(poll._id)}
                    >
                      <i className="bi bi-chat-quote-fill"></i> Comments
                    </p>

                    <p
                      ref={target}
                      onClick={handleShareClick}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-share"></i> Share
                    </p>
                    <Overlay
                      show={showOverlay}
                      target={target.current}
                      placement="top"
                      containerPadding={20}
                      rootClose
                      onHide={() => setShowOverlay(false)}
                    >
                      <Popover id="popover-contained">
                        <Popover.Header as="h3">Share this Poll</Popover.Header>
                        <Popover.Body>
                          <div className="d-flex justify-content-around">
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-facebook"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-twitter"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              href="https://www.instagram.com/?url=yourPollLink"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-instagram"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-whatsapp"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            {/* Add more social media links here */}
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </Card.Footer>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No created polls available.</p>
          )}
        </div>
      )}

      {activeTab === "voted" && (
        <div>
          {votedpolls.length > 0 ? (
            votedpolls.map((poll, index) => (
              <Card className="mb-4" key={index}>
                <Card.Body>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Name:{poll.createdBy.user_name}</h6>
                  
                      <p>Status:{poll.status}</p>
                    </div>
                    <Button variant="primary" onClick={handleFollowToggle}>
                      {isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                  </Card.Header>
                  <Card.Text>
                    <div className="mt-3 mb-3">{poll.question}</div>
                    <Card className="mb-3">
                      <Card.Body>
                        <Card.Header className="d-flex justify-content-between">
                          <p>Poll Ends on {poll.expirationTime}</p>
                          <p>
                            Category:{" "}
                            {poll.category &&
                              poll.category.map((item) => item.category_name)}
                          </p>
                        </Card.Header>
                        <Card.Text>
                {poll && !hasVoted[poll._id]
                  ? poll.options?.map((option, index) => (
                      <div key={index}>
                        <input
                          type="radio"
                          id={`option-${index + 1}`}
                          name="options"
                          value={option.option}
                          onChange={() => handleOptionChange(index)}
                        />
                        <label htmlFor={`option-${index + 1}`}>
                          {option.option} {optionscount[index]}
                        </label>
                        <span>{option.count}</span>
                      </div>
                    ))
                  : poll.options?.map((item, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <ProgressBar
                          now={calculatePercentage(item.count, totalVotes)}
                          style={{
                            height: "20px",
                            cursor: "pointer",
                          }}
                          variant={
                            selectedOption === index ? "success" : "info"
                          }
                          label={`${calculatePercentage(
                            item.count,
                            totalVotes
                          )}%`}
                        />
                        <span
                          style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {`${calculatePercentage(item.count, totalVotes)}%`}
                        </span>
                      </div>
                    ))}

                {/* {hasVoted[poll._id] && (
                  <button
                    onClick={() => handleVoteToggle(poll._id, selectedOption)}
                  >
                    Unvote
                  </button>
                )}

                <p>{selectedOption}</p>

                <button
                  onClick={() => handleVoteToggle(poll._id, selectedOption)}
                >
                  Vote
                </button> */}

                <button
                  onClick={() => handleVoteToggle(poll._id, selectedOption)}
                >
                  {hasVoted[poll._id] ? "Unvote" : "Vote"}
                </button>

                <p>{selectedOption}</p>
              </Card.Text>

                        <ToastContainer />
                      </Card.Body>
                    </Card>
                  </Card.Text>

                  <Card.Footer className="d-flex justify-content-between">
                    <p>
                      <button
                        onClick={toggleLike}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={liked ? solidHeart : regularHeart}
                          style={{
                            color: liked ? "red" : "gray",
                            fontSize: "24px",
                          }}
                          onClick={handleLike}
                        />
                      </button>
                      <span style={{ marginLeft: "8px" }}>
                        total like: {totallike}
                      </span>{" "}
                      {/* Display the like count */}
                      like
                    </p>

                    <p
                      style={{ cursor: "pointer", color: "blue" }}
                      // onClick={()=>handleViewComment(index)}
                      onClick={() => handleOnepoll(poll._id)}
                    >
                      <i className="bi bi-chat-quote-fill"></i> Comments
                    </p>

                    <p
                      ref={target}
                      onClick={handleShareClick}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-share"></i> Share
                    </p>
                    <Overlay
                      show={showOverlay}
                      target={target.current}
                      placement="top"
                      containerPadding={20}
                      rootClose
                      onHide={() => setShowOverlay(false)}
                    >
                      <Popover id="popover-contained">
                        <Popover.Header as="h3">Share this Poll</Popover.Header>
                        <Popover.Body>
                          <div className="d-flex justify-content-around">
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-facebook"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-twitter"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              href="https://www.instagram.com/?url=yourPollLink"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-instagram"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-whatsapp"
                                style={{ fontSize: "35px" }}
                              ></i>
                            </a>
                        
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </Card.Footer>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No voted polls available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Userdetails;
