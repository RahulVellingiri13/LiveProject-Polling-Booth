// import React from 'react'
// import {Card , Button,Form,Row,Col , InputGroup} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function AddPoll() {
//   return (
//     <>
//         <Card style={{ padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
//             <Card.Header style={{textAlign:"center"}}> Create Your Polls here!</Card.Header>
//       <Form>
//         <Form.Group controlId="pollTitle" className="mb-3">
//           <Form.Control type="text" placeholder="Title" />
//         </Form.Group>

//         <Form.Group controlId="pollQuestion" className="mb-3">
//           <Form.Control as="textarea" rows={2} placeholder="Question" />
//         </Form.Group>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="option1" className="mb-3">
//               <InputGroup>
//                 <InputGroup.Text>
//                   <i className="bi bi-list"></i>
//                 </InputGroup.Text>
//                 <Form.Control type="text" placeholder="Option 1" />
//               </InputGroup>
//             </Form.Group>

//             <Form.Group controlId="option2" className="mb-3">
//               <InputGroup>
//                 <InputGroup.Text>
//                   <i className="bi bi-list"></i>
//                 </InputGroup.Text>
//                 <Form.Control type="text" placeholder="Option 2" />
//               </InputGroup>
//             </Form.Group>

//             <Button variant="success" className="mb-3">
//               Add Option
//             </Button>
//           </Col>

//           <Col md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tips On Better Polls</Card.Title>
//                 <Card.Text>
//                   <ul>
//                     <li>Suggest short clear options</li>
//                     <li>The more options, the better</li>
//                     <li>Choose the poll duration</li>
//                     <li>Options can't be edited after post creation</li>
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="votingPeriod">
//               <Form.Label>Voting Period</Form.Label>
//               <Form.Control type="date" placeholder="dd-mm-yyyy" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="categorySelect" className="mb-3">
//           <Form.Label>Select Category:</Form.Label>
//           <Form.Select>
//             <option>Sample</option>
//             <option>Education</option>
//             <option>Entertainment</option>
//             <option>Politics</option>
//             <option>Sports</option>
//             <option>Research</option>

//           </Form.Select>
//         </Form.Group>

//         <Button variant="secondary" className="me-2">
//           Cancel
//         </Button>
//         <Button variant="primary">Post</Button>
//       </Form>
//     </Card>
//     </>
//   )
// }

// export default AddPoll

//---------------------------------------------V2-----------------------------------------------

// import React, { useState } from "react";
// import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function AddPoll({ onPollSubmit }) {
//   const [pollTitle, setPollTitle] = useState("");
//   const [pollQuestion, setPollQuestion] = useState("");
//   const [pollOptions, setPollOptions] = useState(["", ""]);
//   const [votingPeriod, setVotingPeriod] = useState("");
//   const [category, setCategory] = useState("");

//   const handleAddOption = () => {
//     if (pollOptions.length < 4) {
//       setPollOptions([...pollOptions, ""]);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...pollOptions];
//     newOptions[index] = value;
//     setPollOptions(newOptions);
//   };

//   const handleRemoveOption = (index) => {
//     if (pollOptions.length > 2) {
//       const newOptions = pollOptions.filter((_, i) => i !== index);
//       setPollOptions(newOptions);
//     }
//   };

//   const handleSubmit = () => {
//     const pollData = {
//       pollTitle,
//       pollQuestion,
//       pollOptions,
//       votingPeriod,
//       category,
//     };

//     // Trigger update in the PollList component
//     onPollSubmit(pollData);

//     // Clear the form
//     setPollTitle("");
//     setPollQuestion("");
//     setPollOptions(["", ""]);
//     setVotingPeriod("");
//     setCategory("");
//   };

//   return (
//     <Card
//       style={{
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Card.Header style={{ textAlign: "center" }}>
//         Create Your Polls here!
//       </Card.Header>
//       <Form>
//         <Form.Group controlId="pollTitle" className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Title"
//             value={pollTitle}
//             onChange={(e) => setPollTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="pollQuestion" className="mb-3">
//           <Form.Control
//             as="textarea"
//             rows={2}
//             placeholder="Question"
//             value={pollQuestion}
//             onChange={(e) => setPollQuestion(e.target.value)}
//           />
//         </Form.Group>

