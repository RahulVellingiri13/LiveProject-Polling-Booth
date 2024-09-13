import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Newpassword.css";

function Newpassword() {
  let { number } = useParams();
  let email = sessionStorage.getItem("email");
  console.log(number);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showSuccess, setShowSuccess] = useState(false);
  const [apiError, setApiError] = useState(""); // State to handle API error messages
  const navigate = useNavigate();

  const identifier = "identifier";

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords do not match")
      .required("Please confirm your password"),
  });

  // Function to handle form submission and API integration
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(number, values.newPassword);
    try {
      const response = await axios.post(
        "http://92.205.109.210:8028/api/updateuser",
        {
          identifier: email,
          phone_number:number,
          password: values.newPassword,
        }
      );
console.log(response.data)
      if (response.status === 200) {
        setShowSuccess(true);
        setApiError("");

        // After showing the success message, redirect to Loginpg
        setTimeout(() => {
          navigate("/Loginpg");
        }, 2000);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setApiError("Failed to reset the password. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="new-password-container"
      style={{
        backgroundColor: "#00aeac",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "30rem" }}>
        <br />
        <Card.Header className="text-center">
          <h3>Reset Your Password</h3>
        </Card.Header>
        <Card.Body>
          <Formik
            initialValues={{ newPassword: "", confirmPassword: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <div className="password-input-container">
                    <Field
                      name="newPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      className="form-control"
                      maxLength={6}
                    />
                    <span
                      className="password-toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <div className="password-input-container">
                    <Field
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      className="form-control"
                      maxLength={6}
                    />
                    <span
                      className="password-toggle-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Form.Group>

                <br />
                <button
                  type="submit"
                  className="mt-4 w-100 reset"
                  disabled={isSubmitting}
                >
                  Reset Password
                </button>
                {showSuccess && (
                  <div className="mt-3 text-success text-center">
                    Password reset successful! Redirecting to login...
                  </div>
                )}
                {apiError && (
                  <div className="mt-3 text-danger text-center">{apiError}</div>
                )}
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Newpassword;
