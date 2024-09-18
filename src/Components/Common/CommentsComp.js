// import React from "react";

// function CommentsComp({ cardData, onBackClick }) {
//   const {
//     name,
//     createdon,
//     title,
//     status,
//     question,
//     options,
//     votingPeriod,
//     category,
//     likeCount,
//     comments,
//   } = cardData;

//   return (
//     <div>
//       <button onClick={onBackClick}>Back to All Cards</button>

//       <div>
//         <h6>Name: {name}</h6>
//         <p>Created: {createdon}</p>
//         <p>Title: {title}</p>
//         <p>Status: {status}</p>
//         <div>{question}</div>
//         <div>
//           <h6>Options:</h6>
//           <ul>
//             {options.map((option, index) => (
//               <li key={index}>{option}</li>
//             ))}
//           </ul>
//         </div>
//         <p>Voting Period: {votingPeriod}</p>
//         <p>Category: {category}</p>
//         <p>Likes: {likeCount}</p>

//         <h6>Comments:</h6>
//         <ul>
//           {comments.map((comment) => (
//             <li key={comment.id}>
//               {comment.text} (Likes: {comment.likes})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default CommentsComp;

//----------------------------------------------------------------------------------------------------------------------

//adding styles same as the CardComp component

// import React from "react";
// import { Card, Button, ProgressBar } from "react-bootstrap";

// function CommentsComp({ cardData, onBackClick }) {
//   const {
//     name,
//     createdon,
//     title,
//     status,
//     question,
//     options,
//     votingPeriod,
//     category,
//     likeCount,
//     comments,
//   } = cardData;

//   return (
//     <Card>
//       <Card.Body>
//         <Button onClick={onBackClick} variant="secondary" className="mb-3">
//           Back to All Cards
//         </Button>

//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name: {name}</h6>
//             <p>Created: {createdon}</p>
//             <p>Title: {title}</p>
//             <p>Status: {status}</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">{question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//                 <p>Poll Ends on {votingPeriod}</p>
//                 <p>Category: {category}</p>
//               </Card.Header>
//               <Card.Text className="d-flex flex-column">
//                 <h6>Options:</h6>
//                 <ul>
//                   {options.map((option, index) => (
//                     <li key={index}>{option}</li>
//                   ))}
//                 </ul>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>Likes: {likeCount}</p>
//         </Card.Footer>

//         <Card.Text>
//           <h6>Comments:</h6>
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment.id}>
//                 {comment.text} (Likes: {comment.likes})
//               </li>
//             ))}
//           </ul>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CommentsComp;

//----------------------------------------------------------------------------------------------------------------------

// 2nd version of the component

// import React, { useState, useRef } from "react";
// import { Card, Button, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { BsBack } from "react-icons/bs";

// function CommentsComp({ cardData, onBackClick }) {
//   const {
//     name,
//     createdon,
//     title,
//     status,
//     question,
//     options,
//     votingPeriod,
//     category,
//     likeCount: initialLikeCount,
//     comments: initialComments,
//   } = cardData;

//   const [liked, setLiked] = useState(false); // State for likes
//   const [likeCount, setLikeCount] = useState(initialLikeCount); // State for likes count
//   const [comments, setComments] = useState(initialComments); // State for Comments

//   const [selectedOption, setSelectedOption] = useState(null); // State for selected option
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       setSelectedOption(index); // Select the option
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null); // Unselect the currently selected option
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   return (

//     <Card>
//       <Card.Body>
//         <Button onClick={onBackClick} variant="secondary" className="mb-3">
//         <BsBack />  Back to All Polls
//         </Button>

//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name: {name}</h6>
//             <p>Created: {createdon}</p>
//             <p>Title: {title}</p>
//             <p>Status: {status}</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">{question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//                 <p>Poll Ends on {votingPeriod}</p>
//                 <p>Category: {category}</p>
//               </Card.Header>
//               <Card.Text className="d-flex flex-column">
//                 {options.map((option, index) => (
//                   <div key={index}>
//                     {selectedOption === index ? (
//                       <ProgressBar
//                         now={100}
//                         label={option}
//                         onClick={unselectOption} // Unselect on clicking the progress bar
//                         style={{ cursor: "pointer" }}
//                       />
//                     ) : (
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           id={`option${index + 1}`}
//                           name="options"
//                           value={option}
//                           onChange={() => handleOptionChange(index)}
//                           checked={selectedOption === index}
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`option${index + 1}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </Card.Text>
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
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span>
//             like
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
//                     className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>

//         <Card.Text >
//           <h6>Comments:</h6>
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment.id}>
//                 {comment.text} (Likes: {comment.likes})
//               </li>
//             ))}
//           </ul>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CommentsComp;

//----------------------------------------------------------------------------------------------------------------------

// 3rd version of the component

// import React, { useState, useRef } from "react";
// import { Card, Button, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { BsBack } from "react-icons/bs";

// function CommentsComp({ cardData, onBackClick }) {
//   const {
//     name,
//     createdon,
//     title,
//     status,
//     question,
//     options,
//     votingPeriod,
//     category,
//     likeCount: initialLikeCount,
//     comments: initialComments,
//   } = cardData;

//   const [liked, setLiked] = useState(false); // State for likes
//   const [likeCount, setLikeCount] = useState(initialLikeCount); // State for likes count
//   const [comments, setComments] = useState(initialComments); // State for Comments

//   const [selectedOption, setSelectedOption] = useState(null); // State for selected option
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       setSelectedOption(index); // Select the option
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null); // Unselect the currently selected option
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   return (

//     <Card>
//       <Card.Body>
//         <Button onClick={onBackClick} variant="secondary" className="mb-3">
//         <BsBack />  Back to All Polls
//         </Button>

//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name: {name}</h6>
//             <p>Created: {createdon}</p>
//             <p>Title: {title}</p>
//             <p>Status: {status}</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">{question}</div>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Header className="d-flex justify-content-between">
//                 <p>Poll Ends on {votingPeriod}</p>
//                 <p>Category: {category}</p>
//               </Card.Header>
//               <Card.Text className="d-flex flex-column">
//                 {options.map((option, index) => (
//                   <div key={index}>
//                     {selectedOption === index ? (
//                       <ProgressBar
//                         now={100}
//                         label={option}
//                         onClick={unselectOption} // Unselect on clicking the progress bar
//                         style={{ cursor: "pointer" }}
//                       />
//                     ) : (
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           id={`option${index + 1}`}
//                           name="options"
//                           value={option}
//                           onChange={() => handleOptionChange(index)}
//                           checked={selectedOption === index}
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`option${index + 1}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </Card.Text>
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
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span>
//             like
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
//                     className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>

//         <Card.Text >
//           <h6>Comments:</h6>
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment.id}>
//                 {comment.text} (Likes: {comment.likes})
//               </li>
//             ))}
//           </ul>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CommentsComp;

