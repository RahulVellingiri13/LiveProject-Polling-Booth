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


import React,{useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function CategoryComp({ selectedCategory, polls ,setPolls,filteredPolls}) {
    console.log(filteredPolls)
// let [filterpoll,setfilterpoll]=useState([])
    // const {categoryId} = useParams();
// console.log(categoryId)

// setfilterpoll(filteredPolls)
// console.log(filterpoll)
// const newfilteredPolls = polls.filter(poll => poll.categoryId === categoryId);
// console.log(newfilteredPolls)
  return (
    <div className="category-container">
    <h1>Category</h1>
      {/* <h2 className="category-title text-center">{selectedCategory.category_name}</h2>` */}
      {filteredPolls && filteredPolls.length > 0 ? (
        <Row className="g-4">
          {filteredPolls.map((poll) => (
            <Col key={filteredPolls._id} md={6} lg={4}>
              <Card className="poll-card h-100">
                <Card.Body>
                  <Card.Title className="poll-title">{poll.title}</Card.Title>
                  <Card.Text className="poll-question">{poll.question}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="no-polls-message text-center">No polls available for this category.</p>
      )}
    </div>
  );
}

export default CategoryComp;