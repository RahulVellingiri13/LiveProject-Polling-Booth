// import { React , useState} from 'react'
// import { Button, Card ,Modal ,Form } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import Comment from './Comment';
// import ShareModal from './ShareModal';

// function CardComp({name,createdon,title,status,question, options, votingPeriod, category, status}) {

//     const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(5); // Initialize the like count state

//   const [showModal, setShowModal] = useState(false);
//   const [comments, setComments] = useState([
//     { id: 1, text: 'This is the first comment.', likes: 0, replies: [] },
//     { id: 2, text: 'This is the second comment.', likes: 0, replies: [] },
//     // Add more comments as needed
//   ]);

// const toggleLike = () => {
//     if (liked) {
//       setLikeCount(likeCount - 1); // Decrease the count if already liked
//     } else {
//       setLikeCount(likeCount + 1); // Increase the count if not liked yet
//     }
//     setLiked(!liked);
//   };

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

// const handleLike = (id) => {
//     const updateLikes = (comment) => {
//       if (comment.id === id) {
//         return { ...comment, likes: comment.likes + 1 };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(updateLikes) };
//       }
//       return comment;
//     };

//     setComments(comments.map(updateLikes));
//   };

//   const handleReply = (id, replyText) => {
//     const addReply = (comment) => {
//       if (comment.id === id) {
//         return {
//           ...comment,
//           replies: [...comment.replies, { id: Date.now(), text: replyText, likes: 0, replies: [], depth: (comment.depth || 0) + 1 }]
//         };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(addReply) };
//       }
//       return comment;
//     };

//     setComments(comments.map(addReply));
//   };

//   return (
//     <Card>
//     <Card.Body>
//       <Card.Header className="d-flex justify-content-between align-items-center">
//         <div>
//           <h6>name:{name}</h6>
//           <p>Created: {createdon}</p>
//           <p>Title: {title}</p>
//           <p>Status: {status}</p>
//         </div>
//         <Button variant="primary">Follow</Button>
//       </Card.Header>

//       <Card.Text>
//         <div className="mt-3 mb-3">{question}</div>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Header className="d-flex justify-content-between">
//             <p>Poll Ends on {votingPeriod}</p>
//             <p>Category: {category}</p>
//             </Card.Header>
//             <Card.Text className="d-flex flex-column">
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   id="option1"
//                   name="options"
//                   value="op1"
//                 />

//                 <label className="form-check-label" htmlFor="option1">
//                   op1
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   id="option2"
//                   name="options"
//                   value="op2"
//                 />
//                 <label className="form-check-label" htmlFor="option2">
//                   op2
//                 </label>
//               </div>
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Card.Text>

//       <Card.Footer className="d-flex justify-content-between">
//         <p>
//           {/* <i className="bi bi-heart"></i>  */}
//           {/* <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//         <FontAwesomeIcon
//           icon={liked ? solidHeart : regularHeart}
//           style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//         />
//       </button> */}
//       <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//         <FontAwesomeIcon
//           icon={liked ? solidHeart : regularHeart}
//           style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//         />
//       </button>
//       <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}

//       like
//         </p>
//       <p onClick={handleShow} style={{ cursor: 'pointer', color: 'blue' }}>
//         <i className="bi bi-chat-quote-fill"></i> Comments
//       </p>

//       <Modal show={showModal} onHide={handleClose} style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
//         <Modal.Header closeButton>
//           <Modal.Title>Comments</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {comments.map(comment => (
//             <Comment
//               key={comment.id}
//               comment={comment}
//               onLike={handleLike}
//               onReply={handleReply}
//             />
//           ))}

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//         {/* <p>
//           <i className="bi bi-share"></i> Share
//         </p> */}

//         <p onClick={handleShow} style={{ cursor: 'pointer' }}>
//         <i className="bi bi-share"></i> Share </p>
//       </Card.Footer>
//     </Card.Body>
//   </Card>
//   )
// }

// export default CardComp

//------------------------------------------------------------------------------------------
// import React from "react";
// import { Card, Button } from "react-bootstrap";