//----------------------------------------------------------------

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Card,
//   Button,
//   ProgressBar,
//   Overlay,
//   Popover,
//   Form,
// } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { BsBack } from "react-icons/bs";
// import axios from "axios";
// import { useContext } from "react";
// import { PageContext } from "../../App";
// // import Onepoll from "../Onepoll";
// import CardComp from "./Card";
// import Polllist from "../Polllist";

// function CommentsComp() {
//   // const {
//   //   name,
//   //   createdon,
//   //   title,
//   //   status,
//   //   question,
//   //   options,
//   //   votingPeriod,
//   //   category,
//   //   likeCount: initialLikeCount,
//   //   comments: initialComments,
//   // } = cardData;

//   const [liked, setLiked] = useState(false); // State for likes
//   const [likeCount, setLikeCount] = useState(""); // State for likes count
//   // const [comments, setComments] = useState(initialComments); // State for Comments
//   const [newComment, setNewComment] = useState(""); // State for new comment input
//   const [replyText, setReplyText] = useState({}); // State for replies
//   const [selectedOption, setSelectedOption] = useState(""); // State for selected option
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button
//   let [onepoll, setOnepoll] = useState("");
//   let [error, setError] = useState("");

//   let [page, setPage, pollid, setPollid] = useContext(PageContext);
//   console.log(pollid, page);

//   useEffect(() => {
//     axios
//       .post("http://92.205.109.210:8028/polls/getone", {
//         poll_id: pollid,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setOnepoll(res.data);
//         console.log(onepoll.status);
//       });
//   }, []);
//   console.log(onepoll.status);
//   // const toggleLike = () => {
//   //   // setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//   //   setLiked(!liked);
//   // };

//   // const handleOptionChange = (index) => {
//   //   if (selectedOption === index) {
//   //     unselectOption(); // Unselect the option if it's already selected
//   //   } else {
//   //     setSelectedOption(index); // Select the option
//   //   }
//   // };

//   // const unselectOption = () => {
//   //   setSelectedOption(null); // Unselect the currently selected option
//   // };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   // const handleAddComment = () => {
//   //   if (newComment.trim()) {
//   //     const newCommentObj = {
//   //       id: comments.length + 1,
//   //       text: newComment,
//   //       likes: 0,
//   //       replies: [],
//   //     };
//   //     setComments([...comments, newCommentObj]);
//   //     setNewComment(''); // Reset input field
//   //   }
//   // };

//   // const handleLikeComment = (id) => {
//   //   setComments(
//   //     comments.map((comment) =>
//   //       comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
//   //     )
//   //   );
//   // };

//   // const handleUnlikeComment = (id) => {
//   //   setComments(
//   //     comments.map((comment) =>
//   //       comment.id === id && comment.likes > 0
//   //         ? { ...comment, likes: comment.likes - 1 }
//   //         : comment
//   //     )
//   //   );
//   // };

//   // const handleAddReply = (commentId) => {
//   //   if (replyText[commentId]?.trim()) {
//   //     const updatedComments = comments.map((comment) => {
//   //       if (comment.id === commentId) {
//   //         return {
//   //           ...comment,
//   //           replies: [
//   //             ...comment.replies,
//   //             { id: comment.replies.length + 1, text: replyText[commentId], likes: 0 },
//   //           ],
//   //         };
//   //       }
//   //       return comment;
//   //     });
//   //     setComments(updatedComments);
//   //     setReplyText({ ...replyText, [commentId]: '' });
//   //   }
//   // };

//   // const handleLikeReply = (commentId, replyId) => {
//   //   const updatedComments = comments.map((comment) => {
//   //     if (comment.id === commentId) {
//   //       const updatedReplies = comment.replies.map((reply) =>
//   //         reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply
//   //       );
//   //       return { ...comment, replies: updatedReplies };
//   //     }
//   //     return comment;
//   //   });
//   //   setComments(updatedComments);
//   // };
//   const onBackClick = () => {
//     window.location.href = "/Homepage";
//   };
//   console.log(onepoll);
//   // console.log(onepoll)

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };
//   const handleLike = () => {
//     axios
//       .post("http://92.205.109.210:8028/polls/likeonpoll", {
//         poll_id: onepoll._id,
//         user_id: onepoll.createdBy._id,
//       })
//       .then((res) => {
//         console.log(res.data);
//       });
//   };
//   console.log(onepoll.options);

//   return (
//     <>
//       {/* <h1>Comments</h1> */}

//       <Card>
//         <Card.Body>
//           <Button onClick={onBackClick} variant="secondary" className="mb-3">
//             <BsBack /> Back to All Polls
//           </Button>

//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               {/* <h6>Name:{onepoll.createdBy.user_name}</h6> */}
//               <h6>Name: {onepoll.createdBy?.user_name || "Unknown"}</h6>
//               <p>Created At:{onepoll.createdAt} </p>
//               <p>Expiration Time: {onepoll.expirationTime} </p>
//               {/* <p>Title:{onepoll.title} </p> */}
//               <p>Question:{onepoll.question}</p>
//               <p>Status:{onepoll.status}</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>

