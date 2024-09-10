import React, { useContext, useEffect, useState } from "react";

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
import { PageContext } from "../App";
// import logo from './src/images/logo.png';
import OTPVerificationModal from "./Common/Otpverify";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import CategoryComp from "./Common/CategoryComp";

function Homepage() {
  let loginuser = useLocation();
  let newuser = loginuser.state;
  console.log(newuser);
  console.log(loginuser.state);
  let [page, setPage] = useContext(PageContext);
  let [polls, setPolls] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [trendingPolls, setTrendingPolls] = useState([]);

  const [googlegmail, setGooglegmail] = useState(
    sessionStorage.getItem("email") || ""
  );
  const [googleusername, setGoogleusername] = useState(
    sessionStorage.getItem("username") || ""
  );

  //getall polls
  const [filteredPolls, setFilteredPolls] = useState([]);
  const fetchPolls = async () => {
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/polls/getall"
      );
      console.log(response.data);
      setPolls(response.data);
      sessionStorage.setItem("polls", JSON.stringify(response.data)); // Save the polls to sessionStorage
    } catch (error) {
      console.error("Error fetching polls:", error);
    }
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      console.log("fetch cagegory");
      console.log("Selected Category:", selectedCategory);

      const filteredCategory = polls.filter((poll) =>
        poll.category.some((cat) => cat._id === selectedCategory._id)
      );
      console.log("Filtered Polls:", filteredCategory);
      setFilteredPolls(filteredCategory);
      console.log(filteredPolls)
     
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);

  const [step, setStep] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const onPhoneSubmit = () => {
    // Here logic to verify the phone number
    // After that to the OTP step
    setStep(2);
  };

  const navigate = useNavigate();

  const onOtpSubmit = () => {
    // Here logic to verify the OTP

    handleClose();
    // navigate("addPoll");
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

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setPolls([]);
    } else {
      try {
        const response = await axios.post(
          "http://92.205.109.210:8028/polls/search",
          {
            params: { query },
          }
        );
        setPolls(response.data);
      } catch (error) {
        console.error("Error searching polls:", error);
      }
    }
  };

  const handleAddPoll = () => {
    if (googlegmail && googleusername) {
      handleShow();
      // return <OTPVerificationModal />;
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
    <div className="polling-booth">
      <header>
        <h1>POLLING BOOTH</h1>
        <input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="user-info">
          <h4>
            Welcome! {googleuser ? googleuser : newuser}{" "}
            <i class="bi bi-person-circle"></i>
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
              <li onClick={() => handlePageClick("Pollresults")}>
                <i class="bi bi-check2-circle"></i> Voted Polls
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
            {/* 
          {page === 'Polllist' && <Polllist />}
      {page === 'AddPoll' && <AddPoll />}
      {page === 'Pollresults' && <Pollresults />}
      {page === 'Userdetails' && <Userdetails/>}
 */}

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
            {page === "category" && 
              <CategoryComp polls={polls} setPolls={setPolls} filteredPolls={filteredPolls} />}
          </nav>

          {/* Add more polls here */}
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
      {/* <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Verify OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formOtp">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Verify
        </Button>
      </Modal.Footer>
    </Modal> */}

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
            onClick={step === 1 ? onPhoneSubmit : onOtpSubmit}
          >
            {step === 1 ? "Verify Phone Number" : "Verify OTP"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Homepage;

//tuesday code

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Homepage.css";
// import {Card,Button,Row,Col,Form,InputGroup,ProgressBar,Container,Modal} from "react-bootstrap";
// import Polllist from "./Polllist";
// import AddPoll from "./AddPoll";
// import Pollresults from "./Pollresults";
// import Userdetails from "./Userdetails";
// import CommentsComp from "./Common/CommentsComp";
// import OTPVerificationModal from "./Common/Otpverify";
// import { PageContext } from "../App";
// import { getAuth, signOut } from "firebase/auth";

// function Homepage() {
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
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [showPhoneModal, setShowPhoneModal] = useState(false);
//   const [showOtpModal, setShowOtpModal] = useState(false);

//   const navigate = useNavigate(); // Initialize navigation hook

//   // Function to handle closing of the modal
//   const handleClosePhoneModal = () => setShowPhoneModal(false);
//   const handleShowPhoneModal = () => setShowPhoneModal(true);

//   const handleCloseOtpModal = () => setShowOtpModal(false);
//   const handleShowOtpModal = () => setShowOtpModal(true);

//   const handlePhoneChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   // Make sure this function is marked as async
//   const onPhoneSubmit = async () => {
//     try {
//       const response = await axios.post("http://92.205.109.210:8028/mobileauth/send-otp-sms", {
//         number: phoneNumber,
//         appName: "POLL APP",
//       });

//       if (response.data) {
//         handleClosePhoneModal(); // Close the phone number modal
//         handleShowOtpModal(); // Show the OTP modal
//       } else {
//         console.error("Error sending OTP:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   const onOtpSubmit = async () => {
//     try {
//       const response = await axios.post("http://92.205.109.210:8028/mobileauth/verify-otp-sms", {
//         number: phoneNumber,
//         otp: otp,
//       });

//       if (response.data) {
//         handleCloseOtpModal(); // Close the OTP modal on successful verification
//         setPage("AddPoll"); // Navigate to Add Poll page
//       } else {
//         console.error("Error verifying OTP:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//     }
//   };

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
//   const handlePageClick = (component) => {
//     setPage(component);
//   };

//   // Function to add a new poll to the poll list
//   const addNewPoll = (newPoll) => {
//     setPolls([...polls, newPoll]);
//     setPage("Polllist"); // Navigate to Polllist after adding a poll
//   };

//   const handleSearchChange = async (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.trim() === "") {
//       setPolls([]);
//     } else {
//       try {
//         const response = await axios.post(
//           "http://92.205.109.210:8028/polls/search",
//           {
//             params: { query },
//           }
//         );
//         setPolls(response.data);
//       } catch (error) {
//         console.error("Error searching polls:", error);
//       }
//     }
//   };

//   const handleAddPoll = () => {
//     if (googlegmail && googleusername) {
//        handleShowPhoneModal("/add");
//     } else {
//       setPage("AddPoll");
//     }
//   };

//   const handleSignOut = async () => {
//     const auth = getAuth(); // Initialize Firebase Auth
//     try {
//         await signOut(auth); // Sign out the user using Firebase
//         sessionStorage.clear(); // Clear session storage
//         localStorage.removeItem("authToken"); // Remove any auth tokens
//         navigate("/loginpg"); // Redirect to login page
//     } catch (error) {
//         console.error("Error signing out:", error);
//     }
// };

//   return (
//     <div className="polling-booth">
//       <header>
//         <h1>POLLING BOOTH</h1>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <div className="user-info">
//           <h4>
//             Welcome! User <i className="bi bi-person-circle"></i>
//           </h4>
//         </div>
//       </header>
//       <div className="container">
//         <aside>
//           <nav>
//             <ul>
//               <li onClick={() => handlePageClick("Polllist")}>
//                 <i className="bi bi-list"> </i>Poll List
//               </li>
//               <li onClick={handleAddPoll}>
//                 <i className="bi bi-plus-circle"> </i> Add Poll
//               </li>
//               <li onClick={() => handlePageClick("Pollresults")}>
//                 <i className="bi bi-check2-circle"></i> Voted Polls
//               </li>
//               <li onClick={() => handlePageClick("Userdetails")}>
//                 <i className="bi bi-person-circle"></i> User Details
//               </li>
//             </ul>
//           </nav>
//           <div className="categories">
//             <h4>CATEGORIES</h4>
//             <nav>
//               <button>Entertainment</button>
//               <button>Travel</button>
//               <button>Education</button>
//               <button>Politics</button>
//               <button>Research</button>
//               <button>Medicine</button>
//               <button>Automation</button>
//               <button>Sports</button>
//               <button>Education</button>
//               <button>Politics</button>
//               <button>Research</button>
//               <button>Medicine</button>
//             </nav>
//             <button className="sign-out" onClick={handleSignOut}>
//               Sign Out <i className="bi bi-box-arrow-right"></i>
//             </button>
//           </div>
//         </aside>
//         <main>
//           {page === "Polllist" && <Polllist polls={polls} />}
//           {page === "AddPoll" && <AddPoll addNewPoll={addNewPoll} />}
//           {page === "Pollresults" && <Pollresults />}
//           {page === "Userdetails" && <Userdetails />}
//           {page === "CommentsComp" && <CommentsComp />}
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
//             {/* Phone Number Modal */}
//             <Modal show={showPhoneModal} onHide={handleClosePhoneModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Verify Phone Number</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formPhoneNumber">
//               <Form.Label>Enter Phone Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Phone Number"
//                 value={phoneNumber}
//                 onChange={handlePhoneChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClosePhoneModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={onPhoneSubmit}>
//             Send OTP
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* OTP Verification Modal */}
//       <Modal show={showOtpModal} onHide={handleCloseOtpModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Verify OTP</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formOtp">
//               <Form.Label>Enter OTP</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={handleOtpChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseOtpModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={onOtpSubmit}>
//             Verify OTP
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Button variant="primary" onClick={handleShowPhoneModal}>
//         Start Verification
//       </Button>

//     </div>
//   );
// }

// export default Homepage;