// function CardComp({ name, createdon, title, status, question, options, votingPeriod, category }) {
//   return (
//     <Card className="polllist-card mb-4">
//       <Card.Body>
//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>{name}</h6>
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
//                   <div className="form-check" key={index}>
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id={`option${index}`}
//                       name="options"
//                       value={option}
//                     />
//                     <label className="form-check-label" htmlFor={`option${index}`}>
//                       {option}
//                     </label>
//                   </div>
//                 ))}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Card.Text>

//         <Card.Footer className="d-flex justify-content-between">
//           <p>
//             <i className="bi bi-heart"></i> Like
//           </p>
//           <p>
//             <i className="bi bi-chat-quote-fill"></i> Comments
//           </p>
//           <p>
//             <i className="bi bi-share"></i> Share
//           </p>
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardComp;

//------------------------------------------------------------------------------------------------

// import { React, useState } from 'react';
// import { Button, Card, Modal } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import Comment from './Comment';
// import ShareModal from './ShareModal';

// function CardComp({ name, createdon, title, status, question, options, votingPeriod, category , onPollSubmit }) {
//     const [liked, setLiked] = useState(false);
//     const [likeCount, setLikeCount] = useState(5); // Initialize the like count state
//     const [showModal, setShowModal] = useState(false);
//     const [comments, setComments] = useState([
//         { id: 1, text: 'This is the first comment.', likes: 0, replies: [] },
//         { id: 2, text: 'This is the second comment.', likes: 0, replies: [] },
//     ]);

//     const toggleLike = () => {
//         setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//         setLiked(!liked);
//     };

//     const handleShow = () => setShowModal(true);
//     const handleClose = () => setShowModal(false);

//     const handleLike = (id) => {
//         const updateLikes = (comment) => {
//             if (comment.id === id) {
//                 return { ...comment, likes: comment.likes + 1 };
//             }
//             if (comment.replies && comment.replies.length > 0) {
//                 return { ...comment, replies: comment.replies.map(updateLikes) };
//             }
//             return comment;
//         };

//         setComments(comments.map(updateLikes));
//     };

//     const handleReply = (id, replyText) => {
//         const addReply = (comment) => {
//             if (comment.id === id) {
//                 return {
//                     ...comment,
//                     replies: [
//                         ...comment.replies,
//                         { id: Date.now(), text: replyText, likes: 0, replies: [] }
//                     ]
//                 };
//             }
//             if (comment.replies && comment.replies.length > 0) {
//                 return { ...comment, replies: comment.replies.map(addReply) };
//             }
//             return comment;
//         };

//         setComments(comments.map(addReply));
//     };

//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//                     <div>
//                         <h6>Name: {name}</h6>
//                         <p>Created: {createdon}</p>
//                         <p>Title: {title}</p>
//                         <p>Status: {status}</p>
//                     </div>
//                     <Button variant="primary">Follow</Button>
//                 </Card.Header>

//                 <Card.Text>
//                     <div className="mt-3 mb-3">{question}</div>
//                     <Card className="mb-3">
//                         <Card.Body>
//                             <Card.Header className="d-flex justify-content-between">
//                                 <p>Poll Ends on {votingPeriod}</p>
//                                 <p>Category: {category}</p>
//                             </Card.Header>
//                             <Card.Text className="d-flex flex-column">
//                                 {options.map((option, index) => (
//                                     <div className="form-check" key={index}>
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             id={`option${index + 1}`}
//                                             name="options"
//                                             value={option}
//                                         />
//                                         <label className="form-check-label" htmlFor={`option${index + 1}`}>
//                                             {option}
//                                         </label>
//                                     </div>
//                                 ))}
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Card.Text>

//                 <Card.Footer className="d-flex justify-content-between">
//                     <p>
//                         <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//                             <FontAwesomeIcon
//                                 icon={liked ? solidHeart : regularHeart}
//                                 style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//                             />
//                         </button>
//                         <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}
//                         like
//                     </p>
//                     <p onClick={handleShow} style={{ cursor: 'pointer', color: 'blue' }}>
//                         <i className="bi bi-chat-quote-fill"></i> Comments
//                     </p>

//                     <Modal show={showModal} onHide={handleClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>Comments</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             {comments.map(comment => (
//                                 <Comment
//                                     key={comment.id}
//                                     comment={comment}
//                                     onLike={handleLike}
//                                     onReply={handleReply}
//                                 />
//                             ))}
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>