//           <Card.Text>
//             <div className="mt-3 mb-3"></div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>Poll Ends on {onepoll.expirationTime}</p>
//                   {/* <p>Category:{onepoll.category} </p> */}
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//                   {/* {onepoll.options.map((option, index) => (
//                   <div key={index}>
//                     {selectedOption === index ? (
//                       <ProgressBar
//                         now={100}
//                         label={option}
//                         onClick={unselectOption} // Unselect on clicking the progress bar
//                         style={{ cursor: "pointer" }}
//                       />
//                     ) : (
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           id={`option${index + 1}`}
//                           name="options"
//                           value={option}
//                           onChange={() => handleOptionChange(index)}
//                           checked={selectedOption === index}
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`option${index + 1}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     )}
//                   </div>
//                 ))} */}
//                   <div>
//                     {onepoll.options.map((option, index) => (
//                       <div key={index}>
//                         {/* {selectedOption === index ? (
//             <ProgressBar
//               now={100}
//               label={option}
//               onClick={unselectOption} // Unselect on clicking the progress bar
//               style={{ cursor: 'pointer' }}
//             />
//           ) : ( */}
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             // id={`option${index + 1}`}
//                             // name="options"
//                             // value={option}
//                             // onChange={() => handleOptionChange(index)}
//                             // checked={selectedOption === index}
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor={`option${index + 1}`}
//                           >
//                             {option}
//                           </label>
//                         </div>
//                         ){/* } */}
//                       </div>
//                     ))}
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <button
//                 onClick={toggleLike}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 <FontAwesomeIcon
//                   icon={liked ? solidHeart : regularHeart}
//                   style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                   onClick={handleLike}
//                 />
//               </button>
//               <span style={{ marginLeft: "8px" }}>{likeCount}</span> like
//             </p>

//             <p
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
//             <Popover id="popover-contained" >
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
//                     className ="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//           </Card.Footer>

//           <Card.Text>
//             <h6>Comments:</h6>

//             <Form inline className="mt-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Add a comment..."
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//               />
//               <Button variant="primary">Add Comment</Button>
//             </Form>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </>

// <Card>
//   <h1>comments</h1>
//   <Card.Body>
//     {/* <Button onClick={onBackClick} variant="secondary" className="mb-3">
//       <BsBack /> Back to All Polls
//     </Button> */}

//     <Card.Header className="d-flex justify-content-between align-items-center">
//       <div>
//         <h6>Name: </h6>
//         <p>Created: </p>
//         <p>Title: </p>
//         <p>Status: </p>
//       </div>
//       <Button variant="primary">Follow</Button>
//     </Card.Header>

//     <Card.Text>
//       <div className="mt-3 mb-3"></div>
//       <Card className="mb-3">
//         <Card.Body>
//           <Card.Header className="d-flex justify-content-between">
//             <p>Poll Ends on </p>
//             <p>Category:</p>
//           </Card.Header>
//           <Card.Text className="d-flex flex-column">
//             {/* {options.map((option, index) => (
//               <div key={index}>
//                 {selectedOption === index ? (
//                   <ProgressBar
//                     now={100}
//                     label={option}
//                     onClick={unselectOption} // Unselect on clicking the progress bar
//                     style={{ cursor: "pointer" }}
//                   />
//                 ) : (
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id={`option${index + 1}`}
//                       name="options"
//                       value={option}
//                       onChange={() => handleOptionChange(index)}
//                       checked={selectedOption === index}
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor={`option${index + 1}`}
//                     >
//                       {option}
//                     </label>
//                   </div>
//                 )}
//               </div>
//             ))} */}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Card.Text>

//     <Card.Footer className="d-flex justify-content-between">
//       <p>
//         <button
//           // onClick={toggleLike}
//           style={{ background: "none", border: "none", cursor: "pointer" }}
//         >
//           <FontAwesomeIcon
//             // icon={liked ? solidHeart : regularHeart}
//             style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//           />
//         </button>
//         {/* <span style={{ marginLeft: "8px" }}>{likeCount}</span> */}
//         like
//       </p>

//       <p
//         ref={target}
//         // onClick={handleShareClick}
//         style={{ cursor: "pointer" }}
//       >
//         <i className="bi bi-share"></i> Share
//       </p>
//       {/* <Overlay
//         show={showOverlay}
//         target={target.current}
//         placement="top"
//         containerPadding={20}
//         rootClose
//         onHide={() => setShowOverlay(false)}
//       >
//         <Popover id="popover-contained">
//           <Popover.Header as="h3">Share this Poll</Popover.Header>
//           <Popover.Body>
//             <div className="d-flex justify-content-around">
//               <a
//                 href="https://www.facebook.com/sharer/sharer.php?u=yourPollLink"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="bi bi-facebook" style={{ fontSize: "35px" }}></i>
//               </a>
//               &nbsp;&nbsp;
//               <a
//                 href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="bi bi-twitter" style={{ fontSize: "35px" }}></i>
//               </a>
//               &nbsp;&nbsp;
//               <a
//                 href="https://www.instagram.com/?url=yourPollLink"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="bi bi-instagram" style={{ fontSize: "35px" }}></i>
//               </a>
//               &nbsp;&nbsp;
//               <a
//                 href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i className="bi bi-whatsapp" style={{ fontSize: "35px" }}></i>
//               </a>
//             </div>
//           </Popover.Body>
//         </Popover>
//       </Overlay> */}
//     </Card.Footer>

//     {/* <Card.Text>
//       <h6>Comments:</h6>
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>
//             {comment.text} (Likes: {comment.likes})
//             <Button variant="link" onClick={() => handleLikeComment(comment.id)}>Like</Button>
//             <Button variant="link" onClick={() => handleUnlikeComment(comment.id)}>Unlike</Button>
//             <Form inline>
//               <Form.Control
//                 type="text"
//                 placeholder="Reply..."
//                 value={replyText[comment.id] || ''}
//                 onChange={(e) => setReplyText({ ...replyText, [comment.id]: e.target.value })}
//               />
//               <Button variant="primary" onClick={() => handleAddReply(comment.id)}>Reply</Button>
//             </Form>
//             {comment.replies.length > 0 && (
//               <ul>
//                 {comment.replies.map((reply) => (
//                   <li key={reply.id}>
//                     {reply.text} (Likes: {reply.likes})
//                     <Button variant="link" onClick={() => handleLikeReply(comment.id, reply.id)}>Like</Button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//       <Form inline className="mt-3">
//         <Form.Control
//           type="text"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
//       </Form> */}
//     {/* </Card.Text> */}
//   </Card.Body>
// </Card>
// );
// }

// export default CommentsComp;

//---------------------------------------------------------------------------------------------------------------------

// import React, { useState, useRef } from "react";
// import { Card, Button, Overlay, Popover, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { BsBack } from "react-icons/bs";

// function CommentsComp({ cardData, onBackClick }) {
//   const {
//     name,
//     createdon,
//     title,
//     status,
//     question,
//     options,
//     votingPeriod,
//     category,
//     likeCount: initialLikeCount,
//   } = cardData;

//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(initialLikeCount);
//   const [comments, setComments] = useState([]); // Initialize empty comments
//   const [newComment, setNewComment] = useState(""); // For adding new comments
//   const target = useRef(null);
//   const [showOverlay, setShowOverlay] = useState(false);

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   // Add a new comment
//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       const newCommentObj = {
//         id: Date.now(),
//         text: newComment,
//         likes: 0,
//         liked: false,
//         replies: [],
//       };
//       setComments([...comments, newCommentObj]);
//       setNewComment(""); // Clear input after adding
//     }
//   };

//   // Add a reply to a specific comment
//   const handleAddReply = (commentId, replyText) => {
//     if (replyText.trim()) {
//       const updatedComments = comments.map((comment) => {
//         if (comment.id === commentId) {
//           return {
//             ...comment,
//             replies: [
//               ...comment.replies,
//               {
//                 id: Date.now(),
//                 text: replyText,
//                 likes: 0,
//                 liked: false,
//               },
//             ],
//           };
//         }
//         return comment;
//       });
//       setComments(updatedComments);
//     }
//   };

//   // Like/unlike a comment
//   const handleLikeComment = (commentId) => {
//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           liked: !comment.liked,
//           likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
//         };
//       }
//       return comment;
//     });
//     setComments(updatedComments);
//   };

//   // Like/unlike a reply
//   const handleLikeReply = (commentId, replyId) => {
//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: comment.replies.map((reply) => {
//             if (reply.id === replyId) {
//               return {
//                 ...reply,
//                 liked: !reply.liked,
//                 likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
//               };
//             }
//             return reply;
//           }),
//         };
//       }
//       return comment;
//     });
//     setComments(updatedComments);
//   };

//   return (
//     <Card>
//       <Card.Body>
//         <Button onClick={onBackClick} variant="secondary" className="mb-3">
//           <BsBack /> Back to All Polls
//         </Button>

//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name: {name}</h6>
//             <p>Created: {createdon}</p>
//             <p>Title: {title}</p>
//             <p>Status: {status}</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">{question}</div>
//           <Card.Text>
//             {options.map((option, index) => (
//               <div key={index}>{option}</div>
//             ))}
//           </Card.Text>
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
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span> likes
//           </p>
//           <p ref={target} onClick={() => setShowOverlay(!showOverlay)} style={{ cursor: "pointer" }}>
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
//                   <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook" style={{ fontSize: "35px" }}></i></a>
//                   <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter" style={{ fontSize: "35px" }}></i></a>
//                   <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" style={{ fontSize: "35px" }}></i></a>
//                   <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp" style={{ fontSize: "35px" }}></i></a>
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>

//         <Card.Text>
//           <h6>Comments:</h6>
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment.id}>
//                 {comment.text} (Likes: {comment.likes})
//                 <Button variant="link" onClick={() => handleLikeComment(comment.id)}>
//                   {comment.liked ? "Unlike" : "Like"}
//                 </Button>
//                 <Form inline className="mt-2">
//                   <Form.Control
//                     type="text"
//                     placeholder="Add a reply..."
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter') {
//                         handleAddReply(comment.id, e.target.value);
//                         e.target.value = ""; // Clear input after adding
//                       }
//                     }}
//                   />
//                 </Form>
//                 {comment.replies.length > 0 && (
//                   <ul>
//                     {comment.replies.map((reply) => (
//                       <li key={reply.id}>
//                         {reply.text} (Likes: {reply.likes})
//                         <Button variant="link" onClick={() => handleLikeReply(comment.id, reply.id)}>
//                           {reply.liked ? "Unlike" : "Like"}
//                         </Button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <Form inline className="mt-3">
//             <Form.Control
//               type="text"
//               placeholder="Add a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleAddComment();
//                 }
//               }}
//             />
//             <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
//           </Form>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CommentsComp;

//----------------------------------------------------------------------------------------------------------------------
// import React, { useState, useRef } from "react";
// import { Card, Button, Overlay, Popover, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { BsBack } from "react-icons/bs";

// function CommentsComp({ cardData, onBackClick }) {
//   const {
//     name,
//     createdon,
//     title,
//     status,
//     question,
//     options,
//     votingPeriod,
//     category,
//     likeCount: initialLikeCount,
//   } = cardData;

//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(initialLikeCount);
//   const [comments, setComments] = useState([]); // Initialize empty comments
//   const [newComment, setNewComment] = useState(""); // For adding new comments
//   const target = useRef(null);
//   const [showOverlay, setShowOverlay] = useState(false);

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   // Add a new comment
//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       const newCommentObj = {
//         id: Date.now(),
//         text: newComment,
//         likes: 0,
//         liked: false,
//         replies: [],
//       };
//       setComments([...comments, newCommentObj]);
//       setNewComment(""); // Clear input after adding
//     }
//   };

//   // Add a reply to a specific comment
//   const handleAddReply = (commentId, replyText) => {
//     if (replyText.trim()) {
//       const updatedComments = comments.map((comment) => {
//         if (comment.id === commentId) {
//           return {
//             ...comment,
//             replies: [
//               ...comment.replies,
//               {
//                 id: Date.now(),
//                 text: replyText,
//                 likes: 0,
//                 liked: false,
//               },
//             ],
//           };
//         }
//         return comment;
//       });
//       setComments(updatedComments);
//     }
//   };

//   // Like/unlike a comment
//   const handleLikeComment = (commentId) => {
//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         const newLikedState = !comment.liked;
//         return {
//           ...comment,
//           liked: newLikedState,
//           likes: newLikedState ? comment.likes + 1 : comment.likes - 1,
//         };
//       }
//       return comment;
//     });
//     setComments(updatedComments);
//   };

//   // Like/unlike a reply
//   const handleLikeReply = (commentId, replyId) => {
//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: comment.replies.map((reply) => {
//             if (reply.id === replyId) {
//               const newLikedState = !reply.liked;
//               return {
//                 ...reply,
//                 liked: newLikedState,
//                 likes: newLikedState ? reply.likes + 1 : reply.likes - 1,
//               };
//             }
//             return reply;
//           }),
//         };
//       }
//       return comment;
//     });
//     setComments(updatedComments);
//   };

//   return (
//     <Card>
//       <Card.Body>
//         <Button onClick={onBackClick} variant="secondary" className="mb-3">
//           <BsBack /> Back to All Polls
//         </Button>

//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name: {name}</h6>
//             <p>Created: {createdon}</p>
//             <p>Title: {title}</p>
//             <p>Status: {status}</p>
//           </div>
//           <Button variant="primary">Follow</Button>
//         </Card.Header>

//         <Card.Text>
//           <div className="mt-3 mb-3">{question}</div>
//           <Card.Text>
//             {options.map((option, index) => (
//               <div key={index}>{option}</div>
//             ))}
//           </Card.Text>
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
//               />
//             </button>
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span> likes
//           </p>
//           <p
//             ref={target}
//             onClick={() => setShowOverlay(!showOverlay)}
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
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <i
//                       className="bi bi-facebook"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer">
//                     <i
//                       className="bi bi-whatsapp"
//                       style={{ fontSize: "35px" }}
//                     ></i>
//                   </a>
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>

//         <Card.Text>
//           <h6>Comments:</h6>
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment.id}>
//                 {comment.text} (Likes: {comment.likes})
//                 <Button
//                   variant="link"
//                   onClick={() => handleLikeComment(comment.id)}
//                 >
//                   <FontAwesomeIcon
//                     icon={comment.liked ? solidHeart : regularHeart}
//                     style={{
//                       color: comment.liked ? "red" : "gray",
//                       marginLeft: "8px",
//                     }}
//                   />
//                 </Button>
//                 <Form inline className="mt-2">
//                   <Form.Control
//                     type="text"
//                     placeholder="Add a reply..."
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleAddReply(comment.id, e.target.value);
//                         e.target.value = ""; // Clear input after adding
//                       }
//                     }}
//                   />
//                 </Form>
//                 {comment.replies.length > 0 && (
//                   <ul>
//                     {comment.replies.map((reply) => (
//                       <li key={reply.id}>
//                         {reply.text} (Likes: {reply.likes})
//                         <Button
//                           variant="link"
//                           onClick={() => handleLikeReply(comment.id, reply.id)}
//                         >
//                           <FontAwesomeIcon
//                             icon={reply.liked ? solidHeart : regularHeart}
//                             style={{
//                               color: reply.liked ? "red" : "gray",
//                               marginLeft: "8px",
//                             }}
//                           />
//                         </Button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <Form inline className="mt-3">
//             <Form.Control
//               type="text"
//               placeholder="Add a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleAddComment();
//                 }
//               }}
//             />
//             <Button variant="primary" onClick={handleAddComment}>
//               Add Comment
//             </Button>
//           </Form>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CommentsComp;

//---------------------------------------------------------------------------------------------------------------------------------------------

//updatedcode

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Card,
//   Button,
//   ProgressBar,
//   Overlay,
//   Popover,
//   Form,
//   Modal,
// } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { BsBack } from "react-icons/bs";
// import axios from "axios";
// import { useContext } from "react";
// import { PageContext } from "../../App";
// // import Onepoll from "../Onepoll";
// import CardComp from "./Card";
// import Polllist from "../Polllist";

// function CommentsComp() {
//   // const {
//   //   name,
//   //   createdon,
//   //   title,
//   //   status,
//   //   question,
//   //   options,
//   //   votingPeriod,
//   //   category,
//   //   likeCount: initialLikeCount,
//   //   comments: initialComments,
//   // } = cardData;

//   const [totallike, setTotallike] = useState(0);
//   const [liked, setLiked] = useState(false); // State for likes
//   const [likeCount, setLikeCount] = useState(""); // State for likes count

//   const [selectedOption, setSelectedOption] = useState(null); // State for selected option
//   const [showVoteButton, setShowVoteButton] = useState(false);
//   const [hasVoted, setHasVoted] = useState(false);

//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button
//   let [onepoll, setOnepoll] = useState("");
//   let [error, setError] = useState("");
//   let [loading, setLoading] = useState(true);
//   let [page, setPage, pollid, setPollid] = useContext(PageContext);
//   console.log(pollid, page);

//   //comment section

//   const [newComment, setNewComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [showReplyModal, setShowReplyModal] = useState(false);
//   const [newReply, setNewReply] = useState("");
//   const [currentCommentId, setCurrentCommentId] = useState(null);
//   const [replyToReplyId, setReplyToReplyId] = useState(null);
//   const [showNestedReplyModal, setShowNestedReplyModal] = useState(false);
//   const [newNestedReply, setNewNestedReply] = useState("");

//   const handleAddComment = async () => {
//     console.log("addcomment");
//     console.log(newComment, onepoll._id, onepoll.createdBy._id);
//     if (newComment.trim() === "") return;

//     try {
//       const response = await axios.post(
//         "http://92.205.109.210:8028/comment/createcomment",
//         {
//           comment: newComment,
//           poll_id: onepoll._id,
//           user_id: onepoll.createdBy._id,
//         }
//       );
//       console.log(response.data);
//       setComments((prev) => [response.data.comment, ...prev]);
//       setNewComment("");
//       // Add the new comment to the list
//       // setNewComment(response.data);
//       //  setNewComment((prevComments) => [...prevComments, response.data]);
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   const handleLikeComment = async (index) => {
//     const updatedComments = [...comments];
//     updatedComments[index].likes += 1;
//     setComments(updatedComments);

//     // like count
//     try {
//       await axios.post("http://92.205.109.210:8028/comment/likecomment", {
//         user_id: onepoll.createdBy._id,
//         comment_id: currentCommentId,
//       });
//     } catch (error) {
//       console.error("Error liking comment:", error);
//     }
//   };

//   //modal for reply

//   const handleOpenReplyModal = (commentId) => {
//     setCurrentCommentId(commentId);
//     setShowReplyModal(true);
//   };

//   //addd reply

//   const handleAddReply = async () => {
//     if (newReply.trim() === "") return;

//     try {
//       const response = await axios.post(
//         `http://92.205.109.210:8028/comment/replycomment`,
//         {
//           reply_msg: newReply,
//           poll_id: onepoll._id,
//           user_id: onepoll.createdBy._id,
//           comment_id: currentCommentId,
//         }
//       );
//       console.log(response.data);

