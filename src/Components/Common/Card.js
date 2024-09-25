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
//       const response = await axios.post("http://49.204.232.254:64/polls/likeonpoll", {
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
//       const response = await axios.post("http://49.204.232.254:64/polls/voteonpoll", {
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

// import React, { useState, useRef, useContext } from "react";
// import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
// import Onepoll from "../Onepoll";
// import CommentsComp from "./CommentsComp";
// import { PageContext } from "../../App";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function CardComp({
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
//   optionscount,
//   votingPeriod,
//   category,
//   onPollSubmit,
//   onCardClick,
//   handleVote,
// }) {

//   let userId =
//     sessionStorage.getItem("loginuserId") ||
//     sessionStorage.getItem("googleuserId");
//   console.log("userId:", userId);
//   console.log(userId);
//   let [page, setPage, pollid, setPollid] = useContext(PageContext);

//   // let [pollid,setPollid]=useContext(PageContext)
//   console.log(pollid);
//   console.log(optionscount)
//   let navigate = useNavigate();
//   // let [pollid,setPollid]=useState("")
//   console.log(index);
//   let [totallike, setTotallike] = useState(0);
//   const [liked, setLiked] = useState(false); // New state for likes
//   const [likeCount, setLikeCount] = useState(""); // New state for likes count
//   const [comments, setComments] = useState([
//     { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
//     { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
//   ]); // New state for Comments

//   const [selectedOption, setSelectedOption] = useState(null); // New state for selected option
//   const [showVoteButton, setShowVoteButton] = useState(false);
//   const [hasVoted, setHasVoted] = useState(true);
//   const [voteResults, setVoteResults] = useState([]); // State to hold vote results
// const [totalVotes, setTotalVotes] = useState(0); // State for total votes

//   const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
//   const target = useRef(null); // Reference for the share button

//   const toggleLike = () => {
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//     setLiked(!liked);
//   };

//   // const handleLike = (id) => {
//   //   const updateLikes = (comment) => {
//   //     if (comment.id === id) {
//   //       return { ...comment, likes: comment.likes + 1 };
//   //     }
//   //     if (comment.replies && comment.replies.length > 0) {
//   //       return { ...comment, replies: comment.replies.map(updateLikes) };
//   //     }
//   //     return comment;
//   //   };

//   //   setComments(comments.map(updateLikes));
//   // };

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

//   //new vote Toggle after progreebar operation
//   const fetchTotalVotes = () => {
//     axios
//       .post("http://49.204.232.254:64/polls/totalvote", {
//         poll_id: _id,
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
//       const selectedOptionValue = options[selectedOption];
//       console.log(selectedOptionValue);

//       axios
//         .post("http://49.204.232.254:64/polls/voteonpoll", {
//           poll_id: _id,
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

//     // const handleVoteToggle = () => {
//     //   setHasVoted(!hasVoted);
//     //   if (selectedOption != null) {
//     //     const selectedOptionValue = options[selectedOption]; // Get the value of the selected option
//     //     axios
//     //       .post("http://49.204.232.254:64/polls/voteonpoll", {
//     //         poll_id: _id,
//     //         user_id: userId,
//     //         option: selectedOptionValue,
//     //       })
//     //       .then((response) => {
//     //         console.log(response.data);
//     //         if (response.data.message === "Vote recorded successfully.") {
//     //           toast.success("Your vote is successfully registered", {
//     //             autoClose: 1000,
//     //           });

//     //           // Fetch updated vote results from the API
//     //           axios
//     //             .post(`http://49.204.232.254:64/polls/totalvote`,{
//     //               poll_id: _id,

//     //             })
//     //             .then((resultsResponse) => {
//     //               const results = resultsResponse.data.results;
//     //               const totalVotes = resultsResponse.data.totalVotes;
//     //               setVoteResults(results);
//     //               setTotalVotes(totalVotes);
//     //             })
//     //             .catch((error) => {
//     //               console.error("Error fetching vote results:", error);
//     //             });
//     //         } else {
//     //           toast.info("Your vote is removed successfully", {
//     //             autoClose: 1000,
//     //           });
//     //         }
//     //         setSelectedOption("");
//     //       })
//     //       .catch((error) => {
//     //         console.error("Error submitting vote:", error);
//     //       });
//     //   }
//     // };

//     //     else {

//     //       toast.info('Your vote is removed successfully');
//     //       setHasVoted(false);
//     //       setSelectedOption("");
//     // };

//     // let handleVoteToggle=()=>{
//     //   console.log(selectedOption,hasVoted)

//     //     const selectedOptionValue = options[selectedOption]; // Get the value of the selected option
//     // console.log(selectedOptionValue)