//                     <p onClick={handleShow} style={{ cursor: 'pointer' }}>
//                         <i className="bi bi-share"></i> Share
//                     </p>
//                 </Card.Footer>
//             </Card.Body>
//         </Card>
//     );
// }

// export default CardComp;

//-----------------------------------------------------------------------------------------

// when clicking the comments the card would expand

// import React, { useState } from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import Comment from './Comment';
// import ShareModal from './ShareModal';

// function CardComp({ name, createdon, title, status, question, options, votingPeriod, category, onPollSubmit }) {
//     const [liked, setLiked] = useState(false); // New state for likes
//     const [likeCount, setLikeCount] = useState(5); // New state for likes count
//     const [expandedCardId, setExpandedCardId] = useState(null); // New state for expanded card while clicking the comments
//     const [comments, setComments] = useState([
//         { id: 1, text: 'This is the first comment.', likes: 0, replies: [] },
//         { id: 2, text: 'This is the second comment.', likes: 0, replies: [] },
//     ]);   //New state for Comments

//     const toggleLike = () => {
//         setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//         setLiked(!liked);
//     };

//     const handleShowComments = () => {
//         setExpandedCardId(expandedCardId === null ? 1 : null);
//     };

//     const handleCloseComments = () => {
//         setExpandedCardId(null);
//     };

//     const handleLike = (id) => {
//         const updateLikes = (comment) => {
//             if (comment.id === id) {
//                 return { ...comment, likes: comment.likes + 1 };
//             }
//             if (comment.replies && comment.replies.length > 0) {
//                 return { ...comment, replies: comment.replies.map(updateLikes) };
//             }
//             return comment;
//         };

//         setComments(comments.map(updateLikes));
//     };

//     const handleReply = (id, replyText) => {
//         const addReply = (comment) => {
//             if (comment.id === id) {
//                 return {
//                     ...comment,
//                     replies: [
//                         ...comment.replies,
//                         { id: Date.now(), text: replyText, likes: 0, replies: [] }
//                     ]
//                 };
//             }
//             if (comment.replies && comment.replies.length > 0) {
//                 return { ...comment, replies: comment.replies.map(addReply) };
//             }
//             return comment;
//         };

//         setComments(comments.map(addReply));
//     };

//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//                     <div>
//                         <h6>Name: {name}</h6>
//                         <p>Created: {createdon}</p>
//                         <p>Title: {title}</p>
//                         <p>Status: {status}</p>
//                     </div>
//                     <Button variant="primary">Follow</Button>
//                 </Card.Header>

//                 <Card.Text>
//                     <div className="mt-3 mb-3">{question}</div>
//                     <Card className="mb-3">
//                         <Card.Body>
//                             <Card.Header className="d-flex justify-content-between">
//                                 <p>Poll Ends on {votingPeriod}</p>
//                                 <p>Category: {category}</p>
//                             </Card.Header>
//                             <Card.Text className="d-flex flex-column">
//                                 {options.map((option, index) => (
//                                     <div className="form-check" key={index}>
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             id={`option${index + 1}`}
//                                             name="options"
//                                             value={option}
//                                         />
//                                         <label className="form-check-label" htmlFor={`option${index + 1}`}>
//                                             {option}
//                                         </label>
//                                     </div>
//                                 ))}
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Card.Text>

//                 <Card.Footer className="d-flex justify-content-between">
//                     <p>
//                         <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//                             <FontAwesomeIcon
//                                 icon={liked ? solidHeart : regularHeart}
//                                 style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//                             />
//                         </button>
//                         <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}
//                         like
//                     </p>

//                     {/* Conditional rendering to expand the card and display comments */}

//                     {expandedCardId === null ? (
//                         <p onClick={handleShowComments} style={{ cursor: 'pointer', color: 'blue' }}>
//                             <i className="bi bi-chat-quote-fill"></i> Comments
//                         </p>
//                     ) : (
//                         <div style={{ width: '100%' }}>
//                             <h5>Comments</h5>
//                             {comments.map(comment => (
//                                 <Comment
//                                     key={comment.id}
//                                     comment={comment}
//                                     onLike={handleLike}
//                                     onReply={handleReply}
//                                 />
//                             ))}
//                             <Button variant="secondary" onClick={handleCloseComments} style={{ marginTop: '10px' }}>
//                                 Close Comments
//                             </Button>
//                         </div>
//                     )}