//         <Row>
//           <Col md={6}>
//             {pollOptions.map((option, index) => (
//               <Form.Group
//                 controlId={`option${index}`}
//                 className="mb-3"
//                 key={index}
//               >
//                 <InputGroup>
//                   <InputGroup.Text>
//                     <i className="bi bi-list"></i>
//                   </InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) =>
//                       handleOptionChange(index, e.target.value)
//                     }
//                   />
//                   {pollOptions.length > 2 && (
//                     <Button
//                       variant="danger"
//                       onClick={() => handleRemoveOption(index)}
//                     >
//                       -
//                     </Button>
//                   )}
//                 </InputGroup>
//               </Form.Group>
//             ))}

//             {pollOptions.length < 4 && (
//               <Button
//                 variant="success"
//                 className="mb-3"
//                 onClick={handleAddOption}
//               >
//                 Add Option
//               </Button>
//             )}
//           </Col>

//           <Col md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tips On Better Polls</Card.Title>
//                 <Card.Text>
//                   <ul>
//                     <li>Suggest short clear options</li>
//                     <li>The more options, the better</li>
//                     <li>Choose the poll duration</li>
//                     <li>Options can't be edited after post creation</li>
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="votingPeriod">
//               <Form.Label>Voting Period</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={votingPeriod}
//                 onChange={(e) => setVotingPeriod(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="categorySelect" className="mb-3">
//           <Form.Label>Select Category:</Form.Label>
//           <Form.Select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="Education">Education</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Politics">Politics</option>
//             <option value="Sports">Sports</option>
//             <option value="Research">Research</option>
//           </Form.Select>
//         </Form.Group>

//         <Button variant="secondary" className="me-2">
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           Post
//         </Button>
//       </Form>
//     </Card>
//   );
// }

// export default AddPoll;

//------------------------------------------------------------- V 3 -------------------------------------------------------

// import React, { useState } from "react";
// import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';

// function AddPoll() {
//   const [pollTitle, setPollTitle] = useState("");
//   const [pollQuestion, setPollQuestion] = useState("");
//   const [pollOptions, setPollOptions] = useState(["", ""]);
//   const [votingPeriod, setVotingPeriod] = useState("");
//   const [category, setCategory] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false); // New state for Snackbar

//   const handleAddOption = () => {
//     if (pollOptions.length < 4) {
//       setPollOptions([...pollOptions, ""]);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...pollOptions];
//     newOptions[index] = value;
//     setPollOptions(newOptions);
//   };

//   const handleRemoveOption = (index) => {
//     if (pollOptions.length > 2) {
//       const newOptions = pollOptions.filter((_, i) => i !== index);
//       setPollOptions(newOptions);
//     }
//   };

//   const handleSubmit = () => {
//     const pollData = {
//       pollTitle,
//       pollQuestion,
//       pollOptions,
//       votingPeriod,
//       category,
//       createdon: "Just now",
//       name: "Rahul", // Use your name or fetch dynamically
//       status: "Open",
//     };

//     // Retrieve existing polls from session storage
//     const existingPolls = JSON.parse(sessionStorage.getItem("polls")) || [];

//     // Add the new poll at the beginning
//     const updatedPolls = [pollData, ...existingPolls];

//     // Store the updated polls in session storage
//     sessionStorage.setItem("polls", JSON.stringify(updatedPolls));
// console.log(sessionStorage.getItem("polls"))
//     // Trigger update in the PollList component
//     // onPollSubmit(updatedPolls);

//     // Clear the form
//     setPollTitle("");
//     setPollQuestion("");
//     setPollOptions(["", ""]);
//     setVotingPeriod("");
//     setCategory("");

//     // Your existing logic for submitting the poll

//     setOpenSnackbar(true); // Show the snackbar when the button is clicked

//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false); // Close the snackbar

//   };

//   return (
//     <Card
//       style={{
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Card.Header style={{ textAlign: "center" }}>
//         Create Your Polls here!
//       </Card.Header>
//       <Form>
//         <Form.Group controlId="pollTitle" className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Title"
//             value={pollTitle}
//             onChange={(e) => setPollTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="pollQuestion" className="mb-3">
//           <Form.Control
//             as="textarea"
//             rows={2}
//             placeholder="Question"
//             value={pollQuestion}
//             onChange={(e) => setPollQuestion(e.target.value)}
//           />
//         </Form.Group>