//       const updatedComments = comments.map((comment) =>
//         comment._id === currentCommentId
//           ? {
//               ...comment,
//               replies: [...comment.replies, response.data.reply_msg, newReply],
//             }
//           : comment
//       );
//       // const matchingComment = comments.find(
//       //   (comment) => comment._id === currentCommentId
//       // );

//       // matchingComment.replies = [
//       //   ...matchingComment.replies,
//       //   response.data.reply,
//       // ];

//       console.log(updatedComments);
//       // setComments((prev) => [...prev, updatedComments]);
//       setNewReply("");
//       setShowReplyModal(false);
//     } catch (error) {
//       console.error("Error adding reply:", error);
//     }
//   };

//   const handleOpenNestedReplyModal = (commentId, replyId) => {
//     setCurrentCommentId(commentId);
//     setReplyToReplyId(replyId);
//     setShowNestedReplyModal(true);
//   };

//   const handleAddNestedReply = async () => {
//     if (newNestedReply.trim() === "") return;

//     try {
//       const response = await axios.post(
//         `http://92.205.109.210:8028/comment/replycomment`,
//         {
//           reply_msg: newNestedReply,
//           poll_id: onepoll._id,
//           user_id: onepoll.createdBy._id,
//           comment_id: currentCommentId,

//         }
//       )};
//       const updatedComments = comments.map((comment) =>
//         comment._id === currentCommentId
//           ? {
//               ...comment,
//               replies: comment.replies.map((reply) =>
//                 reply._id === replyToReplyId
//                   ? {
//                       ...reply,
//                       replies: [...reply.replies, response.data.reply],
//                     }
//                   : reply
//               ),
//             }
//           : comment
//       );