//                     <p style={{ cursor: 'pointer' }}>
//                         <i className="bi bi-share"></i> Share
//                     </p>
//                 </Card.Footer>
//             </Card.Body>
//         </Card>
//     );
// }

// export default CardComp;

//---------------------------------------------------------------------------------------------------

//now for another component
// import { React, useState } from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

// function CardComp({ index, name, createdon, title, status, question, options, votingPeriod, category, onPollSubmit, onCommentClick }) {
//     const [liked, setLiked] = useState(false);
//     const [likeCount, setLikeCount] = useState(5); // Initialize the like count state

//     const toggleLike = () => {
//         setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//         setLiked(!liked);
//     };

//     const handleCommentClick = () => {
//         // Store the selected card details in session storage
//         const cardDetails = {
//             index,
//             name,
//             createdon,
//             title,
//             status,
//             question,
//             options,
//             votingPeriod,
//             category,
//             likeCount,
//             liked
//         };
//         sessionStorage.setItem('selectedCard', JSON.stringify(cardDetails));
//         onCommentClick(index); // Pass the selected card index to parent component
//     };

//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//                     <div>
//                         <h6>Name: {name}</h6>
//                         <p>Created: {createdon}</p>
//                         <p>Title: {title}</p>
//                         <p>Status: {status}</p>
//                     </div>
//                     <Button variant="primary">Follow</Button>
//                 </Card.Header>

//                 <Card.Text>
//                     <div className="mt-3 mb-3">{question}</div>
//                     <Card className="mb-3">
//                         <Card.Body>
//                             <Card.Header className="d-flex justify-content-between">
//                                 <p>Poll Ends on {votingPeriod}</p>
//                                 <p>Category: {category}</p>
//                             </Card.Header>
//                             <Card.Text className="d-flex flex-column">
//                                 {options.map((option, index) => (
//                                     <div className="form-check" key={index}>
//                                         <input
//                                             className="form-check-input"
//                                             type="radio"
//                                             id={`option${index + 1}`}
//                                             name="options"
//                                             value={option}
//                                         />
//                                         <label className="form-check-label" htmlFor={`option${index + 1}`}>
//                                             {option}
//                                         </label>
//                                     </div>
//                                 ))}
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Card.Text>

//                 <Card.Footer className="d-flex justify-content-between">
//                     <p>
//                         <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//                             <FontAwesomeIcon
//                                 icon={liked ? solidHeart : regularHeart}
//                                 style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//                             />
//                         </button>
//                         <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}
//                         like
//                     </p>
//                     <p onClick={handleCommentClick} style={{ cursor: 'pointer', color: 'blue' }}>
//                         <i className="bi bi-chat-quote-fill"></i> Comments
//                     </p>
//                     <p style={{ cursor: 'pointer' }}>
//                         <i className="bi bi-share"></i> Share
//                     </p>
//                 </Card.Footer>
//             </Card.Body>
//         </Card>
//     );
// }

// export default CardComp;

//----------------------------------------------------------------------------------------------------

//this code turns RADIO BUTTON OPTIONS TO PROGRESS BAR

// import React, { useState } from 'react';
// import { Button, Card, ProgressBar } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
// import Comment from './Comment';

// function CardComp({ name, createdon, title, status, question, options, votingPeriod, category, onPollSubmit }) {
//     const [liked, setLiked] = useState(false); // New state for likes
//     const [likeCount, setLikeCount] = useState(5); // New state for likes count
//     const [expandedCardId, setExpandedCardId] = useState(null); // New state for expanded card while clicking the comments
//     const [comments, setComments] = useState([
//         { id: 1, text: 'This is the first comment.', likes: 0, replies: [] },
//         { id: 2, text: 'This is the second comment.', likes: 0, replies: [] },
//     ]);   // New state for Comments

//     const [selectedOption, setSelectedOption] = useState(null); // New state for selected option

//     const toggleLike = () => {
//         setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//         setLiked(!liked);
//     };

//     const handleShowComments = () => {
//         setExpandedCardId(expandedCardId === null ? 1 : null);
//     };