//         <Row>
//           <Col md={6}>
//             {pollOptions.map((option, index) => (
//               <Form.Group
//                 controlId={`option${index}`}
//                 className="mb-3"
//                 key={index}
//               >
//                 <InputGroup>
//                   <InputGroup.Text>
//                     <i className="bi bi-list"></i>
//                   </InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) =>
//                       handleOptionChange(index, e.target.value)
//                     }
//                   />
//                   {pollOptions.length > 2 && (
//                     <Button
//                       variant="danger"
//                       onClick={() => handleRemoveOption(index)}
//                     >
//                       -
//                     </Button>
//                   )}
//                 </InputGroup>
//               </Form.Group>
//             ))}

//             {pollOptions.length < 4 && (
//               <Button
//                 variant="success"
//                 className="mb-3"
//                 onClick={handleAddOption}
//               >
//                 Add Option
//               </Button>
//             )}
//           </Col>

//           <Col md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tips On Better Polls</Card.Title>
//                 <Card.Text>
//                   <ul>
//                     <li>Suggest short clear options</li>
//                     <li>The more options, the better</li>
//                     <li>Choose the poll duration</li>
//                     <li>Options can't be edited after post creation</li>
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="votingPeriod">
//               <Form.Label>Voting Period</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={votingPeriod}
//                 onChange={(e) => setVotingPeriod(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="categorySelect" className="mb-3">
//           <Form.Label>Select Category:</Form.Label>
//           <Form.Select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="Education">Education</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Politics">Politics</option>
//             <option value="Sports">Sports</option>
//             <option value="Research">Research</option>
//           </Form.Select>
//         </Form.Group>

//         <Button variant="secondary" className="me-2">
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           Post
//         </Button>
//          {/* Snackbar for alerting poll creation success */}
//          <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
//                 <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//                     Your Poll is Successfully created
//                 </Alert>
//             </Snackbar>
//       </Form>
//     </Card>
//   );
// }

// export default AddPoll;

// user_id : 66cc6bff941bf1f0e99c9d74
// cateogory_id : 66cc3e9151891283bacaa043

/////----------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
// import axios from 'axios';

// function AddPoll() {
//   const [pollTitle, setPollTitle] = useState("");
//   const [pollQuestion, setPollQuestion] = useState("");
//   const [pollOptions, setPollOptions] = useState(["", ""]);
//   const [votingDate, setVotingDate] = useState("");
//   const [startTime, setStartTime] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [category, setCategory] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

//   const handleAddOption = () => {
//     if (pollOptions.length < 4) {
//       setPollOptions([...pollOptions, ""]);
//     }
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...pollOptions];
//     newOptions[index] = value;
//     setPollOptions(newOptions);
//   };

//   const handleRemoveOption = (index) => {
//     if (pollOptions.length > 2) {
//       const newOptions = pollOptions.filter((_, i) => i !== index);
//       setPollOptions(newOptions);
//     }
//   };

//   const handleSubmit = async () => {
//     console.log("submit")
//     const votingStart = `${votingDate}T${startTime}`;
//     const votingEnd = `${votingDate}T${endTime}`;

//     const durationInMilliseconds = votingEnd - votingStart;

//     const durationInHours = durationInMilliseconds / (1000 * 60 * 60);

//     const formattedOptions = pollOptions.map(option => ({ option }));
//     console.log(formattedOptions)

//     const pollData = {
//       title: pollTitle,
//       question: pollQuestion,
//       options: formattedOptions,
//       duration: "2",
//       category: "66cd7c8bc23040cebf12d75b",
//       createdBy: "66cd7c7bc23040cebf12d758",  // Adjust this according to your actual user ID
//     };
// console.log(typeof(pollData.duration))
//     console.log("Preparing to submit Poll Data:", pollData);
//     axios.post("http://92.205.109.210:8028/polls/create",pollData)
//     alert("poll added")

//     // try {
//     //   const response = await axios.post("http://92.205.109.210:8028/polls/create",pollData);

//     //   console.log("Received response:", response);

