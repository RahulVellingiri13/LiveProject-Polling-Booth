import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase";
import "./Frontpage.css";
import logo from "../src/Images/Pooling logo dem.jpeg";
import { useFormik } from "formik";
import axios from "axios";
const Frontpg = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      // other fields...
    },
    onSubmit: (values) => {
      // handle form submission
    },
  });
  //     let navigate=useNavigate()
  //     console.log(auth)
  //     console.log(provider)
  //     const handlegoogle = () => {
  //         signInWithPopup(auth, provider)
  //             .then((result) => {
  //                 console.log('User signed in:', result.user.displayName);
  //                 console.log(result.user.email)
  // sessionStorage.setItem("username",result.user.displayName)
  // sessionStorage.setItem("email",result.user.email)
  //                 navigate('/Signup')
  //             })
  //             .catch((error) => {
  //                 console.error('Error signing in with Google:', error);
  //             });

  let navigate = useNavigate(); 

  const handlegoogle = () => {
    sessionStorage.clear()
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in:", result.user.displayName);
        console.log(result.user.email);

        formik.setFieldValue("username", result.user.displayName || "");
        formik.setFieldValue("email", result.user.email || "");

        // Store in sessionStorage
        sessionStorage.setItem("username", result.user.displayName);
        sessionStorage.setItem("email", result.user.email);

        // Navigate to the Signup page
        navigate("/homepage");
        // axios.post("http://92.205.109.210:8028//api/createuser",{
        //   user_name:result.user.displayName,
        //   email:result.user.email
        // }).then(res=>{
        //   console.log(res.data)
        
        // })
       
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };
  return (
    <Row className="bodyy">
      {/* Left Side - Column 6 */}
      <Col sm={6} className="text-center left-column">
        <img src={logo} alt="Polling Logo" className="polling-logoo" />
      </Col>

      {/* Right Side - Column 6 */}
      <Col sm={6} className="text-center">
        <div className="containerrr">
          <div className="logo"></div>
          <h1>POLLING BOOTH</h1>
          <p>Join today.</p>
          <div className="signup-options">
            <Button
              className="signupp-button"
              variant="primary"
              onClick={handlegoogle}
            >
              {" "}
              Sign up with Google
            </Button>
            <br />
            <Link to="/Signup">
              <Button className="signupp-button" variant="secondary">
                Create account
              </Button>
            </Link>
          </div>
          <div className="login-linkk">
            <p>
              Already have an account? <Link to="/Loginpg">Sign in</Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Frontpg;