//     const handleCloseComments = () => {
//         setExpandedCardId(null);
//     };

//     const handleLike = (id) => {
//         const updateLikes = (comment) => {
//             if (comment.id === id) {
//                 return { ...comment, likes: comment.likes + 1 };
//             }
//             if (comment.replies && comment.replies.length > 0) {
//                 return { ...comment, replies: comment.replies.map(updateLikes) };
//             }
//             return comment;
//         };

//         setComments(comments.map(updateLikes));
//     };

//     const handleReply = (id, replyText) => {
//         const addReply = (comment) => {
//             if (comment.id === id) {
//                 return {
//                     ...comment,
//                     replies: [
//                         ...comment.replies,
//                         { id: Date.now(), text: replyText, likes: 0, replies: [] }
//                     ]
//                 };
//             }
//             if (comment.replies && comment.replies.length > 0) {
//                 return { ...comment, replies: comment.replies.map(addReply) };
//             }
//             return comment;
//         };

//         setComments(comments.map(addReply));
//     };

//     const handleOptionChange = (index) => {
//         if (selectedOption === index) {
//             unselectOption(); // Unselect the option if it's already selected
//         } else {
//             setSelectedOption(index); // Select the option
//         }
//     };

//     const unselectOption = () => {
//         setSelectedOption(null); // Unselect the currently selected option
//     };

//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Header className="d-flex justify-content-between align-items-center">
//                     <div>
//                         <h6>Name: {name}</h6>
//                         <p>Created: {createdon}</p>
//                         <p>Title: {title}</p>
//                         <p>Status: {status}</p>
//                     </div>
//                     <Button variant="primary">Follow</Button>
//                 </Card.Header>

//                 <Card.Text>
//                     <div className="mt-3 mb-3">{question}</div>
//                     <Card className="mb-3">
//                         <Card.Body>
//                             <Card.Header className="d-flex justify-content-between">
//                                 <p>Poll Ends on {votingPeriod}</p>
//                                 <p>Category: {category}</p>
//                             </Card.Header>
//                             <Card.Text className="d-flex flex-column">
//                                 {options.map((option, index) => (
//                                     <div key={index}>
//                                         {selectedOption === index ? (
//                                             <ProgressBar
//                                                 now={100}
//                                                 label={option}
//                                                 onClick={unselectOption} // Unselect on clicking the progress bar
//                                                 style={{ cursor: 'pointer' }}
//                                             />
//                                         ) : (
//                                             <div className="form-check">
//                                                 <input
//                                                     className="form-check-input"
//                                                     type="radio"
//                                                     id={`option${index + 1}`}
//                                                     name="options"
//                                                     value={option}
//                                                     onChange={() => handleOptionChange(index)}
//                                                     checked={selectedOption === index}
//                                                 />
//                                                 <label className="form-check-label" htmlFor={`option${index + 1}`}>
//                                                     {option}
//                                                 </label>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Card.Text>

//                 <Card.Footer className="d-flex justify-content-between">
//                     <p>
//                         <button onClick={toggleLike} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//                             <FontAwesomeIcon
//                                 icon={liked ? solidHeart : regularHeart}
//                                 style={{ color: liked ? 'red' : 'gray', fontSize: '24px' }}
//                             />
//                         </button>
//                         <span style={{ marginLeft: '8px' }}>{likeCount}</span> {/* Display the like count */}
//                         like
//                     </p>

//                     {/* Conditional rendering to expand the card and display comments */}
//                     {expandedCardId === null ? (
//                         <p onClick={handleShowComments} style={{ cursor: 'pointer', color: 'blue' }}>
//                             <i className="bi bi-chat-quote-fill"></i> Comments
//                         </p>
//                     ) : (
//                         <div style={{ width: '100%' }}>
//                             <h5>Comments</h5>
//                             {comments.map(comment => (
//                                 <Comment
//                                     key={comment.id}
//                                     comment={comment}
//                                     onLike={handleLike}
//                                     onReply={handleReply}
//                                 />
//                             ))}
//                             <Button variant="secondary" onClick={handleCloseComments} style={{ marginTop: '10px' }}>
//                                 Close Comments
//                             </Button>
//                         </div>
//                     )}