//     // console.log(_id, createdBy._id, selectedOptionValue)
//     //       axios.post('http://49.204.232.254:64/polls/voteonpoll',{

//     //       poll_id: _id,
//     //       user_id: userId,
//     //        option: selectedOptionValue,
//     //       })
//     //       .then(response => {
//     //         // toast.success('Your vote is successfully registered');
//     //         console.log( response.data);

//     //       })
//     //       .catch(error => {
//     //         console.error('Error submitting vote:', error);
//     //       });

//     const calculatePercentage = (votes) => {
//       if (totalVotes === 0) return 0;
//       return ((votes / totalVotes) * 100).toFixed(2); // Return percentage with 2 decimal places
//     };

//   const handleShareClick = () => {
//     setShowOverlay(!showOverlay); // Toggle the overlay visibility
//   };

//   // let handleViewcomment=(commentkey)=>{
//   //   console.log(commentkey)
//   // navigate('/viewcomment/' )
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
//   console.log(options);

//   let handleOnepoll = (_id) => {
//     console.log(_id);
//     // navigate('/onepoll/'+_id
//     setPage("CommentsComp");
//     console.log(page);
//     setPollid(_id);
//     console.log(page, pollid);
//   };

//   const handleLike = () => {
//     console.log(createdBy._id);
//     axios
//       .post("http://49.204.232.254:64/polls/likeonpoll", {
//         poll_id: _id,
//         user_id: userId,
//       })
//       .then((res) => {
//         console.log(res.data);
//         setTotallike(res.data.Total_likes);
//         console.log(res.data.Total_likes);
//         console.log(totallike);
//       });
//   };

//   return (
//     <Card style={{width:"40rem"}}>
//       <Card.Body>
//         <Card.Header className="d-flex justify-content-between align-items-center">
//           <div>
//             <h6>Name:{createdBy}</h6>
//             <p>Title:{title}</p>
//             <p>Status:{status}</p>
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
//               {/* <Card.Text className="d-flex flex-column">
//                 {options.map((option, index) => (
//                   <div key={index}>
//                     {selectedOption === index ? (
//                       <div>
//                         <ProgressBar
//                           now={100}
//                           label={option}
//                           // onClick={unselectOption}
//                           onClick={() => setSelectedOption(null)}
//                           style={{ cursor: "pointer" }}
//                         />
//                       </div>
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

//                 {/* Conditionally render the vote button at the end of all options */}

//                 {/* {selectedOption !== null && (
//                   <Button
//                     variant={hasVoted ? "primary" : "danger"}
//                     onClick={() => handleVoteToggle()}
//                     className="mt-3 align-self-center"
//                   >
//                     {hasVoted ? "Vote" : "Unvote"}
//                   </Button>
//                 )}
//               </Card.Text> */}

//               <Card.Text className="d-flex flex-column">
//     {options && options.length > 0 ? (
//       options.map((option, index) => (
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
//                 value={option}
//                 onChange={() => handleOptionChange(index)}
//                 checked={selectedOption === index}
//               />
//               {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
//                 {option}
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
//             onClick={() => handleOnepoll(_id)}
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
//     </Card>
//   );
// }

// export default CardComp;

//---------------

//updated 11 sep