//     //   if (response.status === 200 || response.status === 201) {
//     //     setSnackbarMessage("Your Poll is Successfully created");
//     //     setSnackbarSeverity("success");
//     //   } else {
//     //     setSnackbarMessage("Failed to create poll");
//     //     setSnackbarSeverity("error");
//     //   }
//     // }
//     //  catch (error) {
//     //   console.error("Error occurred while creating poll:", error);
//     //   if (error.response) {
//     //     console.error("Response Error:", error.response.data);
//     //     setSnackbarMessage(`Error: ${error.response.data.message || "An error occurred"}`);
//     //   } else if (error.request) {
//     //     console.error("No response received:", error.request);
//     //     setSnackbarMessage("No response received from the server.");
//     //   } else {
//     //     console.error("Request setup error:", error.message);
//     //     setSnackbarMessage("Error in setting up the request.");
//     //   }
//     //   setSnackbarSeverity("error");
//     // }

//     setPollTitle("");
//     setPollQuestion("");
//     setPollOptions(["", ""]);
//     setVotingDate("");
//     setStartTime("");
//     setEndTime("");
//     setCategory("");

//     setOpenSnackbar(true);
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Card
//       style={{
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Card.Header style={{ textAlign: "center" }}>
//         Create Your Polls here!
//       </Card.Header>
//       <Form>
//         <Form.Group controlId="pollTitle" className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Title"
//             value={pollTitle}
//             onChange={(e) => setPollTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="pollQuestion" className="mb-3">
//           <Form.Control
//             as="textarea"
//             rows={2}
//             placeholder="Question"
//             value={pollQuestion}
//             onChange={(e) => setPollQuestion(e.target.value)}
//           />
//         </Form.Group>

//         <Row>
//           <Col md={6}>
//             {pollOptions.map((option, index) => (
//               <Form.Group
//                 controlId={`option${index}`}
//                 className="mb-3"
//                 key={index}
//               >
//                 <InputGroup>
//                   <InputGroup.Text>
//                     <i className="bi bi-list"></i>
//                   </InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder={`Option ${index + 1}`}
//                     value={option}
//                     onChange={(e) =>
//                       handleOptionChange(index, e.target.value)
//                     }
//                   />
//                   {pollOptions.length > 2 && (
//                     <Button
//                       variant="danger"
//                       onClick={() => handleRemoveOption(index)}
//                     >
//                       -
//                     </Button>
//                   )}
//                 </InputGroup>
//               </Form.Group>
//             ))}

//             {pollOptions.length < 4 && (
//               <Button
//                 variant="success"
//                 className="mb-3"
//                 onClick={handleAddOption}
//               >
//                 Add Option
//               </Button>
//             )}
//           </Col>

//           <Col md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Tips On Better Polls</Card.Title>
//                 <Card.Text>
//                   <ul>
//                     <li>Suggest short clear options</li>
//                     <li>The more options, the better</li>
//                     <li>Choose the poll duration</li>
//                     <li>Options can't be edited after post creation</li>
//                   </ul>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <Form.Group controlId="votingPeriodDate">
//               <Form.Label>Voting Period Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={votingDate}
//                 onChange={(e) => setVotingDate(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="startTime">
//               <Form.Label>Start Time</Form.Label>
//               <Form.Control
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="endTime">
//               <Form.Label>End Time</Form.Label>
//               <Form.Control
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="categorySelect" className="mb-3">
//           <Form.Label>Select Category:</Form.Label>
//           <Form.Select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="Education">Education</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Politics">Politics</option>
//             <option value="Sports">Sports</option>
//             <option value="Research">Research</option>
//           </Form.Select>
//         </Form.Group>

//         <Button variant="secondary" className="me-2">
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           Post
//         </Button>

//         <Snackbar
//           open={openSnackbar}
//           autoHideDuration={3000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbarSeverity}
//             sx={{ width: '100%' }}
//           >
//             {snackbarMessage}
//           </Alert>
//         </Snackbar>
//       </Form>
//     </Card>
//   );
// }

// export default AddPoll;

//tuesday code

import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";

