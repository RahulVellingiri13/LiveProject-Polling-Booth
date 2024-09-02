// import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";


function Homepage() {
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

  return (
    <div className="polling-booth">
      <header>
        <h1>POLLING BOOTH</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="user-info">
          <h4>
            Welcome! User <i class="bi bi-person-circle"></i>
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
              <button>Entertainment</button>
              <button>Travel</button>
              <button>Education</button>
              <button>Politics</button>
              <button>Research</button>
              <button>Medicine</button>
              <button>Automation</button>
              <button>Sports</button>
              <button>Education</button>
              <button>Politics</button>
              <button>Research</button>
              <button>Medicine</button>
              {/* Add more categories here */}
            </nav>
            <button className="sign-out">
              Sign Out <i class="bi bi-box-arrow-right"></i>
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

            {page === "Polllist" && <Polllist polls={polls} />}
            {page === "AddPoll" && <AddPoll addNewPoll={addNewPoll} />}
            

            {page === "Pollresults" && <Pollresults />}
            {page === "Userdetails" && <Userdetails />}
            {page === "CommentsComp" && <CommentsComp />}



          
           
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