//       setComments(updatedComments);
//       setNewNestedReply("");
//       setShowNestedReplyModal(false);
//     } catch (error) {
//       console.error("Error adding nested reply:", error);
//     }
//   };

//   const handleLikeReply = async (commentId, replyId) => {
//     const updatedComments = comments.map((comment) =>
//       comment._id === commentId
//         ? {
//             ...comment,
//             replies: comment.replies.map((reply) =>
//               reply._id === replyId
//                 ? { ...reply, likes: reply.likes + 1 } // Incrementing likes for the reply
//                 : reply
//             ),
//           }
//         : comment
//     );
//     setComments(updatedComments);

//     try {
//       await axios.post("http://92.205.109.210:8028/comment/likecomment", {
//         user_id: onepoll.createdBy._id,
//         comment_id: replyId,
//       });
//     } catch (error) {
//       console.error("Error liking reply:", error);
//     }
//   };

//   // useEffect(()=>{
//   //   axios.post("http://92.205.109.210:8028/polls/getone",{
//   //     poll_id:pollid
//   //   }).then(res=>{
//   //     console.log(res.data)
//   //     setOnepoll(res.data)
//   //     console.log(onepoll.status)
//   //   })
//   // },[])

//   useEffect(() => {
//     axios
//       .post("http://92.205.109.210:8028/polls/getone", {
//         poll_id: pollid,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setOnepoll(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Error fetching poll data");
//         setLoading(false);
//       });
//   }, [pollid]);
//   console.log(onepoll.status);

//   useEffect(() => {
//     fetchComments();
//   }, [onepoll._id]);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.post(
//         "http://92.205.109.210:8028/comment/getbyid",
//         {
//           poll_id: onepoll._id,
//           user_id: onepoll.createdBy._id,
//         }
//       );
//       setComments(response.data);
//       console.log("Comments are", comments);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };
//   console.log("view comment", comments);

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       setSelectedOption(index); // Select the option
//       setShowVoteButton(true);
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null);
//     setShowVoteButton(false);
//   };

