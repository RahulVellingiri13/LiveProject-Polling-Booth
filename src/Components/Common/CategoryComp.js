// import React, { useState, useRef, useContext } from "react";
// import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { PageContext } from "../../App";

// function CategoryComp({
//   userId,
//   index,
//   pollId,
//   _id,
//   createdBy,
//   name,
//   createdon,
//   title,
//   status,
//   question,
//   options,
//   votingPeriod,
//   category,
//   onPollSubmit,
//   onCardClick,
//   handleVote,
// }) {
//   let [page, setPage] = useContext(PageContext);
//   let [pollid, setPollid] = useState("");
//   let navigate = useNavigate();

//   const [totallike, setTotallike] = useState(0);
//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(""); // New state for likes count
//   const [comments, setComments] = useState([
//     { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
//     { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
//   ]); // New state for Comments

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showVoteButton, setShowVoteButton] = useState(false);
//   const [hasVoted, setHasVoted] = useState(true);

//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   const handleReply = (id, replyText) => {
//     const addReply = (comment) => {
//       if (comment.id === id) {
//         return {
//           ...comment,
//           replies: [
//             ...comment.replies,
//             { id: Date.now(), text: replyText, likes: 0, replies: [] },
//           ],
//         };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(addReply) };
//       }
//       return comment;
//     };

//     setComments(comments.map(addReply));
//   };

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

//   const handleVoteToggle = () => {
//     setHasVoted(!hasVoted);
//     if (selectedOption != null) {
//       const selectedOptionValue = options[selectedOption]; // Get the value of the selected option