function AddPoll() {
  const [pollTitle, setPollTitle] = useState("");
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);
  const [votingDate, setVotingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [category, setCategory] = useState("");
  const [categories,setCategories] = useState([]);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://92.205.109.210:8028/category/getall");
        console.log(response.data)
        setCategories(response.data);
console.log(categories)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

let UserId=sessionStorage.getItem("googleuserId")||sessionStorage.getItem("loginuserId")
console.log(UserId)
  const handleAddOption = () => {
    if (pollOptions.length < 4) {
      setPollOptions([...pollOptions, ""]);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    if (pollOptions.length > 2) {
      const newOptions = pollOptions.filter((_, i) => i !== index);
      setPollOptions(newOptions);
    }
  };


  const handleSubmit = async () => {
    console.log("submit");
    const votingStart = `${votingDate}T${startTime}`;
    const votingEnd = `${votingDate}T${endTime}`;

    const durationInMilliseconds = votingEnd - votingStart;

    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);

    const formattedOptions = pollOptions.map((option) => ({ option }));
    console.log(formattedOptions);
    console.log(UserId)
    const pollData = {
      title: pollTitle,
      question: pollQuestion,
      options: formattedOptions,
      duration: "2",
      // category: "66cd7c8bc23040cebf12d75b",
      // createdBy: "66d7e32f3ac2b23bcbbc9a88",
      category: category,
      createdBy: UserId,
    };
    console.log(pollData)
    console.log(typeof pollData.duration);
    console.log("Preparing to submit Poll Data:", pollData);
    // axios.post("http://92.205.109.210:8028/polls/create", pollData);
    // alert("poll added")
    setSnackbarMessage("Your Poll is Successfully created");

    // try {
    //   const response = await axios.post("http://92.205.109.210:8028/polls/create",pollData);

    //   console.log("Received response:", response);

    //   if (response.status === 200 || response.status === 201) {
    //     setSnackbarMessage("Your Poll is Successfully created");
    //     setSnackbarSeverity("success");
    //   } else {
    //     setSnackbarMessage("Failed to create poll");
    //     setSnackbarSeverity("error");
    //   }
    // }
    //  catch (error) {
    //   console.error("Error occurred while creating poll:", error);
    //   if (error.response) {
    //     console.error("Response Error:", error.response.data);
    //     setSnackbarMessage(`Error: ${error.response.data.message || "An error occurred"}`);
    //   } else if (error.request) {
    //     console.error("No response received:", error.request);
    //     setSnackbarMessage("No response received from the server.");
    //   } else {
    //     console.error("Request setup error:", error.message);
    //     setSnackbarMessage("Error in setting up the request.");
    //   }
    //   setSnackbarSeverity("error");
    // }

    setPollTitle("");
    setPollQuestion("");
    setPollOptions(["", ""]);
    setVotingDate("");
    setStartTime("");
    setEndTime("");
    setCategory("");

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Header style={{ textAlign: "center" }}>
        Create Your Polls here!
      </Card.Header>
      <Form>
        {/* <Form.Group controlId="pollTitle" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
          />
        </Form.Group> */}

        <Form.Group controlId="pollQuestion" className="mb-3">
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Question"
            value={pollQuestion}
            onChange={(e) => setPollQuestion(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            {pollOptions.map((option, index) => (
              <Form.Group
                controlId={`option${index}`}
                className="mb-3"
                key={index}
              >
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-list"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                  {pollOptions.length > 2 && (
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveOption(index)}
                    >
                      -
                    </Button>
                  )}
                </InputGroup>
              </Form.Group>
            ))}

            {pollOptions.length < 4 && (
              <Button
                variant="success"
                className="mb-3"
                onClick={handleAddOption}
              >
                Add Option
              </Button>
            )}
          </Col>

          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Tips On Better Polls</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Suggest short clear options</li>
                    <li>The more options, the better</li>
                    <li>Choose the poll duration</li>
                    <li>Options can't be edited after post creation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="votingPeriodDate">
              <Form.Label>Voting Period Date</Form.Label>
              <Form.Control
                type="date"
                value={votingDate}
                onChange={(e) => setVotingDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* <Form.Group controlId="categorySelect" className="mb-3">
          <Form.Label>Select Category:</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="Research">Research</option>
          </Form.Select>
        </Form.Group> */}

        <Form.Group controlId="categorySelect" className="mb-3">
      <Form.Label>Select Category:</Form.Label>
      <Form.Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.category_name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>

        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Post
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Form>
    </Card>
  );
}

export default AddPoll;