//   const handleVoteClick = () => {
//     console.log(selectedOption);
//     if (selectedOption !== null) {
//       const selectedOptionValue = onepoll.options[selectedOption].option;
//       console.log(selectedOptionValue);
//       axios
//         .post("http://92.205.109.210:8028/polls/voteonpoll", {
//           option: selectedOptionValue,

//           poll_id: onepoll._id,
//           user_id: onepoll.createdBy._id,
//         })

//         .then((response) => {
//           console.log("Vote submitted successfully:", response.data);
//           setHasVoted(true);
//         })
//         .catch((error) => {
//           console.error("Error submitting vote:", error);
//         });
//     }
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   const onBackClick = () => {
//     window.location.href = "/Homepage";
//   };
//   console.log(onepoll);
//   // console.log(onepoll)

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   const handleLike = () => {
//     axios
//       .post("http://92.205.109.210:8028/polls/likeonpoll", {
//         poll_id: onepoll._id,
//         user_id: onepoll.createdBy._id,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setTotallike(res.data.Total_likes);
//         console.log(res.data.Total_likes);
//         console.log(totallike);
//       });
//   };

//   return (
//     <>
//       {/* <h1>Comments</h1> */}

//       <Card>
//         <Card.Body>
//           <Button onClick={onBackClick} variant="secondary" className="mb-3">
//             <BsBack /> Back to All Polls
//           </Button>

//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               {/* <h6>Name:{onepoll.createdBy.user_name}</h6> */}
//               <h6>Name: {onepoll.createdBy?.user_name || "Unknown"}</h6>
//               <p>Created At:{onepoll.createdAt} </p>
//               <p>Expiration Time: {onepoll.expirationTime} </p>
//               {/* <p>Title:{onepoll.title} </p> */}
//               <p>Question:{onepoll.question}</p>
//               <p>Status:{onepoll.status}</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>
//           <Card.Text>
//             <div className="mt-3 mb-3"></div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>Poll Ends on{onepoll.expirationTime}</p>
//                   <p>Category:{onepoll.category_name} </p>
//                 </Card.Header>
//                 {onepoll.options && onepoll.options.length > 0 && (
//                   <Card.Text className="d-flex flex-column">
//                     {onepoll.options.map((optionObj, index) => (
//                       <div key={index}>
//                         {selectedOption === index ? (
//                           <ProgressBar
//                             now={100}
//                             label={optionObj.option}
//                             onClick={unselectOption}
//                             style={{ cursor: "pointer" }}
//                           />
//                         ) : (
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               id={`option${index + 1}`}
//                               name="options"
//                               value={optionObj.option}
//                               onChange={() => handleOptionChange(index)}
//                               checked={selectedOption === index}
//                             />
//                             <label
//                               className="form-check-label"
//                               htmlFor={`option${index + 1}`}
//                             >
//                               {optionObj.option}
//                             </label>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </Card.Text>
//                 )}
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <button
//                 onClick={toggleLike}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 <FontAwesomeIcon
//                   icon={liked ? solidHeart : regularHeart}
//                   style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
//                   onClick={handleLike}
//                 />
//               </button>
//               <span style={{ marginLeft: "8px" }}>total like:{totallike}</span>{" "}
//               like
//             </p>

//             <p ref={target} style={{ cursor: "pointer" }}>
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
//                     &nbsp;&nbsp;
//                     <a
//                       href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i
//                         className="bi bi-twitter"
//                         style={{ fontSize: "35px" }}
//                       ></i>
//                     </a>
//                     &nbsp;&nbsp;
//                     <a
//                       href="https://www.instagram.com/?url=yourPollLink"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i
//                         className="bi bi-instagram"
//                         style={{ fontSize: "35px" }}
//                       ></i>
//                     </a>
//                     &nbsp;&nbsp;
//                     <a
//                       href="https://api.whatsapp.com/send?text=Check%20out%20this%20poll%20https://example.com/poll/123"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <i
//                         className="bi bi-whatsapp"
//                         style={{ fontSize: "35px" }}
//                       ></i>
//                     </a>
//                   </div>
//                 </Popover.Body>
//               </Popover>
//             </Overlay>
//           </Card.Footer>

//           <Card.Text>
//             <h6>Comments:</h6>

//             <Form inline className="mt-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Add a comment..."
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//               />
//               <Button
//                 variant="primary"
//                 onClick={handleAddComment}
//                 disabled={!newComment}
//               >
//                 Add Comment
//               </Button>
//             </Form>

//             {/* Display comments */}
//             {comments.map((comment, index) => (
//               <div key={comment._id} className="mt-3">
//                 <p>{comment.comment}</p>
//                 <Button
//                   variant="link"
//                   onClick={() => handleLikeComment(comment._id)}
//                 >
//                   Like ({comment.isliked})
//                 </Button>
//                 <Button
//                   variant="link"
//                   onClick={() => handleOpenReplyModal(comment._id)}
//                 >
//                   Reply
//                 </Button>
//                 {console.log("comments-", comments)}
//                 {/* Display replies */}
//                 {/* {comments.map((comment) => { */}

//                 {comment.replies.map((reply, replyIndex) => (
//                   <div key={replyIndex} className="ml-3">
//                     <p>- {reply.reply_msg}</p>
//                   </div>
//                 ))}
//                 {/* })} */}
//               </div>
//             ))}
//           </Card.Text>
//           {/* Reply Modal */}
//           <Modal show={showReplyModal} onHide={() => setShowReplyModal(false)}>
//             <Modal.Header closeButton>
//               <Modal.Title>Reply to Comment</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form>
//                 <Form.Group controlId="replyInput">
//                   <Form.Label>Reply</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Write your reply..."
//                     value={newReply}
//                     onChange={(e) => setNewReply(e.target.value)}
//                   />
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button
//                 variant="secondary"
//                 onClick={() => setShowReplyModal(false)}
//               >
//                 Close
//               </Button>
//               <Button variant="primary" onClick={handleAddReply}>
//                 Reply
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// export default CommentsComp;

//----------------------------------

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Button,
  ProgressBar,
  Overlay,
  Popover,
  Form,
  Modal,
  ToastContainer,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { BsBack } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import { PageContext } from "../../App";
import { toast } from "react-toastify";

function CommentsComp() {
  const [totallike, setTotallike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);
  const [showVoteButton, setShowVoteButton] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);
  const target = useRef(null);
  let [onepoll, setOnepoll] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(true);
  let [page, setPage, pollid, setPollid] = useContext(PageContext);

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [currentCommentId, setCurrentCommentId] = useState(null);
  const [likedComments, setLikedComments] = useState({});
  const [likedReplies, setLikedReplies] = useState({});

  // Added state for nested replies
  const [replyToReplyId, setReplyToReplyId] = useState(null); // New state for nested replies
  const [showNestedReplyModal, setShowNestedReplyModal] = useState(false); // State for nested reply modal
  const [newNestedReply, setNewNestedReply] = useState(""); // State for nested reply


  
  console.log(pollid);
  let userId =
    sessionStorage.getItem("loginuserId") ||
    sessionStorage.getItem("googleuserId");

  // useEffect(() => {
  //   axios
  //     .post("http://92.205.109.210:8028/polls/getone", {
  //       poll_id: pollid,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setOnepoll(res.data);
  //       console.log(onepoll);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError("Error fetching poll data");
  //       setLoading(false);
  //     });
  // }, [pollid]);

  useEffect(() => {
    if (pollid) {
      fetchPollDataAndComments();
    }
  }, [pollid]);

  const fetchPollDataAndComments = async () => {
    try {
      const pollResponse = await axios.post(
        "http://92.205.109.210:8028/polls/getone",
        {
          poll_id: pollid,
        }
      );
      setOnepoll(pollResponse.data);
      console.log(pollResponse.data);

      // await fetchComments();
    } catch (error) {
      setError("Error fetching poll data");
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() === "") return;

    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/comment/createcomment",
        {
          comment: newComment,
          poll_id: onepoll._id,
          user_id: userId,
        }
      );
      setComments((prev) => [response.data.comment, ...prev]);
      setNewComment("");
      // fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleLikeComment = async (index, commentId) => {
    const updatedComments = [...comments];
    updatedComments[index].likers.push(userId);
    setComments(updatedComments);

    try {
      await axios.post("http://92.205.109.210:8028/comment/likecomment", {
        user_id: userId,
        // comment_id: currentCommentId,
        comment_id: commentId,
      });
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  const handleOpenReplyModal = (commentId) => {
    setCurrentCommentId(commentId);
    setShowReplyModal(true);
  };

  const handleAddReply = async () => {
    if (newReply.trim() === "") return;

    try {
      const response = await axios.post(
        `http://92.205.109.210:8028/comment/replycomment`,
        {
          reply_msg: newReply,
          poll_id: onepoll._id,
          user_id: userId,
          comment_id: currentCommentId,
        }
      );

      const updatedComments = comments?.map((comment) =>
        comment._id === currentCommentId
          ? {
              ...comment,
              replies: [...comment.replies, response.data.reply],
            }
          : comment
      );

      setComments(updatedComments);
      setNewReply("");
      setShowReplyModal(false);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handleOpenNestedReplyModal = (commentId, replyId) => {
    setCurrentCommentId(commentId);
    setReplyToReplyId(replyId);
    setShowNestedReplyModal(true);
  };

  const handleAddNestedReply = async () => {
    if (newNestedReply.trim() === "") return;

    try {
      const response = await axios.post(
        `http://92.205.109.210:8028/comment/replycomment`,
        {
          reply_msg: newNestedReply,
          poll_id: onepoll._id,
          user_id: userId,
          comment_id: currentCommentId,
          // reply_to_reply_id: replyToReplyId,
        }
      );

      const updatedComments = comments.map((comment) =>
        comment._id === currentCommentId
          ? {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply._id === replyToReplyId
                  ? {
                      ...reply,
                      replies: [...reply.replies, response.data.reply],
                    }
                  : reply
              ),
            }
          : comment
      );

      setComments(updatedComments);
      setNewNestedReply("");
      setShowNestedReplyModal(false);
    } catch (error) {
      console.error("Error adding nested reply:", error);
    }
  };

  // Added function to handle likes on replies
  const handleLikeReply = async (commentId, replyId) => {
    const updatedComments =
      comments &&
      comments.map((comment) =>
        comment._id === commentId
          ? {
              ...comment,
              replies:
                comment &&
                comment.replies.map((reply) =>
                  reply._id === replyId
                    ? {
                        ...reply,

                        likers: [...reply.likers, userId],
                      }
                    : reply
                ),
            }
          : comment
      );
    setComments(updatedComments);

    try {
      await axios.post("http://92.205.109.210:8028/comment/likereply", {
        user_id: userId,
        comment_id: commentId,
        reply_id: replyId,
      });
    } catch (error) {
      console.error("Error liking reply:", error);
    }
  };

  // const fetchComments = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://92.205.109.210:8028/comment/getbyid",
  //       {
  //         poll_id: onepoll._id,
  //         user_id: onepoll.createdBy._id,
  //       }
  //     );
  //     console.log(response.data);
  //     setComments(response.data);
  //   } catch (error) {
  //     console.error("Error fetching comments:", error);
  //   }
  // };
  const fetchComments = async () => {
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/comment/getbyid",
        {
          poll_id: onepoll._id,
          user_id: userId,
        }
      );
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  useEffect(() => {
    if (onepoll) {
      fetchComments();
    }
  }, [onepoll, comments]); //added dependency here

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

  const handleVoteToggle = () => {
    setHasVoted(!hasVoted);
    //   console.log(hasVoted)
    console.log(selectedOption, hasVoted);
    if (selectedOption != null) {
      const selectedOptionValue = onepoll.options[selectedOption]; // Get the value of the selected option
      console.log(selectedOptionValue);

      axios
        .post("http://92.205.109.210:8028/polls/voteonpoll", {
          poll_id: onepoll._id,
          user_id: userId,
          option: selectedOptionValue,
        })
        .then((response) => {
          console.log(response.data);
          console.log(response.data.message);
          if (response.data.message == "Vote recorded successfully.") {
            toast.success("Your vote is successfully registered", {
              autoClose: 1000,
            });
          } else {
            toast.info("Your vote is removed successfully", {
              autoClose: 1000,
            });
          }
          console.log(response.data);
          setSelectedOption("");
        })
        .catch((error) => {
          console.error("Error submitting vote:", error);
        });
    }
    //     else {

    //       toast.info('Your vote is removed successfully');
    //       setHasVoted(false);
    //       setSelectedOption("");
    // };

    // let handleVoteToggle=()=>{
    //   console.log(selectedOption,hasVoted)

    //     const selectedOptionValue = options[selectedOption]; // Get the value of the selected option
    // console.log(selectedOptionValue)

    // console.log(_id, createdBy._id, selectedOptionValue)
    //       axios.post('http://92.205.109.210:8028/polls/voteonpoll',{

    //       poll_id: _id,
    //       user_id: userId,
    //        option: selectedOptionValue,
    //       })
    //       .then(response => {
    //         // toast.success('Your vote is successfully registered');
    //         console.log( response.data);

    //       })
    //       .catch(error => {
    //         console.error('Error submitting vote:', error);
    //       });
  };

  const handleShareClick = () => {
    setShowOverlay(!showOverlay);
  };

  const onBackClick = () => {
    window.location.href = "/Homepage";
  };

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  const handleLike = () => {
    axios
      .post("http://92.205.109.210:8028/polls/likeonpoll", {
        poll_id: onepoll._id,
        user_id: userId,
      })
      .then((res) => {
        setTotallike(res.data.Total_likes);
      });
  };
  console.log(onepoll);

  const toggleCommentLike = (index) => {
    setLikedComments((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleReplyLike = (commentId, replyId) => {
    setLikedReplies((prev) => ({
      ...prev,
      [commentId]: {
        ...prev[commentId],
        [replyId]: !prev[commentId]?.[replyId],
      },
    }));
  };

  return (
    <>
      <nav
        onClick={onBackClick}
        style={{
          position: "fixed",

          height: "5%",
          width: "46.5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          backgroundColor: "lightgrey",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <i class="bi bi-box-arrow-in-left"></i>BACK TO ALL POLLS
      </nav>

      <Card style={{ marginTop: "7%" }}>
        <Card.Body>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Name: {onepoll.createdBy?.user_name || "Unknown"}</h6>
              <p>Created At: {onepoll.createdAt}</p>
              <p>Expiration Time: {onepoll.expirationTime}</p>
              <p>Question: {onepoll.question}</p>
              <p>Status: {onepoll.status}</p>
            </div>
            <Button variant="primary">Follow</Button>
          </Card.Header>
          <Card.Text>
            <div className="mt-3 mb-3"></div>
            <Card className="mb-3">
              <Card.Body>
                <Card.Header className="d-flex justify-content-between">
                  <p>Poll Ends on {onepoll.expirationTime}</p>
                  <p>
                    Category:{" "}
                    {onepoll.category &&
                      onepoll.category.map((item) => item.category_name)}
                  </p>
                </Card.Header>
                {onepoll.options && (
                  <Card.Body>
                    <div>
                      {onepoll.options.map((option, index) => (
                        <div key={index}>
                          {selectedOption === index ? (
                            <div>
                              <ProgressBar
                                now={100}
                                label={option.option}
                                name="options"
                                onClick={() => setSelectedOption(null)}
                                style={{ cursor: "pointer" }}
                                // onChange={() => {
                                //   setSelectedOption(option.option);
                                //   setShowVoteButton(true);
                                // }}
                              />
                            </div>
                          ) : (
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id={`option${index + 1}`}
                                name="options"
                                value={option.option}
                                onChange={() => handleOptionChange(index)}
                                checked={selectedOption === index}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`option${index + 1}`}
                              >
                                {option.option} ({option.count})
                              </label>
                            </div>
                          )}
                        </div>
                      ))}
                      {selectedOption !== null && (
                        <Button
                          variant={hasVoted ? "primary" : "danger"}
                          onClick={() => handleVoteToggle()}
                          className="mt-3 align-self-center"
                        >
                          {hasVoted ? "Vote" : "Unvote"}
                        </Button>
                      )}
                    </div>
                    <ToastContainer />
                  </Card.Body>
                )}
                <div>
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
                </div>
              </Card.Body>
            </Card>
            <div>
              <h5>Comments</h5>

              {/* Add Comment Input Moved Here */}
              <Form.Control
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-3"
              />
              <Button
                variant="primary"
                className="mb-3"
                onClick={handleAddComment}
                disabled={!newComment}
              >
                Comment
              </Button>
         

              {comments.length > 0 &&
                comments.map((comment, index) => (
                  <div key={comment._id} className="mb-3">
                    <Card>
                      <Card.Body>
                        <p>{comment.comment}</p>
                        <p style={{ fontSize: "small", color: "grey" }}>
                          @{comment.user_id.user_name}
                        </p>

                        {/* <p>Likes: {comment.likes.count}</p> */}
                        <button
                          onClick={() => {
                            handleLikeComment(index, comment._id);
                            toggleCommentLike(index);
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={
                              likedComments[index] ? solidHeart : regularHeart
                            }
                            style={{
                              color: likedComments[index] ? "red" : "gray",
                              fontSize: "24px",
                            }}
                          />
                        </button>
                        <span>Likes: {comment.likers.length}</span>

                        <Button
                          variant="link"
                          onClick={() => handleOpenReplyModal(comment._id)}
                        >
                          Reply
                        </Button>
                        {comment.replies.length > 0 && (
                          <div style={{ marginLeft: "20px" }}>
                            {comment.replies.map((reply) => (
                              <div key={reply._id} className="mb-2">
                                <Card>
                                  <Card.Body>
                                    <p>{reply.reply_msg}</p>
                                    <p
                                      style={{
                                        fontSize: "small",
                                        color: "grey",
                                      }}
                                    >
                                      @{reply.user_id.user_name}
                                    </p>

                                    <button
                                      onClick={() => {
                                        handleLikeReply(comment._id, reply._id);
                                        toggleReplyLike(comment._id, reply._id);
                                      }}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <FontAwesomeIcon
                                        icon={
                                          likedReplies[comment._id]?.[reply._id]
                                            ? solidHeart
                                            : regularHeart
                                        }
                                        style={{
                                          color: likedReplies[comment._id]?.[
                                            reply._id
                                          ]
                                            ? "red"
                                            : "gray",
                                          fontSize: "24px",
                                        }}
                                      />
                                    </button>
                                    <span>Likes: {reply.likers.length}</span>

                                    <Button
                                      variant="link"
                                      onClick={() =>
                                        handleOpenNestedReplyModal(
                                          comment._id,
                                          reply._id
                                        )
                                      }
                                    >
                                      Reply
                                    </Button>
                                    {reply.replies &&
                                      reply.replies.length > 0 && (
                                        <div style={{ marginLeft: "20px" }}>
                                          {reply.replies.map((nestedReply) => (
                                            <div key={nestedReply._id}>
                                              <Card>
                                                <Card.Body>
                                                  <p>
                                                    {" "}
                                                    Nested Reply :{" "}
                                                    {nestedReply.reply_msg}
                                                  </p>
                                                  <p>
                                                    Likes: {nestedReply.likes}
                                                  </p>
                                                  <button
                                                    onClick={() => {
                                                      handleLikeReply(
                                                        comment._id,
                                                        nestedReply._id
                                                      );
                                                      toggleReplyLike(
                                                        comment._id,
                                                        nestedReply._id
                                                      );
                                                    }}
                                                    style={{
                                                      background: "none",
                                                      border: "none",
                                                      cursor: "pointer",
                                                    }}
                                                  >
                                                    <FontAwesomeIcon
                                                      icon={
                                                        likedReplies[
                                                          comment._id
                                                        ]?.[nestedReply._id]
                                                          ? solidHeart
                                                          : regularHeart
                                                      }
                                                      style={{
                                                        color: likedReplies[
                                                          comment._id
                                                        ]?.[nestedReply._id]
                                                          ? "red"
                                                          : "gray",
                                                        fontSize: "24px",
                                                      }}
                                                    />
                                                  </button>
                                                </Card.Body>
                                              </Card>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                  </Card.Body>
                                </Card>
                              </div>
                            ))}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showReplyModal} onHide={() => setShowReplyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter your reply..."
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReplyModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddReply}>
            Reply
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showNestedReplyModal}
        onHide={() => setShowNestedReplyModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reply to Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter your reply..."
            value={newNestedReply}
            onChange={(e) => setNewNestedReply(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowNestedReplyModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleAddNestedReply}>
            Reply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentsComp;

//-------------------------------