//       axios
//         .post("http://92.205.109.210:8028/polls/voteonpoll", {
//           poll_id: _id,
//           user_id: userId,
//           option: selectedOptionValue,
//         })
//         .then((response) => {
//           if (response.data.message === "Vote recorded successfully.") {
//             toast.success("Your vote is successfully registered", {
//               autoClose: 1000,
//             });
//           } else {
//             toast.info("Your vote is removed successfully", {
//               autoClose: 1000,
//             });
//           }
//           setSelectedOption("");
//         })
//         .catch((error) => {
//           console.error("Error submitting vote:", error);
//         });
//     }
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   const handleViewComment = () => {
//     onCardClick({
//       index,
//       name,
//       createdon,
//       title,
//       status,
//       question,
//       options,
//       votingPeriod,
//       category,
//       likeCount,
//       liked,
//       comments,
//     });
//   };

//   const handleOnepoll = (_id) => {
//     setPage("CommentsComp");
//     setPollid(_id);
//   };

//   const handleLike = () => {
//     axios
//       .post("http://92.205.109.210:8028/polls/likeonpoll", {
//         poll_id: _id,
//         user_id: userId,
//       })
//       .then((res) => {
//         setTotallike(res.data.Total_likes);
//       });
//   };

//   return (
//     <div>
//       <Card style={{ width: "40rem" }}>
//         <Card.Body>
//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               <h6>Name: {createdBy}</h6>
//               <p>Title: {title}</p>
//               <p>Status: {status}</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>

//           <Card.Text>
//             <div className="mt-3 mb-3">{question}</div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>Poll Ends on {votingPeriod}</p>
//                   <p>Category: {category}</p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//                   {options.map((option, index) => (
//                     <div key={index}>
//                       {selectedOption === index ? (
//                         <div>
//                           <ProgressBar
//                             now={100}
//                             label={option}
//                             onClick={() => setSelectedOption(null)}
//                             style={{ cursor: "pointer" }}
//                           />
//                         </div>
//                       ) : (
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             id={`option${index + 1}`}
//                             name="options"
//                             value={option}
//                             onChange={() => handleOptionChange(index)}
//                             checked={selectedOption === index}
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor={`option${index + 1}`}
//                           >
//                             {option}
//                           </label>
//                         </div>
//                       )}
//                     </div>
//                   ))}

//                   {selectedOption !== null && (
//                     <Button
//                       variant={hasVoted ? "primary" : "danger"}
//                       onClick={handleVoteToggle}
//                       className="mt-3 align-self-center"
//                     >
//                       {hasVoted ? "Vote" : "Unvote"}
//                     </Button>
//                   )}
//                 </Card.Text>
//                 <ToastContainer />
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <button
//                 onClick={toggleLike}
//                 style={{ background: "none", border: "none", cursor: "pointer" }}
//               >
//                 <FontAwesomeIcon
//                   icon={liked ? solidHeart : regularHeart}
//                   style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                   onClick={handleLike}
//                 />
//               </button>
//               <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>
//             </p>

//             <p
//               style={{ cursor: "pointer", color: "blue" }}
//               onClick={() => handleOnepoll(_id)}
//             >
//               <i className="bi bi-chat-quote-fill"></i> Comments
//             </p>

//             <p
//               ref={target}
//               onClick={handleShareClick}
//               style={{ cursor: "pointer" }}
//             >
//               <i className="bi bi-share"></i> Share
//             </p>
//             <Overlay
//               show={showOverlay}
//               target={target.current}
//               placement="top"
//               containerPadding={20}
//               rootClose
//               onHide={() => setShowOverlay(false)}
//             >
//               <Popover id="popover-contained">
//                 <Popover.Header as="h3">Share this Poll</Popover.Header>
//                 <Popover.Body>
//                   <div className="d-flex justify-content-around">
//                     <a
//                       href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i
//                         className="bi bi-facebook"
//                         style={{ fontSize: "35px" }}
//                       ></i>
//                     </a>
//                     <a
//                       href="https://twitter.com/share?url=yourPollLink"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i
//                         className="bi bi-twitter"
//                         style={{ fontSize: "35px" }}
//                       ></i>
//                     </a>
//                     <a
//                       href="https://www.linkedin.com/shareArticle?url=yourPollLink"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i
//                         className="bi bi-linkedin"
//                         style={{ fontSize: "35px" }}
//                       ></i>
//                     </a>
//                   </div>
//                 </Popover.Body>
//               </Popover>
//             </Overlay>
//           </Card.Footer>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default CategoryComp;

// function CategoryComp({ selectedCategory, polls }) {
//     console.log(selectedCategory,polls)
//     return (
//       <div>
//         <h2>{selectedCategory.category_name}</h2>
//         {polls && polls.length > 0 ? (
//           polls.map((poll) => (
//             <div key={poll._id}>
//               <h3>{poll.title}</h3>
//               <p>{poll.question}</p>
//             </div>
//           ))
//         ) : (
//           <p>No polls available for this category.</p>
//         )}
//       </div>
//     );
//   }

//   export default CategoryComp;

//---------------------------------------------------------------------------------------------------------------------------------------------------

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  ProgressBar,
  ToastContainer,
  Popover,
  Overlay,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { PageContext } from "../Homepage";

function CategoryComp({
  selectedCategory,
  polls,
  setPolls,
  filteredPolls,
  index,
  polluserId,
  poll,
  pollId,
  _id,
  createdBy,
  name,
  createdon,
  title,
  status,
  question,
  options,
  optionscount,
  votingPeriod,
  category,
  onPollSubmit,
  onCardClick,
  handleVote,
}) {
  console.log(filteredPolls);
  // let [filterpoll,setfilterpoll]=useState([])
  // const {categoryId} = useParams();
  // console.log(categoryId)

  // setfilterpoll(filteredPolls)
  // console.log(filterpoll)
  // const newfilteredPolls = polls.filter(poll => poll.categoryId === categoryId);
  // console.log(newfilteredPolls)
  let [
    page,
    setPage,
    pollid,
    setPollid,
    isFollowing,
    setIsFollowing,
    followStatus, setFollowStatus,
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
    hasVotedbutton, setHasvotedbutton,
  ] = useContext(PageContext);

  // const [selectedOption, setSelectedOption] = useState(null); 
  // const [showVoteButton, setShowVoteButton] = useState(false);
  // const [hasVoted, setHasVoted] = useState(true);

  const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
  const target = useRef(null);

  // const [totallike, setTotallike] = useState("");
  // const [liked, setLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState("");

  let userId =
    sessionStorage.getItem("loginuserId") ||
    sessionStorage.getItem("googleuserId");
  console.log("userId:", userId);
  console.log(userId);
  console.log("loginuserid", sessionStorage.getItem("loginuserId"));
  console.log("googleuseriod", sessionStorage.getItem("googleuserId"));

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

  const calculatePercentage = (count, totalVotes) => {
    if (totalVotes === 0) return 0;
    return ((count / totalVotes) * 100).toFixed(2);
  };

  const handleVoteToggle = (poll_id, option) => {
    console.log(poll_id, userId, option);
    const selectedOptionValue = polls.options[selectedOption];

    axios
      .post("http://92.205.109.210:8028/polls/voteonpoll", {
        poll_id: polls._id,
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
    if (polls && polls.voters) {
      setHasVoted((prevState) => ({
        ...prevState,
        [polls._id]: polls.voters.some((voter) => voter._id === userId),
      }));
    }
  }, [polls, userId]);

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  const handleLike = () => {
    // console.log(createdBy._id);
    axios
      .post("http://92.205.109.210:8028/polls/likeonpoll", {
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
    setShowOverlay(!showOverlay);
  };

  

  

  const handleFollowToggle = (polluserId) => {

  const isFollowing = followStatus[polluserId] || false;

  axios.post("http://92.205.109.210:8028/api/follow", {
    follow_user_id: polluserId,
    user_id: userId
  }).then(res => {
    console.log(res.data);
    if (res.data.message === "Follower added successfully") {
      setFollowStatus(prevState => ({
        ...prevState,
        [polluserId]: true  
      }));
    } else if (res.data.message === "Follower removed successfully") {
      setFollowStatus(prevState => ({
        ...prevState,
        [polluserId]: false  
      }));
    }
  }).catch(err => {
    console.error("Error in follow/unfollow request:", err);
  });
};

  return (
    <div className="category-container">
      {/* <h3>Category:{filteredPolls.category_name}</h3> */}
      {/* <h2 className="category-title text-center">{polls.category_name}</h2>` */}
      {filteredPolls && filteredPolls.length > 0 ? (
        <div>
          {filteredPolls.map((poll) => (
            <Card key={poll._id} className="poll-card h-100">
              <Card.Body>
                <Card.Header>
                  <div>
                    <h6>Name:{poll.createdBy.user_name}</h6>
                    <p>Status:{poll.status}</p>
                  </div>
                  {userId !== poll.createdBy._id && (
                    poll &&
                    <Button variant="primary" onClick={()=>handleFollowToggle(poll.createdBy._id)}>
                      {/* {isFollowing ? "Unfollow" : "Follow"} */}
                      {followStatus[poll.createdBy._id] ? "Unfollow" : "Follow"}
                    </Button>
                  )}
                </Card.Header>
                <Card.Text>
                
                  <div className="mt-3 mb-3">Question: {poll.question}</div>
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
                      <div>
                    
                    {polls && !hasVoted[polls._id]
                      ? polls.options?.map((item, index) => (
                          <div key={index}>
                            <input
                              type="radio"
                              id={`option-${index}`}
                              name="poll-option"
                              value={item.option}
                              onChange={() => handleOptionChange(item.option)}
                            />
                            <label htmlFor={`option-${index}`}>
                              {item.option}
                            </label>
                            <span>{item.count}</span>
                          </div>
                        ))
                      : polls.options?.map((item, index) => (
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
                              {calculatePercentage(item.count, totalVotes)}%
                            </span>
                          </div>
                        ))}

                    {/* {hasVoted[onepoll._id] && (
                        <button
                          onClick={() =>
                            handleVoteToggle(onepoll._id, selectedOption)
                          }
                        >
                          Unvote
                        </button>
                      )}

                      <p>{selectedOption}</p>
                      <p>{onepoll.createdAt}</p>
                      <button
                        onClick={() =>
                          handleVoteToggle(onepoll._id, selectedOption)
                        }
                      >
                        Vote
                      </button> */}
                    <button
                      onClick={() =>
                        handleVoteToggle(polls._id, selectedOption)
                      }
                    >
                      {hasVoted[polls._id] ? "Unvote" : "Vote"}
                    </button>

                    <p>{selectedOption}</p>
                  </div>
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
          ))}
        </div>
      ) : (
        <p className="no-polls-message text-center">
          No polls available for this category
        </p>
      )}
    </div>
  );
}

export default CategoryComp;
