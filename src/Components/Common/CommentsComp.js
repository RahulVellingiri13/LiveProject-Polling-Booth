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

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Button,
  ProgressBar,
  Overlay,
  Popover,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { BsBack } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import { PageContext } from "../../App";
// import Onepoll from "../Onepoll";
import CardComp from "./Card";
import Polllist from "../Polllist";

function CommentsComp() {
  // const {
  //   name,
  //   createdon,
  //   title,
  //   status,
  //   question,
  //   options,
  //   votingPeriod,
  //   category,
  //   likeCount: initialLikeCount,
  //   comments: initialComments,
  // } = cardData;

  const [liked, setLiked] = useState(false); // State for likes
  const [likeCount, setLikeCount] = useState(""); // State for likes count
  // const [comments, setComments] = useState(initialComments); // State for Comments
  const [newComment, setNewComment] = useState(""); // State for new comment input
  const [replyText, setReplyText] = useState({}); // State for replies
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
  const target = useRef(null); // Reference for the share button
  let [onepoll, setOnepoll] = useState("");
  let [error, setError] = useState("");
  
  let [page, setPage, pollid, setPollid] = useContext(PageContext);
  console.log(pollid, page);

  useEffect(() => {
    axios
      .post("http://92.205.109.210:8028/polls/getone", {
        poll_id: pollid,
      })
      .then((res) => {
        console.log(res.data);
        setOnepoll(res.data);
        console.log(onepoll.status);
      });
  }, []);
  console.log(onepoll.status);
  // const toggleLike = () => {
  //   // setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  //   setLiked(!liked);
  // };

  // const handleOptionChange = (index) => {
  //   if (selectedOption === index) {
  //     unselectOption(); // Unselect the option if it's already selected
  //   } else {
  //     setSelectedOption(index); // Select the option
  //   }
  // };

  // const unselectOption = () => {
  //   setSelectedOption(null); // Unselect the currently selected option
  // };


  const handleShareClick = () => {
    setShowOverlay(!showOverlay); // Toggle the overlay visibility
  };

  // const handleAddComment = () => {
  //   if (newComment.trim()) {
  //     const newCommentObj = {
  //       id: comments.length + 1,
  //       text: newComment,
  //       likes: 0,
  //       replies: [],
  //     };
  //     setComments([...comments, newCommentObj]);
  //     setNewComment(''); // Reset input field
  //   }
  // };

  // const handleLikeComment = (id) => {
  //   setComments(
  //     comments.map((comment) =>
  //       comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
  //     )
  //   );
  // };

  // const handleUnlikeComment = (id) => {
  //   setComments(
  //     comments.map((comment) =>
  //       comment.id === id && comment.likes > 0
  //         ? { ...comment, likes: comment.likes - 1 }
  //         : comment
  //     )
  //   );
  // };

  // const handleAddReply = (commentId) => {
  //   if (replyText[commentId]?.trim()) {
  //     const updatedComments = comments.map((comment) => {
  //       if (comment.id === commentId) {
  //         return {
  //           ...comment,
  //           replies: [
  //             ...comment.replies,
  //             { id: comment.replies.length + 1, text: replyText[commentId], likes: 0 },
  //           ],
  //         };
  //       }
  //       return comment;
  //     });
  //     setComments(updatedComments);
  //     setReplyText({ ...replyText, [commentId]: '' });
  //   }
  // };

  // const handleLikeReply = (commentId, replyId) => {
  //   const updatedComments = comments.map((comment) => {
  //     if (comment.id === commentId) {
  //       const updatedReplies = comment.replies.map((reply) =>
  //         reply.id === replyId ? { ...reply, likes: reply.likes + 1 } : reply
  //       );
  //       return { ...comment, replies: updatedReplies };
  //     }
  //     return comment;
  //   });
  //   setComments(updatedComments);
  // };
  const onBackClick = () => {
    window.location.href = "/Homepage";
  };
  console.log(onepoll);
  // console.log(onepoll)

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };
  const handleLike = () => {
    axios
      .post("http://92.205.109.210:8028/polls/likeonpoll", {
        poll_id: onepoll._id,
        user_id: onepoll.createdBy._id,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  console.log(onepoll.options);

  return (
    <>
      {/* <h1>Comments</h1> */}

      <Card>
        <Card.Body>
          <Button onClick={onBackClick} variant="secondary" className="mb-3">
            <BsBack /> Back to All Polls
          </Button>

          <Card.Header className="d-flex justify-content-between align-items-center">
            <div>
              {/* <h6>Name:{onepoll.createdBy.user_name}</h6> */}
              <h6>Name: {onepoll.createdBy?.user_name || "Unknown"}</h6>
              <p>Created At:{onepoll.createdAt} </p>
              <p>Expiration Time: {onepoll.expirationTime} </p>
              {/* <p>Title:{onepoll.title} </p> */}
              <p>Question:{onepoll.question}</p>
              <p>Status:{onepoll.status}</p>
            </div>
            <Button variant="primary">Follow</Button>
          </Card.Header>

          <Card.Text>
            <div className="mt-3 mb-3"></div>
            <Card className="mb-3">
              <Card.Body>
                <Card.Header className="d-flex justify-content-between">
                  <p>Poll Ends on {onepoll.expirationTime}</p>
                  {/* <p>Category:{onepoll.category} </p> */}
                </Card.Header>
                <Card.Text className="d-flex flex-column">
                  {/* {onepoll.options.map((option, index) => (
                  <div key={index}>
                    {selectedOption === index ? (
                      <ProgressBar
                        now={100}
                        label={option}
                        onClick={unselectOption} // Unselect on clicking the progress bar
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`option${index + 1}`}
                          name="options"
                          value={option}
                          onChange={() => handleOptionChange(index)}
                          checked={selectedOption === index}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`option${index + 1}`}
                        >
                          {option}
                        </label>
                      </div>
                    )}
                  </div>
                ))} */}
                  <div>
                    {onepoll.options.map((option, index) => (
                      <div key={index}>
                        {/* {selectedOption === index ? (
            <ProgressBar
              now={100}
              label={option}
              onClick={unselectOption} // Unselect on clicking the progress bar
              style={{ cursor: 'pointer' }}
            />
          ) : ( */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            // id={`option${index + 1}`}
                            // name="options"
                            // value={option}
                            // onChange={() => handleOptionChange(index)}
                            // checked={selectedOption === index}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`option${index + 1}`}
                          >
                            {option}
                          </label>
                        </div>
                        ){/* } */}
                      </div>
                    ))}
                  </div>
                </Card.Text>
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
                  style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
                  onClick={handleLike}
                />
              </button>
              <span style={{ marginLeft: "8px" }}>{likeCount}</span> like
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
            <Popover id="popover-contained" >
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
                    className ="bi bi-whatsapp"
                      style={{ fontSize: "35px" }}
                    ></i>
                  </a>
                  {/* Add more social media links here */}
                </div>
              </Popover.Body>
            </Popover>
          </Overlay>
          </Card.Footer>

          <Card.Text>
            <h6>Comments:</h6>

            <Form inline className="mt-3">
              <Form.Control
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button variant="primary">Add Comment</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>

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
  );
}

export default CommentsComp;

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