//                     <p style={{ cursor: 'pointer' }}>
//                         <i className="bi bi-share"></i> Share
//                     </p>
//                 </Card.Footer>
//             </Card.Body>
//         </Card>
//     );
// }

// export default CardComp;

//----------------------------------------------------------------------------------------------------

//this code adds SHARE OPTION

// import React, { useState, useRef } from "react";
// import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import Comment from "./Comment";

// function CardComp({
//   name,
//   createdon,
//   title,
//   status,
//   question,
//   options,
//   votingPeriod,
//   category,
//   onPollSubmit,
// }) {
//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(5); // New state for likes count
//   const [expandedCardId, setExpandedCardId] = useState(null); // New state for expanded card while clicking the comments
//   const [comments, setComments] = useState([
//     { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
//     { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
//   ]); // New state for Comments

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   const handleShowComments = () => {
//     setExpandedCardId(expandedCardId === null ? 1 : null);
//   };

//   const handleCloseComments = () => {
//     setExpandedCardId(null);
//   };

//   const handleLike = (id) => {
//     const updateLikes = (comment) => {
//       if (comment.id === id) {
//         return { ...comment, likes: comment.likes + 1 };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(updateLikes) };
//       }
//       return comment;
//     };

//     setComments(comments.map(updateLikes));
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
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//           {/* Conditional rendering to expand the card and display comments */}

//           {expandedCardId === null ? (
//             <p
//               onClick={handleShowComments}
//               style={{ cursor: "pointer", color: "blue" }}
//             >
//               <i className="bi bi-chat-quote-fill"></i> Comments
//             </p>
//           ) : (
//             <div style={{ width: "100%" }}>
//               <h5>Comments</h5>
//               {comments.map((comment) => (
//                 <Comment
//                   key={comment.id}
//                   comment={comment}
//                   onLike={handleLike}
//                   onReply={handleReply}
//                 />
//               ))}
//               <Button
//                 variant="secondary"
//                 onClick={handleCloseComments}
//                 style={{ marginTop: "10px" }}
//               >
//                 Close Comments
//               </Button>
//             </div>
//           )}

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
//                       style={{ fontSize: "24px" }}
//                     ></i>
//                   </a>
//                   <a
//                     href="https://twitter.com/share?url=yourPollLink&text=Check+out+this+poll"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-twitter"
//                       style={{ fontSize: "24px" }}
//                     ></i>
//                   </a>
//                   <a
//                     href="https://www.instagram.com/?url=yourPollLink"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <i
//                       className="bi bi-instagram"
//                       style={{ fontSize: "24px" }}
//                     ></i>
//                   </a>
//                   {/* Add more social media links here */}
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardComp;

//-------------------------------------------------------------------------------------------------------------------

// this code REMOVES all the function from that COMMENTS

// import React, { useState, useRef, useContext } from "react";
// import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import Onepoll from "../Onepoll";
// import CommentsComp from "./CommentsComp";
// import { PageContext } from "../../App";
// // import Comment from "./Comment";

// function CardComp({

//     index,
//     pollId,
//     _id,
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
// }) {
//   let [page,setPage,pollid,setPollid]=useContext(PageContext)
//   // let [pollid,setPollid]=useContext(PageContext)
//   console.log(pollid)
//     let navigate=useNavigate()
//     // let [pollid,setPollid]=useState("")
//     console.log(index)
//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(5); // New state for likes count
//   const [comments, setComments] = useState([
//     { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
//     { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
//   ]); // New state for Comments

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   const handleLike = (id) => {
//     const updateLikes = (comment) => {
//       if (comment.id === id) {
//         return { ...comment, likes: comment.likes + 1 };
//       }
//       if (comment.replies && comment.replies.length > 0) {
//         return { ...comment, replies: comment.replies.map(updateLikes) };
//       }
//       return comment;
//     };

//     setComments(comments.map(updateLikes));
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
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null); // Unselect the currently selected option
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   // let handleViewcomment=(commentkey)=>{
//   //   console.log(commentkey)
//     // navigate('/viewcomment/' )
//   // }

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
// console.log(options)

// let handleOnepoll=(_id)=>{
// console.log(_id)
// // navigate('/onepoll/'+_id
// setPage("CommentsComp")
// console.log(page)
// setPollid(_id)
// console.log(page,pollid)

// }
//   return (
//     <Card>
//       <Card.Body>
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
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span>{" "}
//             {/* Display the like count */}
//             like
//           </p>

//         <p style={{ cursor: "pointer", color: "blue" }}
//         // onClick={()=>handleViewComment(index)}
//         >
//             <i className="bi bi-chat-quote-fill" onClick={()=>handleOnepoll(_id)}  ></i> Comments
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
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardComp;

//-----------------------------------------------------------------------------------------------------------------

//this code to Handle the Card Click and Replace the Component

// //=------------------------------------------------------------------------------------------------

// import React, { useState, useRef } from "react";
// import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios

// function CardComp({
//   index,
//   pollId,
//   _id,
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
// }) {
//   const navigate = useNavigate();
//   const [pollid, setPollid] = useState("");
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(5);
//   const [comments, setComments] = useState([
//     { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
//     { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
//   ]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showOverlay, setShowOverlay] = useState(false);
//   const target = useRef(null);

//   const toggleLike = async () => {
//     try {
//       const response = await axios.post("http://92.205.109.210:8028/polls/likeonpoll", {
//         pollId: pollId, // Pass the poll ID to the API
//       });

//       if (response.data.success) {
//         setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//         setLiked(!liked);
//       } else {
//         console.error("Error liking/unliking poll:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error liking/unliking poll:", error.message);
//     }
//   };

//   const handleVote = async (index) => {
//     try {
//       const response = await axios.post("http://92.205.109.210:8028/polls/voteonpoll", {
//         pollId: pollId, // Pass the poll ID to the API
//         optionIndex: index, // Pass the selected option index
//       });

//       if (response.data.success) {
//         setSelectedOption(index);
//       } else {
//         console.error("Error voting/unvoting:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error voting/unvoting:", error.message);
//     }
//   };

//   const handleOptionChange = (index) => {
//     if (selectedOption === index) {
//       unselectOption(); // Unselect the option if it's already selected
//     } else {
//       handleVote(index); // Call the API to vote
//     }
//   };

//   const unselectOption = () => {
//     setSelectedOption(null);
//   };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay);
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
//     console.log(_id);
//   };

//   return (
//     <Card onClick={() => handleOnepoll(_id)}>
//       <Card.Body>
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
//                         onClick={unselectOption}
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
//             <span style={{ marginLeft: "8px" }}>{likeCount}</span> like
//           </p>

//           <p
//             style={{ cursor: "pointer", color: "blue" }}
//             onClick={() => handleViewComment(index)}
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
//                 </div>
//               </Popover.Body>
//             </Popover>
//           </Overlay>
//         </Card.Footer>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardComp;

//---------------------------------------------------------------------------------------------------------------------------------------------

//updatedcode

import React, { useState, useRef, useContext } from "react";
import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Onepoll from "../Onepoll";
import CommentsComp from "./CommentsComp";
import { PageContext } from "../../App";
import axios from "axios";
// import Comment from "./Comment";

function CardComp({
  index,
  pollId,
  _id,
  createdBy,
  name,
  createdon,
  title,
  status,
  question,
  options,
  votingPeriod,
  category,
  onPollSubmit,
  onCardClick,
  handleVote,
}) {
  let [page, setPage, pollid, setPollid] = useContext(PageContext);
  // let [pollid,setPollid]=useContext(PageContext)
  console.log(pollid);
  let navigate = useNavigate();
  // let [pollid,setPollid]=useState("")
  console.log(index);
  let [totallike, setTotallike] = useState(0);
  const [liked, setLiked] = useState(false); // New state for likes
  const [likeCount, setLikeCount] = useState(""); // New state for likes count
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
    { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
  ]); // New state for Comments

  const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
  const [showVoteButton, setShowVoteButton] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
  const target = useRef(null); // Reference for the share button

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  // const handleLike = (id) => {
  //   const updateLikes = (comment) => {
  //     if (comment.id === id) {
  //       return { ...comment, likes: comment.likes + 1 };
  //     }
  //     if (comment.replies && comment.replies.length > 0) {
  //       return { ...comment, replies: comment.replies.map(updateLikes) };
  //     }
  //     return comment;
  //   };

  //   setComments(comments.map(updateLikes));
  // };

  const handleReply = (id, replyText) => {
    const addReply = (comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            { id: Date.now(), text: replyText, likes: 0, replies: [] },
          ],
        };
      }
      if (comment.replies && comment.replies.length > 0) {
        return { ...comment, replies: comment.replies.map(addReply) };
      }
      return comment;
    };

    setComments(comments.map(addReply));
  };

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

  // const handleVoteClick = () => {
  //   if (selectedOption !== null) {
  //     const selectedOptionValue = options[selectedOption];

  //     handleVote(selectedOptionValue);
  //   }
  // };

  // const handleVoteClick = async () => {
  //   if (selectedOption !== null) {
  //     const selectedOptionValue = options[selectedOption];

  //     try {

  //       const response = await axios.post('http://92.205.109.210:8028/polls/voteonpoll', {
  //         option: selectedOptionValue,
  //       });

  //       console.log('Vote submitted successfully:', response.data);
  //     } catch (error) {

  //       console.error('Error submitting vote:', error);
  //     }
  //   }
  // };

  const handleVoteClick = () => {
    if (selectedOption !== null) {
      const selectedOptionValue = options[selectedOption];

      axios
        .post("http://92.205.109.210:8028/polls/voteonpoll", {
          option: selectedOptionValue,
        })
        .then((response) => {
          console.log("Vote submitted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error submitting vote:", error);
        });
    }
  };
  const handleShareClick = () => {
    setShowOverlay(!showOverlay); // Toggle the overlay visibility
  };

  // let handleViewcomment=(commentkey)=>{
  //   console.log(commentkey)
  // navigate('/viewcomment/' )
  // }

  const handleViewComment = () => {
    onCardClick({
      index,
      name,
      createdon,
      title,
      status,
      question,
      options,
      votingPeriod,
      category,
      likeCount,
      liked,
      comments,
    });
  };
  console.log(options);

  let handleOnepoll = (_id) => {
    console.log(_id);
    // navigate('/onepoll/'+_id
    setPage("CommentsComp");
    console.log(page);
    setPollid(_id);
    console.log(page, pollid);
  };

  const handleLike = () => {
    axios
      .post("http://92.205.109.210:8028/polls/likeonpoll", {
        poll_id: _id,
        user_id: createdBy._id,
      })
      .then((res) => {
        console.log(res.data);
        setTotallike(res.data.Total_likes);
        console.log(res.data.Total_likes);
        console.log(totallike);
      });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Name: {name}</h6>
            <p>Created: {createdon}</p>
            <p>Title: {title}</p>
            <p>Status: {status}</p>
          </div>
          <Button variant="primary">Follow</Button>
        </Card.Header>

        <Card.Text>
          <div className="mt-3 mb-3">{question}</div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Header className="d-flex justify-content-between">
                <p>Poll Ends on {votingPeriod}</p>
                <p>Category: {category}</p>
              </Card.Header>
              <Card.Text className="d-flex flex-column">
                {options.map((option, index) => (
                  <div key={index}>
                    {selectedOption === index ? (
                      <div>
                        <ProgressBar
                          now={100}
                          label={option}
                          onClick={unselectOption}
                          style={{ cursor: "pointer" }}
                        />
                        {/* {showVoteButton && (
                          <Button
                            variant="primary"
                            onClick={handleVoteClick}
                            className=""
                          >
                            Vote
                          </Button>
                        )} */}
                      </div>
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
                ))}
                {/* Conditionally render the vote button at the end of all options */}
                {selectedOption !== null && (
                  <Button
                    variant="primary"
                    onClick={handleVoteClick}
                    className="mt-3 align-self-center"
                  >
                    Vote
                  </Button>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <button
              onClick={toggleLike}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={liked ? solidHeart : regularHeart}
                style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
                onClick={handleLike}
              />
            </button>
            <span style={{ marginLeft: "8px" }}>total like: {totallike}</span>{" "}
            {/* Display the like count */}
            like
          </p>

          <p
            style={{ cursor: "pointer", color: "blue" }}
            // onClick={()=>handleViewComment(index)}
            onClick={() => handleOnepoll(_id)}
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
  );
}

export default CardComp;