import React, { useState, useRef, useContext, useEffect } from "react";
import { Button, Card, ProgressBar, Overlay, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Onepoll from "../Onepoll";
import CommentsComp from "./CommentsComp";
import { PageContext } from "../Homepage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function CardComp({
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
  polls,
  setPolls,
}) {
  let userId =
    sessionStorage.getItem("loginuserId") ||
    sessionStorage.getItem("googleuserId");
  console.log("userId:", userId);
  console.log(userId);
  console.log("loginuserid", sessionStorage.getItem("loginuserId"));
  console.log("googleuseriod", sessionStorage.getItem("googleuserId"));

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
    likedPolls,
    setLikedPolls,
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

  // let [pollid,setPollid]=useContext(PageContext)
  console.log(polluserId);
  console.log(pollid);
  console.log(optionscount);
  // console.log(votingPeriod);

  let navigate = useNavigate();
  // let [pollid,setPollid]=useState("")
  console.log(index);
  // let [totallike, setTotallike] = useState(poll.total_likes);
  // const [liked, setLiked] = useState(poll.createdBy.isLiked);
  // const [likeCount, setLikeCount] = useState(poll.total_likes);

  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment.", likes: 0, replies: [] },
    { id: 2, text: "This is the second comment.", likes: 0, replies: [] },
  ]); // New state for Comments

  //the following states are used while the vote section is working

  // const [showVoteButton, setShowVoteButton] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(
  //   poll.options.map((option) => option.option)
  // );
  // const [hasVoted, setHasVoted] = useState(poll.createdBy.isVoted);
  //   let [hasVotedbutton, setHasvotedbutton] = useState(
  //     poll.createdBy.isVoted ? "unvote" : "vote"
  //   );
  //   const [voteResults, setVoteResults] = useState([]);
  //   const [totalVotes, setTotalVotes] = useState(poll.total_votes);

  //-----till this

  // const [selectedOption, setSelectedOption] = useState(null);
  // const [showVoteButton, setShowVoteButton] = useState(false);
  //   const [hasVoted, setHasVoted] = useState();
  //   const [voteResults, setVoteResults] = useState([]);
  // const [totalVotes, setTotalVotes] = useState(0);

  // const [selectedOption, setSelectedOption] = useState(poll.options.option);
  // const [selectedOption, setSelectedOption] = useState(
  //   poll.options.map((option) => option.option)
  // );
  // const [showVoteButton, setShowVoteButton] = useState(poll.createdBy.isVoted);
  // const [hasVoted, setHasVoted] = useState(poll.createdBy.isVoted);
  // let [hasVotedbutton, setHasvotedbutton] = useState(
  //   poll.createdBy.isVoted ? "unvote" : "vote"
  // );
  // const [voteResults, setVoteResults] = useState([]);
  // const [totalVotes, setTotalVotes] = useState(poll.total_votes);

  // const [isFollowing, setIsFollowing] = useState(poll.createdBy.isFollowing);

  const [showOverlay, setShowOverlay] = useState(false);

  const target = useRef(null);

  // const fetchPolls = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://49.204.232.254:64/polls/getall",
  //       {
  //         user_id: userId,
  //       }
  //     );
  //     console.log(response.data);
  //     setPolls(response.data);
  //   } catch (error) {
  //     console.error("Error fetching polls:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPolls();
  // }, [polls]);

  useEffect(() => {
    if (poll && poll.createdBy) {
      setFollowStatus((prevState) => ({
        ...prevState,
        [poll.createdBy._id]: poll.createdBy.isFollowing,
      }));
    }
  }, [poll]);

  console.log("isUserFollowing", poll);

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

  //  useEffect(() => {
  //   fetchTotalVotes();
  // }, []);

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

  const fetchTotalVotes = () => {
    axios
      .post("http://49.204.232.254:64/polls/totalvote", {
        poll_id: _id,
      })
      .then((response) => {
        console.log(response.data);
        const updatedVoteResults = response.data.results || [];
        const updatedTotalVotes = response.data.totalVotes || 0;

        setVoteResults(updatedVoteResults);
        setTotalVotes(updatedTotalVotes);
        console.log(totalVotes);
        console.log(updatedTotalVotes);
        console.log(updatedVoteResults);
      })
      .catch((error) => {
        console.error("Error fetching total votes:", error);
      });
  };

  //this is the stable code for the calculate percentage

  const calculatePercentage = (count, totalVotes) => {
    if (totalVotes === 0) return 0;
    return ((count / totalVotes) * 100).toFixed(2);
  };

  // const calculatePercentage = (index) => {
  //   console.log("option Index", index);
  //   console.log(optionscount);
  //   console.log("total Votes", totalVotes);

  //   if (totalVotes === 0) return 0;
  //   // const votesForOption = voteResults[optionIndex] || 0;
  //   const votesForOption =
  //     optionscount && optionscount[index] ? optionscount[index] : 0;
  //   console.log("votesForOption", votesForOption);

  //   // return ((votesForOption / totalVotes) * 100).toFixed(1);

  //   const percentage = ((votesForOption / totalVotes) * 100).toFixed(1);
  //   console.log("percentage", percentage);
  //   return percentage;
  // };

  // const handleVoteToggle = (poll_id) => {
  //   console.log(userId);
  //   // setHasVoted(!hasVoted);
  //   console.log(hasVoted);
  //   console.log(selectedOption, hasVoted);
  //   // if (selectedOption != null) {
  //   const selectedOptionValue = options[selectedOption];
  //   console.log(selectedOptionValue);

  //   axios
  //     .post("http://49.204.232.254:64/polls/voteonpoll", {
  //       poll_id: _id,
  //       user_id: userId,
  //       option: selectedOptionValue,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log(response.data.message);
  //       if (response.data.message === "Vote recorded successfully.") {
  //         // toast.success("Your vote is successfully registered", {
  //         //   autoClose: 1000,
  //         // });
  //         alert("voted");
  //         setHasVoted(true);
  //         setHasvotedbutton("unvote");
  //         fetchTotalVotes();
  //       } else if (
  //         response.data.message ===
  //         "Vote removed successfully. Please vote again."
  //       ) {
  //         // toast.info("Your vote is removed successfully", {
  //         //   autoClose: 1000,
  //         // });
  //         alert("vote removed");
  //         setHasVoted(false);
  //         setHasvotedbutton("vote");
  //       } else {
  //         setHasVoted(polls.createdBy.isVoted);
  //         if (hasVoted) {
  //           setHasvotedbutton("unvote");
  //         } else {
  //           setHasvotedbutton("vote");
  //         }
  //       }
  //       console.log(response.data);
  //       setSelectedOption("");
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting vote:", error);
  //     });
  //   // }
  // };

  const handleVoteToggle = (poll_id, option) => {
    console.log(poll_id, userId, option);
    const selectedOptionValue = options[selectedOption];

    axios
      .post("http://49.204.232.254:64/polls/voteonpoll", {
        poll_id: _id,
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

  const getProgressBarColor = (index) => {
    if (selectedOption === index) {
      return "#28a745"; // Selected option will have a green color (or choose any variant)
    } else {
      return "#17a2b8"; // Other options will have a different color
    }
  };

  const handleShareClick = () => {
    setShowOverlay(!showOverlay);
  };

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

  console.log(poll);

  useEffect(() => {
    if (poll && poll.createdBy && poll.total_likes) {
      setLiked((prevState) => ({
        ...prevState,
        [poll._id]: poll.createdBy.isLiked,
      }));

      setTotallike((prev) => ({
        ...prev,
        [poll._id]: poll.total_likes,
      }));
    }

    console.log(liked[poll._id]);
    console.log({ [poll._id]: poll.total_likes });

    console.log(totallike);
  }, [poll]);

  // const toggleLike = () => {
  //   setLikeCount(liked ? likeCount - 1 : likeCount + 1);

  //  // setLiked(!liked);

  // };

  const handleLike = (id) => {
    //console.log(createdBy._id);
    // console.log(id)

    axios
      .post("http://49.204.232.254:64/polls/likeonpoll", {
        poll_id: id,
        user_id: userId,
      })

      .then((res) => {
        console.log(res.data);
        setTotallike((prev) => ({
          ...prev,
          [id]: res.data.Total_likes,
        }));
        if (res.data.message === "Like recorded successfully") {
          setLiked((prevState) => ({
            ...prevState,
            [id]: true,
          }));
        } else if (res.data.message === "Like removed successfully") {
          setLiked((prevState) => ({
            ...prevState,
            [id]: false,
          }));
        }
      })
      .catch((err) => {
        console.error("Error in Liking a poll", err);
      });
  };

  // useEffect(() => {
  //   if (poll) {
  //     setLiked((prevState) => ({
  //       ...prevState,
  //       [poll._id]: poll.createdBy.isLiked,
  //     }));
  //   }
  // }, [poll,userId]);

  // const handleFollowToggle = () => {
  //   console.log("Created By:", createdBy);
  //   console.log("User ID:", userId);
  //   console.log("Poll User ID:", polluserId);

  //   axios
  //     .post("http://49.204.232.254:64/api/follow", {
  //       user_id: userId,
  //       follow_user_id: polluserId,
  //     })
  //     .then((response) => {
  //       console.log("API Response:", response);
  //       console.log("Response Data:", response.data);

  //       if (response.data.message === "Follower added successfully") {
  //         setIsFollowing(true);
  //         toast.success("Followed successfully", { autoClose: 1000 });
  //       } else if (response.data.message === "Follower removed successfully") {
  //         setIsFollowing(false);
  //         toast.info("Unfollowed successfully", { autoClose: 1000 });
  //       } else {
  //         toast.warn("Unable to follow Yourself", { autoClose: 1000 });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error following/unfollowing user:", error);
  //       toast.error("An error occurred. Please try again.", {
  //         autoClose: 3000,
  //       });
  //     });
  // };

  const handleFollowToggle = (polluserId) => {
    const isFollowing = followStatus[polluserId] || false;

    axios
      .post("http://49.204.232.254:64/api/follow", {
        follow_user_id: polluserId,
        user_id: userId,
        action: isFollowing ? "unfollow" : "follow",
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

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Name:{createdBy}</h6>
            {/* <p>Title:{title}</p> */}
            {/* <p>Status:{status}</p> */}
            <p
              style={{
                color:
                  status === "open"
                    ? "green"
                    : status === "closed"
                    ? "red"
                    : "black",
              }}
            >
              Status: {status}
            </p>
          </div>
          {userId !== polluserId && poll && (
            <Button
              variant="primary"
              onClick={() => handleFollowToggle(poll.createdBy._id)}
            >
              {/* {isFollowing ? "Unfollow" : "Follow"} */}
              {followStatus[poll.createdBy._id] ? "Unfollow" : "Follow"}
            </Button>
          )}
        </Card.Header>

        <Card.Text>
          <div className="mt-3 mb-3">Question: {question}</div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Header className="d-flex justify-content-between">
                <p>Poll Ends on : {votingPeriod}</p>
                <p>Category: {category}</p>
              </Card.Header>

              {/* <Card.Text className="d-flex flex-column">
                {options.map((option, index) => (
                  <div key={index}>
                    {selectedOption === index ? (
                      <div>
                        <ProgressBar
                          now={100}
                          label={option}
                          // onClick={unselectOption}
                          onClick={() => setSelectedOption(null)}
                          style={{ cursor: "pointer" }}
                        />
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
                ))} */}

              {/* Conditionally render the vote button at the end of all options */}

              {/* {selectedOption !== null && (
                  <Button
                    variant={hasVoted ? "primary" : "danger"}
                    onClick={() => handleVoteToggle()}
                    className="mt-3 align-self-center"
                  >
                    {hasVoted ? "Vote" : "Unvote"}
                  </Button>
                )}
              </Card.Text> */}

              {/* this below oneis the stable one dont delete this */}

              {/* <Card.Text className="d-flex flex-column">
                {options?.map((option, index) => (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    {" "}
                
                    {!hasVoted ? (
                      // Show radio buttons when hasn't voted
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
                          {option} ({optionscount[index]})
                        </label>
                      </div>
                    ) : (
                      // Show progress bar with percentage after vote
                      <div style={{ position: "relative" }}>
                        <ProgressBar
                          now={calculatePercentage(index)}
                          style={{
                            height: "20px",
                            cursor: "pointer",
                          }}
                          variant={
                            selectedOption === index ? "success" : "info"
                          } // Selected option is green, others are blue
                          label={`${calculatePercentage(index)}%`}
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
                          {`${calculatePercentage(index)}%`}{" "}
                        
                        </span>
                      </div>
                    )}
                  </div>
                ))}

              
                {selectedOption !== null && showVoteButton && (
                  <Button
                    variant={!hasVoted ? "primary" : "danger"}
                    // onClick={handleVoteToggle}
                    onClick={() => {
                      handleVoteToggle();
                    }}
                    className="mt-3 align-self-center"
                  >
                    {hasVoted? "Vote" : "Unvote"}
                    {hasVotedbutton}
                  </Button>
                )}
              </Card.Text> */}
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
              {/* 
              <Card.Text className="d-flex flex-column">
    {options && options.length > 0 ? (
      options.map((option, index) => (
        <div key={index}>
          {voteResults.length > 0 ? (
            // Display the progress bar with percentage after voting
            <div>
              <ProgressBar
                now={calculatePercentage(voteResults[index]?.votes || 0)}
                label={`${calculatePercentage(voteResults[index]?.votes || 0)}%`}
                style={{ cursor: "pointer" }}
              />
            </div>
          ) : (
            // Render radio buttons before voting
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id={`option${index + 1}`}
                name="options"
                value={option}
                onChange={() => handleOptionChange(index)}
                checked={selectedOption === index}
              />   */}
              {/* <label className="form-check-label" htmlFor={`option${index + 1}`}> */}
              {/* {option}  */}
              {/* </label> */}

              {/* </div>
          )}
        </div>
      ))
    ) : (
      <p>No options available</p>
    )}

    {selectedOption !== null && voteResults.length === 0 && (
      <Button
        variant={hasVoted ? "primary" : "danger"}
        // onClick={handleVoteToggle}
        onClick={() => {
          handleVoteToggle();
        }}
        className="mt-3 align-self-center"
      >
        {hasVoted ? "Vote" : "Unvote"}
      </Button>
    )}
  </Card.Text>   */}

              <ToastContainer />
            </Card.Body>
          </Card>
        </Card.Text>

        <Card.Footer className="d-flex justify-content-between">
          <p>
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {/* {(poll.createdBy.isLiked).toString()} */}
              <FontAwesomeIcon
                icon={liked[poll._id] ? solidHeart : regularHeart}
                style={{
                  color: liked[poll._id] ? "red" : "gray",
                  fontSize: "24px",
                }}
                onClick={() => handleLike(poll._id)}
              />
            </button>
            <span style={{ marginLeft: "8px" }}>
              {" "}
              total like:{totallike ? totallike[poll._id] : 1}
            </span>{" "}
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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
