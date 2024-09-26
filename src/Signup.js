// import React from 'react';
// import { Row, Col, Card, Form, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import './Signup.css';

// function Signup() {
//   const startYear = 1901;
//   const endYear = 2024;

//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [showAlert, setShowAlert] = React.useState(false);
//   const [otpSent, setOtpSent] = React.useState(false);
//   const [otp, setOtp] = React.useState('');
//   const [otpVerified, setOtpVerified] = React.useState(false);
//   const [otpError, setOtpError] = React.useState('');

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       day: '',
//       month: '',
//       year: '',
//       gender: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Name is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       phone: Yup.string()
//         .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
//         .required('Phone number is required'),
//       day: Yup.string().required('Day is required'),
//       month: Yup.string().required('Month is required'),
//       year: Yup.string().required('Year is required'),
//       gender: Yup.string().required('Gender is required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Password is required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     }),
//     onSubmit: (values) => {
//       if (otpVerified) {
//         setShowAlert(true);
//       } else {
//         setOtpError('Please verify OTP.');
//       }
//     },
//   });

//   const handleLoginClick = () => {
//     navigate('/Loginpg');
//   };

//   const sendOtp = () => {
//     if (formik.values.phone && formik.errors.phone === undefined) {
//       setOtpSent(true);
//       setOtpError('');
//       // Simulate OTP sent
//       setTimeout(() => {
//         alert('OTP sent to ' + formik.values.phone);
//       }, 500);
//     } else {
//       setOtpError('Please enter a valid phone number first.');
//     }
//   };

//   const verifyOtp = () => {
//     if (otp === '123456') { // Simulate OTP verification
//       setOtpVerified(true);
//       setOtpError('');
//     } else {
//       setOtpError('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className='x1'>
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className='text-center'>
//                     <h3 className='x2'>Create your account</h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 <Row>
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter name"
//                       className='x3'
//                       {...formik.getFieldProps('name')}
//                       isInvalid={formik.touched.name && formik.errors.name}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.name}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className='x4'
//                   {...formik.getFieldProps('email')}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>

//                 <Form.Control
//                   type="text"
//                   placeholder="Phone number"
//                   className='x4'
//                   {...formik.getFieldProps('phone')}
//                   isInvalid={formik.touched.phone && formik.errors.phone}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.phone}
//                 </Form.Control.Feedback>

//                 <button type="button" className="otp-button" onClick={sendOtp} disabled={otpSent}>
//                   {otpSent ? 'OTP Sent' : 'Send OTP'}
//                 </button>

//                 {otpSent && (
//                   <div className="otp-verification">
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       isInvalid={otpError !== ''}
//                     />
//                     <button type="button" className="verify-otp-button" onClick={verifyOtp}>
//                       Verify OTP
//                     </button>
//                     {otpError && (
//                       <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                         {otpError}
//                       </Form.Control.Feedback>
//                     )}
//                   </div>
//                 )}

//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className='x5' sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps('day')}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                     >
//                       <option value="">Day</option>
//                       {Array.from({ length: 31 }, (_, index) => (
//                         <option key={index + 1} value={index + 1}>
//                           {index + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className='x6' sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps('month')}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                     >
//                       <option value="">Month</option>
//                       {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
//                         <option key={index} value={index + 1}>
//                           {month}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className='x7' sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps('year')}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                     >
//                       <option value="">Year</option>
//                       {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
//                         <option key={startYear + index} value={startYear + index}>
//                           {startYear + index}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                 </Row>
//                 {formik.touched.day && formik.errors.day && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.day}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.month && formik.errors.month && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.month}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.year && formik.errors.year && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.year}
//                   </Form.Control.Feedback>
//                 )}

//                 <h6>Gender</h6>
//                 <Row>
//                   <Col className='a1'>
//                     <Form.Check
//                       reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'male'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col className='a2'>
//                     <Form.Check
//                       reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'female'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col className='a3'>
//                     <Form.Check
//                       reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'custom'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>

//                 <h6>Password</h6>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="New password"
//                     className='x8'
//                     {...formik.getFieldProps('password')}
//                     isInvalid={formik.touched.password && formik.errors.password}
//                   />
//                   <span
//                     className="password-toggle-icon"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </div>
//                 <p></p>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className='x8'
//                     {...formik.getFieldProps('confirmPassword')}
//                     isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
//                   />
//                   <span
//                     className="password-toggle-icon"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </div>
//                 <p></p>
//                 <div className='text-center'>
//                   <button type="submit" className='z9'>Sign Up</button>
//                 </div>
//                 <p className='or'>or</p>
//                 <div className='text-center'>
//                   <button type="button" className='z10' onClick={handleLoginClick}>
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//           <br />
//           <br />
//           <br />
//         </Col>
//         <Col sm={4}></Col>
//       </Row>
//     </div>
//   );
// }

// export default Signup;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { Row, Col, Card, Form, Alert, Modal, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './Signup.css';
// import InputGroup from 'react-bootstrap/InputGroup';
// function Signup() {
//   const startYear = 1901;
//   const endYear = 2024;

//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [showAlert, setShowAlert] = React.useState(false);
//   const [otpSent, setOtpSent] = React.useState(false);
//   const [otp, setOtp] = React.useState('');
//   const [otpVerified, setOtpVerified] = React.useState(false);
//   const [otpError, setOtpError] = React.useState('');
//   const [showModal, setShowModal] = React.useState(false);

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       day: '',
//       month: '',
//       year: '',
//       gender: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, 'Name must be at least 3 characters')
//         .required('Name is required'),
//       email: Yup.string().email('Invalid email address')
//         .required('Email is required').test(
//           "email",
//           "Invalid email",
//           function (value) {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return emailRegex.test(value)
//           }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, 'Phone number must be 10 digits')
//         .required('Phone number is required') ,
//       day: Yup.string().required('Date of Birth is required'),
//       month: Yup.string().required('Month is required'),
//       year: Yup.string().required('Year is required'),
//       gender: Yup.string().required('Gender is required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Password is required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     }),
//     validateOnBlur: true, // Validate fields on blur event
//     onSubmit: (values) => {
//       if (otpVerified) {
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate('/Loginpg');
//         }, 1500);
//       } else {
//         setOtpError('Please verify OTP.');
//       }
//     },
//   });
//   let [records,setRecords]=useState([])
//   // useEffect(()=>{
//   //   axios.get("http://localhost:3000/user/signup") .then(res=>{
//   //     setRecords(res.data)
//   //     console.log(res.data)
//   //   })

//   // },[])

//   const handleLoginClick = () => {
//     navigate('/Loginpg');
//   };

//   const sendOtp = () => {
//     if (formik.values.phone && formik.errors.phone === undefined) {
//       setOtpSent(true);
//       setOtpError('');
//       setShowModal(true); // Open OTP Modal
//       setTimeout(() => {
//         alert('OTP sent to ' + formik.values.phone);
//       }, 500);
//     } else {
//       setOtpError('Please enter a valid phone number first.');
//     }
//   };

//   const verifyOtp = () => {
//     if (otp === '123456') {
//       setOtpVerified(true);
//       setOtpError('');
//       setShowModal(false); // Close OTP Modal after verification
//     } else {
//       setOtpError('Invalid OTP. Please try again.');
//     }
//   };
//   const handleCloseModal = () => setShowModal(false);

//   let handleSignup=()=>{

//     let dob=new Date(formik.values.year,formik.values.month,formik.values.day)
//     console.log(dob)
//     let currentdate=new Date()
//     console.log(currentdate)

//     console.log(new Date(formik.values.year,formik.values.month,formik.values.day))

//     let age1= currentdate.getFullYear()-dob.getFullYear()
//     console.log(formik.values)
//     let signupdata={
//       user_name:formik.values.name,
//       e_mail:formik.values.email,
//       phone:formik.values.phone,
//       gender:formik.values.gender,
//       age:age1,
//       dob:new Date(formik.values.year,formik.values.month,formik.values.day)

//     }

//     axios.post("http://localhost:3000/user/signup",signupdata)
//     alert("created successfully")
//   }

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className='x1'>
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className='text-center'>
//                     <h3 className='x2'>Create your account</h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 <Row>
//                   <Col>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter name"
//                       className='x3'
//                       {...formik.getFieldProps('name')}
//                       isInvalid={formik.touched.name && formik.errors.name}
//                       onBlur={formik.handleBlur}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.name}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className='x4'
//                   {...formik.getFieldProps('email')}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>

//                 {/* <Form.Control
//                   type="text"
//                   placeholder="Phone number"
//                   className='x4'
//                   {...formik.getFieldProps('phone')}
//                   isInvalid={formik.touched.phone && formik.errors.phone}
//                   onBlur={formik.handleBlur}

//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.phone}
//                 </Form.Control.Feedback>

//                 <button type="button" className="otp-button" onClick={sendOtp} disabled={otpSent}>
//                   {otpSent ? 'OTP Sent' : 'Send OTP'}
//                 </button> */}

// <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className='x4'
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className='x4'
//                         {...formik.getFieldProps('phone')}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{color:"green"}} className="verified-label">Verified</span>
//                   )}
//                 </div>
// {/*
//                 {!otpVerified && (
//                   <Form.Control
//                     type="button"
//                     className="z9"
//                     value="Verify OTP"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                     placeholder={otpSent ? 'Enter OTP' : 'Send OTP'}
//                   />
//                 )} */}
//                {!otpVerified && (
//                 <button  className='otp-button'
//                             value="Verify OTP" type="button"
//                         onClick={() => {
//                           if (otpSent) {
//                             verifyOtp();
//                           } else {
//                             sendOtp();
//                           }
//                         }}
//                         placeholder={otpSent ? 'Enter OTP' : 'Send OTP'}
//                       >Verify</button> )}

//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className='x5' sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps('day')}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {Array.from({ length: 31 }, (_, index) => (
//                         <option key={index + 1} value={index + 1}>
//                           {index + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className='x6' sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps('month')}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Month</option>
//                       {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
//                         <option key={index} value={index + 1}>
//                           {month}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                   <Col className='x7' sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps('year')}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Year</option>
//                       {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
//                         <option key={startYear + index} value={startYear + index}>
//                           {startYear + index}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </Col>
//                 </Row>
//                 {formik.touched.day && formik.errors.day && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.day}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.month && formik.errors.month && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.month}
//                   </Form.Control.Feedback>
//                 )}
//                 {formik.touched.year && formik.errors.year && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.year}
//                   </Form.Control.Feedback>
//                 )}

//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className='a1'>
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'male'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className='a2'>
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'female'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className='a'>
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === 'custom'}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>

//                 {/* <h6>Password</h6>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="New password"
//                     className='x8'
//                     {...formik.getFieldProps('password')}
//                     isInvalid={formik.touched.password && formik.errors.password}
//                     onBlur={formik.handleBlur}
//                   />
//                   <span
//                     className="password-toggle-icon"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </div>
//                 <p></p>
//                 <div className="password-input-container">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className='x8'
//                     {...formik.getFieldProps('confirmPassword')}
//                     isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
//                     onBlur={formik.handleBlur}
//                   />
//                   <span
//                     className="password-toggle-icon"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </div> */}

// <h6>Password</h6>
// {/* <div className="passwordd-input-container">
//   <Form.Label>
//     <Form.Control
//       type={showPassword ? "text" : "password"}
//       placeholder="Password"
//       className="x8"
//       {...formik.getFieldProps('password')}
//       isInvalid={formik.touched.password && formik.errors.password}
//       onBlur={formik.handleBlur}
//       maxLength={6}
//     />
//   </Form.Label>
//   <span
//     className="passwordd-toggle-icon"
//     onClick={() => setShowPassword(!showPassword)}
//   >
//     {showPassword ? <FaEyeSlash /> : <FaEye />}
//   </span>
//   <Form.Control.Feedback type="invalid">
//     {formik.errors.password}

//   </Form.Control.Feedback>
// </div>

// <p></p>

// <div style={{marginTop:"-20px"}} className="passwordd-input-container">
//   <Form.Label>
//     <Form.Control
//       type={showConfirmPassword ? "text" : "password"}
//       placeholder="Confirm password"
//       className="x8"
//       {...formik.getFieldProps('confirmPassword')}
//       isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
//       onBlur={formik.handleBlur}
//       maxLength={6}
//     />
//   </Form.Label>
//   <span
//     className="passwordd-toggle-icon"
//     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//   >
//     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//   </span>
//   <Form.Control.Feedback type="invalid">
//     {formik.errors.confirmPassword}
//   </Form.Control.Feedback>
// </div> */}

// <div  className="password-input-container">
//   <InputGroup className="mb-3">

//     <Form.Label>
//       <Form.Control
//       style={{width:"425px"}}
//         type={showPassword ? "text" : "password"}
//         placeholder="Password"
//         className="x8"
//         {...formik.getFieldProps('password')}
//         isInvalid={formik.touched.password && formik.errors.password}
//         onBlur={formik.handleBlur}
//       />
//     </Form.Label>
//     {/* <InputGroup.Text id="inputGroup-sizing-default"> */}
//       <span
//       style={{marginTop:"-10px"}}
//         className="password-toggle-icon"
//         onClick={() => setShowPassword(!showPassword)}
//       >
//         {showPassword ? <FaEyeSlash /> : <FaEye />}
//       </span>
//     {/* </InputGroup.Text> */}

//     <Form.Control.Feedback type="invalid">
//       {formik.errors.password}
//     </Form.Control.Feedback>
//   </InputGroup>
// </div>

// //edited check
// <p></p>
// <div style={{marginTop:"-20px"}} className="passwordd-input-container">
// <InputGroup className="mb-3">

// <Form.Label>
//     <Form.Control
//     style={{width:"425px"}}
//       type={showConfirmPassword ? "text" : "password"}
//       placeholder="Confirm password"
//       className="x8"
//       {...formik.getFieldProps('confirmPassword')}
//       isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
//       onBlur={formik.handleBlur}
//     />
//   </Form.Label>
//   {/* <InputGroup.Text id="inputGroup-sizing-default"> */}
// <span
// style={{paddingLeft:"7px",marginTop:"5px"}}
//     className="passwordd-toggle-icon"
//     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//   >
//     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//   </span>
//         {/* </InputGroup.Text> */}

//   <Form.Control.Feedback type="invalid">
//     {formik.errors.confirmPassword}
//   </Form.Control.Feedback>

//       </InputGroup>

// </div>

//                 <p></p>
//                 <div className='text-center'>
//                   <button type="submit" className='z9' onClick={handleSignup}>Sign Up</button>
//                 </div>
//                 <p style={{marginBottom:"-2px"}} className='or'>or</p>
//                 <div className='text-center'>
//                   <button type="button" className='z10' onClick={handleLoginClick}>
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//           <br />
//           <br />
//           <br />
//         </Col>
//         <Col sm={4}></Col>
//       </Row>

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header  closeButton>
//           <Modal.Title style={{color:"black"}}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Control
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             isInvalid={otpError !== ''}
//           />
//           {otpError && (
//             <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
//               {otpError}
//             </Form.Control.Feedback>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Form,
//   Alert,
//   Modal,
//   Button,
//   InputGroup,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const startYear = 1901;
//   const endYear = 2024;

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   let [username, setUsername] = useState(sessionStorage.getItem("username"));
//   let [email, setEmail] = useState(sessionStorage.getItem("email"));
//   console.log(username, email);
//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setCanResend(true);
//     }
//   }, [timer]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .matches(
//           /^[A-Za-z\s]+$/,
//           "Name should only contain alphabets and spaces"
//         )
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Day is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//       password: Yup.string()
//         .matches(/^\d{6}$/, "Must be 6 digits")
//         .min(6, "Password must be at 6 digits")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//     }),
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       if (otpVerified) {
//         handleSignup(values);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });

//   const handleSignup = (values) => {
//     //   ////////////////////////////////////
//     values.preventDefault();
//     // if (isNaN(Date.parse(dob))) {
//     //   console.error("Invalid date of birth");
//     //   return;
//     // }

//     let dob = new Date(
//       formik.values.year,
//       formik.values.month - 1,
//       formik.values.day
//     );

//     console.log(formik.values.year);
//     console.log(dob);
//     const formattedDate = new Date(dob);
//     console.log("Formatted Date:", formattedDate);
//     //   /////////////////////////////////////

//     let currentdate = new Date();
//     let age1 = currentdate.getFullYear() - dob.getFullYear();
//     let formattedDob = dob.toISOString().split("T")[1];
//     console.log(formattedDob);

//     let signupdata = {
//       user_name: formik.values.name,
//       email: formik.values.email,
//       phone_number: formik.values.phone,
//       gender: formik.values.gender,
//       age: age1,
//       password: formik.values.password,
//       // dob: "2000-11-23",
//     };
//     console.log(signupdata);

//     axios
//       .post("http://49.204.232.254:64/api/createuser", signupdata)
//       .then((response) => {
//         alert("Created successfully");
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate("/Loginpg");
//         }, 1500);
//       })
//       .catch((error) => {
//         console.error(
//           "Error during signup:",
//           error.response ? error.response.data : error.message
//         );
//         alert("Signup failed. Please try again.");
//       });
//   };

//   const sendOtp = async () => {
//     if (formik.values.phone && !formik.errors.phone) {
//       try {
//         const response = await fetch(
//           "http://49.204.232.254:64/mobileauth/send-otp-sms",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ number: formik.values.phone }),
//           }
//         );

//         if (response.ok) {
//           console.log("OTP sent successfully");
//           setOtpSent(true);
//           setTimer(40); // Reset the timer
//           setCanResend(false); // Disable the resend button
//           setShowModal(true); // Open OTP Modal
//         } else {
//           console.error("Failed to send OTP");
//         }
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//       }
//     } else {
//       setOtpError("Please enter a valid phone number first.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       console.log(otp);
//       const response = await axios.post(
//         "http://49.204.232.254:64/mobileauth/verify-otp-sms",
//         {
//           number: formik.values.phone,
//           otp: otp,
//         }
//       );

//       if (response.status == 200) {
//         setOtpVerified(true);
//         setOtpError("");
//         setShowModal(false);
//       } else {
//         setOtpError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setOtpError("Error verifying OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     sendOtp();
//   };

//   const handleLoginClick = () => {
//     navigate("/Loginpg");
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="x1">
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className="text-center">
//                     <h3 style={{ textAlign: "center" }} className="x2">
//                       Create your account
//                     </h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 {/* Name */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter name"
//                   className="x3"
//                   {...formik.getFieldProps("name")}
//                   isInvalid={formik.touched.name && formik.errors.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.name}
//                 </Form.Control.Feedback>
//                 {/* Email */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>
//                 Phone
//                 <div className="phone-input-container">
//                   <Row>
//                     <Col sm={2}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={10}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                         disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <div>
//                       <span
//                         style={{ color: "green" }}
//                         className="verified-label"
//                       >
//                         Verified
//                       </span>
//                       <span>
//                         <button>edit</button>
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 {/* OTP Verification */}
//                 {!otpVerified && (
//                   <div>
//                     {!isPhoneEditable && (
//                       <button
//                         className="otp-button"
//                         type="button"
//                         onClick={() => {
//                           if (otpSent) {
//                             verifyOtp();
//                           } else {
//                             sendOtp();
//                           }
//                         }}
//                       >
//                         {otpSent ? "Verify OTP" : "Send OTP"}
//                       </button>
//                     )}
//                     {otpSent && !otpVerified && (
//                       <button
//                         className="edit-button"
//                         type="button"
//                         onClick={() => {
//                           setIsPhoneEditable(true); // Enable phone number editing
//                           setOtpVerified(false); // Reset OTP verification
//                           setOtpSent(false); // Reset OTP sent status
//                         }}
//                       >
//                         Edit
//                       </button>
//                     )}
//                   </div>
//                 )}
//                 {/* Phone */}
//                 {/* <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div> */}
//                 {/* OTP Verification */}
//                 {/* {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                   >
//                     {otpSent ? "Verify OTP" : "Send OTP"}
//                   </button>
//                 )} */}
//                 {/* Date of Birth */}
//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       value={formik.values.day}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {[...Array(31)].map((_, i) => (
//                         <option key={i} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.day}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps("month")}
//                       value={formik.values.month}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Month</option>
//                       {Array.from({ length: 12 }, (_, i) => (
//                         <option key={i} value={i + 1}>
//                           {new Date(0, i).toLocaleString("en-US", {
//                             month: "short",
//                           })}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.month}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps("year")}
//                       value={formik.values.year}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, i) => (
//                           <option key={i} value={endYear - i}>
//                             {endYear - i}
//                           </option>
//                         )
//                       )}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.year}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>
//                 {/* Gender */}
//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>
//                 {/* Password */}
//                 <InputGroup style={{ width: "450px" }} className="mb-3">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("password")}
//                     isInvalid={
//                       formik.touched.password && formik.errors.password
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       color: "grey",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                     }}
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Confirm Password */}
//                 <InputGroup style={{ width: "450px" }} className="mb-3">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("confirmPassword")}
//                     isInvalid={
//                       formik.touched.confirmPassword &&
//                       formik.errors.confirmPassword
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       color: "grey",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                     }}
//                     variant="outline-secondary"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Submit Button */}
//                 <button className="z10" type="submit" onClick={handleSignup}>
//                   Sign Up
//                 </button>
//                 / <br />
//                 {/* Already have an account? */}
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                   or
//                 </p>
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formOtp">
//             <Form.Label style={{ color: "black" }}>Enter OTP:</Form.Label>
//             <Form.Control
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength={6}
//             />
//             {otpError && <p style={{ color: "red" }}>{otpError}</p>}
//           </Form.Group>
//           <button className="z10" variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </button>
//           <div>
//             {canResend ? (
//               <Button
//                 style={{ color: "blue" }}
//                 variant="link"
//                 onClick={handleResendOtp}
//               >
//                 Resend OTP
//               </Button>
//             ) : (
//               <span style={{ color: "black" }}>
//                 Resend OTP in {timer} seconds
//               </span>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             style={{ backgroundColor: "blue" }}
//             variant="secondary"
//             onClick={() => setShowModal(false)}
//           >
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { Row, Col, Card, Form, Alert, Modal, Button, InputGroup } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import { Formik, Field, useFormikContext } from 'formik';
// import * as Yup from "yup";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const startYear = 1901;
//   const endYear = new Date().getFullYear();;

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [password, setPassword] = useState(Array(6).fill(''));
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const navigate = useNavigate();
// let [username,setUsername]=useState(sessionStorage.getItem("username"))
// let [email,setEmail]=useState(sessionStorage.getItem("email"))
// console.log(username,email)

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setCanResend(true);
//     }
//   }, [timer]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//       .min(3, "Name must be at least 3 characters")
//       .matches(/^[A-Za-z\s]+$/, "Name should only contain alphabets and spaces")
//       .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Day is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//       password: Yup.string()
//       .matches(/^\d{6}$/, "Must be 6 digits")
//         .min(6, "Password must be at 6 digits")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//         password: Yup.string()
//         .length(6, 'Password must be exactly 6 digits')
//         .matches(/^\d+$/, 'Password must be digits only')
//         .required('Password is required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     }),
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       if (otpVerified) {
//         handleSignup(values);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });

//   const handleSignup = (values) => {
//     let dob = new Date(values.year, values.month - 1, values.day);

//   if (isNaN(dob.getTime())) {
//     console.error("Invalid date");
//     return;
//   }

//   let currentdate = new Date();
//   let age1 = currentdate.getFullYear() - dob.getFullYear();
//   let formattedDob = dob.toISOString().split("T")[0];

//   ////////////////////////////////////
//     // values.preventDefault();
//     // if (isNaN(Date.parse(dob))) {
//     //   console.error("Invalid date of birth");
//     //   return;
//     // }
//     // const formattedDate = new Date(dob).toISOString();
//     // console.log("Formatted Date:", formattedDate);
//   /////////////////////////////////////

//     // let dob = new Date(values.year, values.month - 1, values.day);
//     // let currentdate = new Date();
//     // let age1 = currentdate.getFullYear() - dob.getFullYear();
//     // let formattedDob = dob.toISOString().split("T")[1];

//     let signupdata = {
//       user_name: values.name,
//       e_mail: values.email,
//       phno: values.phone,
//       gender: values.gender,
//       age: age1,
//       password: values.password,
//       dob: formattedDob,
//     };

//     axios
//     .post("http://49.204.232.254:64/api/createuser", signupdata)
//     .then((response) => {
//       alert("Created successfully");
//       setShowAlert(true);
//       setTimeout(() => {
//         navigate("/Loginpg");
//       }, 1500);
//     })
//     .catch((error) => {
//       console.error(
//         "Error during signup:",
//         error.response ? error.response.data : error.message
//       );
//       alert("Signup failed. Please try again.");
//     });
// };

// const sendOtp = async () => {
//   if (formik.values.phone && !formik.errors.phone) {
//     try {
//       const response = await fetch("http://49.204.232.254:64/mobileauth/send-otp-sms", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ number: formik.values.phone }),
//       });

//       if (response.ok) {
//         console.log("OTP sent successfully");
//         setOtpSent(true);
//         setTimer(40); // Reset the timer
//         setCanResend(false); // Disable the resend button
//         setShowModal(true); // Open OTP Modal
//       } else {
//         console.error("Failed to send OTP");
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   } else {
//     setOtpError("Please enter a valid phone number first.");
//   }
// };

// const verifyOtp = async () => {
//   try {
//     console.log(otp)
//     const response = await axios.post("http://49.204.232.254:64/mobileauth/verify-otp-sms", {
//       number: formik.values.phone,
//       otp: otp,
//     });

//     if (response.status==200) {
//       setOtpVerified(true);
//       setOtpError("");
//       setShowModal(false);
//     } else {
//       setOtpError("Invalid OTP. Please try again.");
//     }
//   } catch (error) {
//     console.error("Error verifying OTP:", error);
//     setOtpError("Error verifying OTP. Please try again.");
//   }
// };

// const handleResendOtp = () => {
//   sendOtp();
// };
// <Formik>
// initialValues={{ password: '', confirmPassword: '' }}
// validationSchema={PasswordSchema}
// onSubmit={(values) => {
//   alert('Form submitted successfully');
//   console.log(values);
// }}
// </Formik>
// {({ values, handleChange, setFieldValue }) => {
//   const handleDigitChange = (e, index, fieldName) => {
//     const value = e.target.value;
//     if (/^\d?$/.test(value)) {
//       const newPasswordArray = values[fieldName].split('');
//       newPasswordArray[index] = value;
//       const newPassword = newPasswordArray.join('');
//       setFieldValue(fieldName, newPassword);

//       // Automatically focus the next input
//       if (value && index < 5) {
//         document.getElementById(`${fieldName}-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index, fieldName) => {
//     if (e.key === 'Backspace' && !values[fieldName][index] && index > 0) {
//       document.getElementById(`${fieldName}-${index - 1}`).focus();
//     }
//   };

// const toggleVisibility = () => {
//   setIsPasswordVisible(!isPasswordVisible);
// };

// const handleLoginClick = () => {
//   navigate("/Loginpg");
// };

// return (
//   <div className="signup-container">
//     <br />
//     <Row>
//       <Col sm={4}></Col>
//       <Col sm={4}>
//         <Card className="x1">
//           <Card.Header>
//             <Row>
//               <Col sm={11}>
//                 <div className="text-center">
//                   <h3 style={{textAlign:"center"}} className="x2">Create your account</h3>
//                 </div>
//               </Col>
//             </Row>
//           </Card.Header>
//           <Card.Body>
//             {showAlert && (
//               <Alert
//                 variant="success"
//                 onClose={() => setShowAlert(false)}
//                 dismissible
//               >
//                 Sign up successful!
//               </Alert>
//             )}
//              <Form onSubmit={formik.handleSubmit}>
//                 {/* Name */}
//                 <Form.Control
//                   type="text"

//                   placeholder="Enter name"
//                   className="x3"
//                   {...formik.getFieldProps("name")}
//                   isInvalid={formik.touched.name && formik.errors.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.name}
//                 </Form.Control.Feedback>

//                   {/* Email */}
//                   <Form.Control
//                   type="text"

//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>

//     {/* Phone */}
// <div className="phone-input-container">
//   <Row>
//     <Col sm={2}>
//       <Form.Control
//         type="text"
//         placeholder="+91"
//         defaultValue="+91"
//         disabled
//         className="x4"
//       />
//     </Col>
//     <Col sm={10}>
//       <Form.Control
//         type="text"
//         placeholder="Phone number"
//         className="x4"
//         {...formik.getFieldProps("phone")}
//         isInvalid={formik.touched.phone && formik.errors.phone}
//         onBlur={formik.handleBlur}
//         maxLength={10}
//         disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked
//       />
//       <Form.Control.Feedback type="invalid">
//         {formik.errors.phone}
//       </Form.Control.Feedback>
//     </Col>
//   </Row>
//   {otpVerified &&  (
//     <div>
//     <span style={{ color: "green" }} className="verified-label">
//       Verified
//     </span>
//     <span>
//      <button    variant="link"
//                       size="sm"
//                       className="edit-button"
//                       onClick={() => setIsPhoneEditable(true)}>edit</button>
//     </span>
//     </div>
//   )}
// </div>

// {/* OTP Verification */}
// {!otpVerified && (
//   <div>
//     {!isPhoneEditable && (
//       <button
//         className="otp-button"
//         type="button"
//         onClick={() => {
//           if (otpSent) {
//             verifyOtp();
//           } else {
//             sendOtp();
//           }
//         }}
//       >
//         {otpSent ? "Verify OTP" : "Send OTP"}
//       </button>
//     )}
//     {otpSent && !otpVerified && (
//       <button
//         className="edit-button"
//         type="button"
//         onClick={() => {
//           setIsPhoneEditable(true); // Enable phone number editing
//           setOtpVerified(false); // Reset OTP verification
//           setOtpSent(false); // Reset OTP sent status
//         }}
//       >
//         Edit
//       </button>
//     )}
//   </div>
// )}

//         {/* Phone */}
//         {/* <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div> */}

//                 {/* OTP Verification */}
//                 {/* {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                   >
//                     {otpSent ? "Verify OTP" : "Send OTP"}
//                   </button>
//                 )} */}

//     {/* Date of Birth */}
//     <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       value={formik.values.day}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {[...Array(31)].map((_, i) => (
//                         <option key={i} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.day}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col sm={4}>
//                     <Form.Control
//                       as="select"
//                       {...formik.getFieldProps("month")}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                       className="x4"
//                     >
//                       <option value="">Month</option>
//                       {Array.from({ length: 12 }, (_, index) => (
//                         <option key={index} value={index + 1}>
//                           {index + 1}
//                         </option>
//                       ))}
//                     </Form.Control>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.month}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Control
//                       as="select"
//                       {...formik.getFieldProps("year")}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                       className="x4"
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, index) => (
//                           <option key={index} value={endYear - index}>
//                             {endYear - index}
//                           </option>
//                         )
//                       )}
//                     </Form.Control>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.year}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                  {/* Gender */}
//                  <h6>Gender</h6>
//                 <Row>
//                 <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>

//                   {/* Password
//                   <InputGroup style={{width:"450px"}} className="mb-3">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("password")}
//                     isInvalid={
//                       formik.touched.password && formik.errors.password
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                   style={{border:"none",backgroundColor:"white",color:"grey",marginLeft:"5px",marginTop:"-10px"}}
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </InputGroup>

//                   {/* Confirm Password */}
//                   {/* <InputGroup style={{width:"450px"}} className="mb-3">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("confirmPassword")}
//                     isInvalid={
//                       formik.touched.confirmPassword &&
//                       formik.errors.confirmPassword
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                   style={{border:"none",backgroundColor:"white",color:"grey",marginLeft:"5px",marginTop:"-10px"}}
//                     variant="outline-secondary"
//                     onClick={() =>
//                       setShowConfirmPassword(!showConfirmPassword)
//                     }
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </InputGroup> */}

// <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
//               <label>Password:</label>
//               {Array(6).fill('').map((_, index) => (
//                 <Field
//                   key={`password-${index}`}
//                   type={isPasswordVisible ? 'text' : 'password'}
//                   id={`password-${index}`}
//                   name="password"
//                   value={values.password[index] || ''}
//                   onChange={(e) => handleDigitChange(e, index, 'password')}
//                   onKeyDown={(e) => handleKeyDown(e, index, 'password')}
//                   maxLength={1}
//                   style={{
//                     width: '40px',
//                     height: '40px',
//                     fontSize: '24px',
//                     textAlign: 'center',
//                     borderRadius: '5px',
//                     border: '1px solid #ccc'
//                   }}
//                 />
//               ))}
//               <button type="button" onClick={toggleVisibility} style={{ marginLeft: '10px' }}>
//                 {isPasswordVisible ? '🙈' : '👁️'}
//               </button>
//             </div>

//             <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
//               <label>Confirm Password:</label>
//               {Array(6).fill('').map((_, index) => (
//                 <Field
//                   key={`confirmPassword-${index}`}
//                   type={isPasswordVisible ? 'text' : 'password'}
//                   id={`confirmPassword-${index}`}
//                   name="confirmPassword"
//                   value={values.confirmPassword[index] || ''}
//                   onChange={(e) => handleDigitChange(e, index, 'confirmPassword')}
//                   onKeyDown={(e) => handleKeyDown(e, index, 'confirmPassword')}
//                   maxLength={1}
//                   style={{
//                     width: '40px',
//                     height: '40px',
//                     fontSize: '24px',
//                     textAlign: 'center',
//                     borderRadius: '5px',
//                     border: '1px solid #ccc'
//                   }}
//                 />
//               ))}
//               <button type="button" onClick={toggleVisibility} style={{ marginLeft: '10px' }}>
//                 {isPasswordVisible ? '🙈' : '👁️'}
//               </button>
//             </div>

//                   {/* Submit Button */}
//                   <button className="z10" type="submit"  onClick={handleSignup}>
//                   Sign Up
//                 </button>
//                 <br />

//                 {/* Already have an account? */}
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                    or
//                  </p>
//                  <div className="text-center">
//                    <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>

//        {/* OTP Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{color:"black"}}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formOtp">
//             <Form.Label style={{color:"black"}}>Enter OTP:</Form.Label>
//             <Form.Control
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength={6}
//             />
//             {otpError && <p style={{ color: "red" }}>{otpError}</p>}
//           </Form.Group>
//           <button className="z10" variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </button>
//           <div>
//             {canResend ? (
//               <Button style={{color:"blue"}} variant="link" onClick={handleResendOtp}>
//                 Resend OTP
//               </Button>
//             ) : (
//               <span style={{color:"black"}}>Resend OTP in {timer} seconds</span>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button style={{backgroundColor:"blue"}} variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

//-----------------------------------------------------

//signup2222

// import React, { useState, useEffect, useRef } from "react";
// import { Row, Col, Card, Form, Alert, Modal, Button, InputGroup } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const startYear = 1901;
//   const endYear = new Date().getFullYear();

//   // const [showPassword, setShowPassword] = useState(false);
//   // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [password, setPassword] = useState(['', '', '', '', '', '']);
//   const [confirmPassword, setConfirmPassword] = useState(['', '', '', '', '', '', '', '']);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
//   const inputRefs = useRef([]);

//   const navigate = useNavigate();
//   let [username, setUsername] = useState(sessionStorage.getItem("username"))
//   let [email, setEmail] = useState(sessionStorage.getItem("email"))
//   console.log(username, email)

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setCanResend(true);
//     }
//   }, [timer]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .matches(/^[A-Za-z\s]+$/, "Name should only contain alphabets and spaces")
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Day is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//          password: Yup.string()
//       .length(6, "Password must be exactly 6 digits")
//       .matches(/^\d+$/, "Password must be digits only")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], "Passwords must match")
//       .length(6, "Confirm Password must be exactly 6 digits")
//       .matches(/^\d+$/, "Confirm Password must be digits only")
//       .required("Confirm Password is required"),

//     }),
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       if (otpVerified) {
//         handleSignup(values);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });

//   const handleSignup = (values) => {
//     values.preventDefault();

//     let dob = new Date(
//       formik.values.year,
//       formik.values.month - 1,
//       formik.values.day
//     );

//     console.log(formik.values.year);
//     console.log(dob);
//     const formattedDate = new Date(dob);
//     console.log("Formatted Date:", formattedDate);

//     let currentdate = new Date();
//     let age1 = currentdate.getFullYear() - dob.getFullYear();
//     let formattedDob = dob.toISOString().split("T")[1];
//     console.log(formattedDob)

//     ////////////////////////////////////
//     // values.preventDefault();
//     // if (isNaN(Date.parse(dob))) {
//     //   console.error("Invalid date of birth");
//     //   return;
//     // }
//     // const formattedDate = new Date(dob).toISOString();
//     // console.log("Formatted Date:", formattedDate);
//     /////////////////////////////////////

//     // let dob = new Date(values.year, values.month - 1, values.day);
//     // let currentdate = new Date();
//     // let age1 = currentdate.getFullYear() - dob.getFullYear();
//     // let formattedDob = dob.toISOString().split("T")[1];
//     console.log(password)
//     let newpassword = password.join("")
//     console.log(newpassword)
//     let newphone = parseInt(formik.values.phone)
//     let signupdata = {
//       user_name: formik.values.name,
//       email: formik.values.email,
//       phone_number: newphone,
//       gender: formik.values.gender,
//       age: age1,
//       password: newpassword,
//       // dob: formattedDob,
//     };
//     console.log(signupdata)
//     axios.post("http://49.204.232.254:64/api/createuser", signupdata)
//       .then((response) => {
//         console.log(response.data)
//         alert("Created successfully");
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate("/Loginpg");
//         }, 1500);
//       })
//       .catch((error) => {
//         console.error(
//           "Error during signup:",
//           error.response ? error.response.data : error.message
//         );
//         alert("Signup failed. Please try again.");
//       });
//   };

//   const sendOtp = async () => {
//     if (formik.values.phone && !formik.errors.phone) {
//       try {
//         const response = await fetch("http://49.204.232.254:64/mobileauth/send-otp-sms", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ number: formik.values.phone }),
//         });

//         if (response.ok) {
//           console.log("OTP sent successfully");
//           setOtpSent(true);
//           setTimer(40); // Reset the timer
//           setCanResend(false); // Disable the resend button
//           setShowModal(true); // Open OTP Modal
//         } else {
//           console.error("Failed to send OTP");
//         }
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//       }
//     } else {
//       setOtpError("Please enter a valid phone number first.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       console.log(otp)
//       const response = await axios.post("http://49.204.232.254:64/mobileauth/verify-otp-sms", {
//         number: formik.values.phone,
//         otp: otp,
//       });

//       if (response.status == 200) {
//         setOtpVerified(true);
//         setOtpError("");
//         setShowModal(false);
//       } else {
//         setOtpError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setOtpError("Error verifying OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     sendOtp();
//   };

//   const handleChange = (e, index) => {
//     const newPassword = [...password];
//     newPassword[index] = e.target.value;
//     setPassword(newPassword);

//     if (e.target.value && index < password.length - 1) {
//       document.getElementById(`digit-${index + 1}`).focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && !password[index] && index > 0) {
//       document.getElementById(`digit-${index - 1}`).focus();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const passwordString = password.join('');
//     // console.log(passwordString);
//   };

//   const toggleVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleConfirmChange = (e, index) => {
//     const newValue = e.target.value;
//     const newConfirmPassword = [...confirmPassword];
//     newConfirmPassword[index] = newValue;
//     setConfirmPassword(newConfirmPassword);

//     // Focus on the next input field
//     if (newValue && index < confirmPassword.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleConfirmKeyDown = (e, index) => {
//     if (e.key === "Backspace" && index > 0 && confirmPassword[index] === "") {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleLoginClick = () => {
//     navigate("/Loginpg");
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="x1">
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className="text-center">
//                     <h3 style={{ textAlign: "center" }} className="x2">Create your account</h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 {/* Name */}
//                 <Form.Control
//                   type="text"

//                   placeholder="Enter name"
//                   className="x3"
//                   {...formik.getFieldProps("name")}
//                   isInvalid={formik.touched.name && formik.errors.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.name}
//                 </Form.Control.Feedback>

//                 {/* Email */}
//                 <Form.Control
//                   type="text"

//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>

//                 {/* Phone */}
//                 <div className="phone-input-container">
//                   <Row>
//                     <Col sm={2}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={10}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                         disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <div>
//                       <span style={{ color: "green" }} className="verified-label">
//                         Verified
//                       </span>
//                       <span>
//                         <button variant="link"
//                           size="sm"
//                           className="edit-button"
//                           onClick={() => setIsPhoneEditable(true)}>edit</button>
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {/* OTP Verification */}
//                 {!otpVerified && (
//                   <div>
//                     {!isPhoneEditable && (
//                       <button
//                         className="otp-button"
//                         type="button"
//                         onClick={() => {
//                           if (otpSent) {
//                             verifyOtp();
//                           } else {
//                             sendOtp();
//                           }
//                         }}
//                       >
//                         {otpSent ? "Verify OTP" : "Send OTP"}
//                       </button>
//                     )}
//                     {otpSent && !otpVerified && (
//                       <button
//                         className="edit-button"
//                         type="button"
//                         onClick={() => {
//                           setIsPhoneEditable(true); // Enable phone number editing
//                           setOtpVerified(false); // Reset OTP verification
//                           setOtpSent(false); // Reset OTP sent status
//                         }}
//                       >
//                         Edit
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 {/* Phone */}
//                 {/* <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div> */}

//                 {/* OTP Verification */}
//                 {/* {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                   >
//                     {otpSent ? "Verify OTP" : "Send OTP"}
//                   </button>
//                 )} */}

//                 {/* Date of Birth */}
//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       value={formik.values.day}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {[...Array(31)].map((_, i) => (
//                         <option key={i} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.day}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col sm={4}>
//                     <Form.Control
//                       as="select"
//                       {...formik.getFieldProps("month")}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                       className="x4"
//                     >
//                       <option value="">Month</option>
//                       {Array.from({ length: 12 }, (_, index) => (
//                         <option key={index} value={index + 1}>
//                           {index + 1}
//                         </option>
//                       ))}
//                     </Form.Control>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.month}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Control
//                       as="select"
//                       {...formik.getFieldProps("year")}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                       className="x4"
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, index) => (
//                           <option key={index} value={endYear - index}>
//                             {endYear - index}
//                           </option>
//                         )
//                       )}
//                     </Form.Control>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.year}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 {/* Gender */}
//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>

//                 {/* Password
//                   <InputGroup style={{width:"450px"}} className="mb-3">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("password")}
//                     isInvalid={
//                       formik.touched.password && formik.errors.password
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                   style={{border:"none",backgroundColor:"white",color:"grey",marginLeft:"5px",marginTop:"-10px"}}
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </InputGroup>

//                   {/* Confirm Password */}
//                 {/* <InputGroup style={{width:"450px"}} className="mb-3">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("confirmPassword")}
//                     isInvalid={
//                       formik.touched.confirmPassword &&
//                       formik.errors.confirmPassword
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                   style={{border:"none",backgroundColor:"white",color:"grey",marginLeft:"5px",marginTop:"-10px"}}
//                     variant="outline-secondary"
//                     onClick={() =>
//                       setShowConfirmPassword(!showConfirmPassword)
//                     }
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </InputGroup> */}

//                 {/* Password */}
//                 <InputGroup>
//                   {password.map((digit, index) => (
//                     <Form.Control
//                       key={index}
//                       type={isPasswordVisible ? "text" : "password"}
//                       maxLength="1"
//                       value={digit}
//                       id={`digit-${index}`}
//                       onChange={(e) => handleChange(e, index)}
//                       onKeyDown={(e) => handleKeyDown(e, index)}
//                     />
//                   ))}
//                   <Button style={{background:"#06b4d6", border:"none", color:"black"}} onClick={toggleVisibility}>
//                     {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                 </InputGroup>
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.password}
//                 </Form.Control.Feedback>
//                 <br />

//                              {/* Confirm Password */}
//                              <InputGroup>
//                   {confirmPassword.slice(0,6).map((digit, index) => (
//                     <Form.Control
//                       key={index}
//                       type={isConfirmPasswordVisible ? "text" : "password"}
//                       maxLength="1"
//                       value={digit}
//                       id={`confirm-password-${index}`}
//                       ref={(el) => (inputRefs.current[index] = el)}
//                       onChange={(e) => handleConfirmChange(e, index)}
//                       onKeyDown={(e) => handleConfirmKeyDown(e, index)}
//                     />
//                   ))}
//                   <Button style={{background:"#06b4d6", border:"none", color:"black"}} onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
//                     {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                 </InputGroup>
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.confirmPassword}
//                 </Form.Control.Feedback>
//                 <br />

//                 {/* Submit Button */}
//                 <button className="z10" type="submit" onClick={handleSignup}>
//                   Sign Up
//                 </button>
//                 <br />

//                 {/* Already have an account? */}
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                   or
//                 </p>
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>

//       </Row>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formOtp">
//             <Form.Label style={{ color: "black" }}>Enter OTP:</Form.Label>
//             <Form.Control
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength={6}
//             />
//             {otpError && <p style={{ color: "red" }}>{otpError}</p>}
//           </Form.Group>
//           <button className="z10" variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </button>
//           <div>
//             {canResend ? (
//               <Button style={{ color: "blue" }} variant="link" onClick={handleResendOtp}>
//                 Resend OTP
//               </Button>
//             ) : (
//               <span style={{ color: "black" }}>Resend OTP in {timer} seconds</span>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button style={{ backgroundColor: "blue" }} variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

//updated on monday

// import React, { useState, useEffect } from "react";
// import {Row, Col, Card, Form, Alert, Modal, Button,InputGroup} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const startYear = 1901;
//   const endYear = new Date().getFullYear();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   let [username, setUsername] = useState(sessionStorage.getItem("username"));
//   let [email, setEmail] = useState(sessionStorage.getItem("email"));
//   console.log(username, email);

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setCanResend(true);
//     }
//   }, [timer]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .matches(
//           /^[A-Za-z\s]+$/,
//           "Name should only contain alphabets and spaces"
//         )
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Day is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//       password: Yup.string()
//         .matches(/^\d{6}$/, "Must be 6 digits")
//         .min(6, "Password must be at 6 digits")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//     }),
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       console.log(otpVerified)
//       if (otpVerified) {
//         handleSignup(values);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });

//   const handleSignup = (values) => {

//     console.log("signup")
//     let dob = new Date(
//       formik.values.year,
//       formik.values.month - 1,
//       formik.values.day
//     );

//     console.log(formik.values.year);
//     console.log(dob);
//     const formattedDate = new Date(dob);
//     console.log("Formatted Date:", formattedDate);

//     let currentdate = new Date();
//     let age1 = currentdate.getFullYear() - dob.getFullYear();
//     let formattedDob = dob.toISOString().split("T")[1];
//     console.log(formattedDob)
//     ////////////////////////////////////
//     // values.preventDefault();
//     // if (isNaN(Date.parse(dob))) {
//     //   console.error("Invalid date of birth");
//     //   return;
//     // }
//     // const formattedDate = new Date(dob).toISOString();
//     // console.log("Formatted Date:", formattedDate);
//     /////////////////////////////////////

//     // let dob = new Date(values.year, values.month - 1, values.day);
//     // let currentdate = new Date();
//     // let age1 = currentdate.getFullYear() - dob.getFullYear();
//     // let formattedDob = dob.toISOString().split("T")[1];
//     // console.log(password)
//     // let newpassword = password.join("")
//     // console.log(newpassword)
//     let newphone = parseInt(formik.values.phone)
//     let signupdata = {
//       user_name: formik.values.name,
//       email: formik.values.email,
//       phone_number: formik.values.phone,
//       gender: formik.values.gender,
//       age: age1,
//       password: formik.values.password,
//       // dob: formattedDob,
//     };
//     console.log(signupdata)

//     axios
//       .post("http://49.204.232.254:64/api/createuser", signupdata)
//       .then((response) => {
//         alert("Created successfully");
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate("/Loginpg");
//         }, 1500);
//       })
//       .catch((error) => {
//         console.error(
//           "Error during signup:",
//           error.response ? error.response.data : error.message
//         );
//         alert("Signup failed. Please try again.");
//       });
//   };

//   const sendOtp = async () => {
//     if (formik.values.phone && !formik.errors.phone) {
//       try {
//         const response = await fetch(
//           "http://49.204.232.254:64/mobileauth/send-otp-sms",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ number: formik.values.phone }),
//           }
//         );

//         if (response.ok) {
//           console.log("OTP sent successfully");
//           setOtpSent(true);
//           setTimer(40); // Reset the timer
//           setCanResend(false); // Disable the resend button
//           setShowModal(true); // Open OTP Modal
//         } else {
//           console.error("Failed to send OTP");
//         }
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//       }
//     } else {
//       setOtpError("Please enter a valid phone number first.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       console.log(otp);
//       const response = await axios.post(
//         "http://49.204.232.254:64/mobileauth/verify-otp-sms",
//         {
//           number: formik.values.phone,
//           otp: otp,
//         }
//       );

//       if (response.status == 200) {
//         setOtpVerified(true);
//         setOtpError("");
//         setShowModal(false);
//       } else {
//         setOtpError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setOtpError("Error verifying OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     sendOtp();
//   };

//   const handleLoginClick = () => {
//     navigate("/Loginpg");
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="x1">
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className="text-center">
//                     <h3 style={{ textAlign: "center" }} className="x2">
//                       Create your account
//                     </h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 {/* Name */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter name"
//                   className="x3"
//                   {...formik.getFieldProps("name")}
//                   isInvalid={formik.touched.name && formik.errors.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.name}
//                 </Form.Control.Feedback>
//                 {/* Email */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>
//                 Phone
//                 <div className="phone-input-container">
//                   <Row>
//                     <Col sm={2}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={10}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                         disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <div>
//                       <span
//                         style={{ color: "green" }}
//                         className="verified-label"
//                       >
//                         Verified
//                       </span>
//                       <span>
//                         <button>edit</button>
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 {/* OTP Verification */}
//                 {!otpVerified && (
//                   <div>
//                     {!isPhoneEditable && (
//                       <button
//                         className="otp-button"
//                         type="button"
//                         onClick={() => {
//                           if (otpSent) {
//                             verifyOtp();
//                           } else {
//                             sendOtp();
//                           }
//                         }}
//                       >
//                         {otpSent ? "Verify OTP" : "Send OTP"}
//                       </button>
//                     )}
//                     {otpSent && !otpVerified && (
//                       <button
//                         className="edit-button"
//                         type="button"
//                         onClick={() => {
//                           setIsPhoneEditable(true); // Enable phone number editing
//                           setOtpVerified(false); // Reset OTP verification
//                           setOtpSent(false); // Reset OTP sent status
//                         }}
//                       >
//                         Edit
//                       </button>
//                     )}
//                   </div>
//                 )}
//                 {/* Phone */}
//                 {/* <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div> */}
//                 {/* OTP Verification */}
//                 {/* {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                   >
//                     {otpSent ? "Verify OTP" : "Send OTP"}
//                   </button>
//                 )} */}
//                 {/* Date of Birth */}
//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       value={formik.values.day}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {[...Array(31)].map((_, i) => (
//                         <option key={i} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.day}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps("month")}
//                       value={formik.values.month}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Month</option>
//                       {Array.from({ length: 12 }, (_, i) => (
//                         <option key={i} value={i + 1}>
//                           {new Date(0, i).toLocaleString("en-US", {
//                             month: "short",
//                           })}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.month}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps("year")}
//                       value={formik.values.year}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, i) => (
//                           <option key={i} value={endYear - i}>
//                             {endYear - i}
//                           </option>
//                         )
//                       )}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.year}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>
//                 {/* Gender */}
//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>
//                 {/* Password */}
//                 <InputGroup style={{ width: "450px" }} className="mb-3">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("password")}
//                     isInvalid={
//                       formik.touched.password && formik.errors.password
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       color: "grey",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                     }}
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Confirm Password */}
//                 <InputGroup style={{ width: "450px" }} className="mb-3">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("confirmPassword")}
//                     isInvalid={
//                       formik.touched.confirmPassword &&
//                       formik.errors.confirmPassword
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       color: "grey",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                     }}
//                     variant="outline-secondary"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Submit Button */}
//                 <button className="z10" type="submit" >
//                   Sign Up
//                 </button>
//                 <br />
//                 {/* Already have an account? */}
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                   or
//                 </p>
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formOtp">
//             <Form.Label style={{ color: "black" }}>Enter OTP:</Form.Label>
//             <Form.Control
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength={6}
//             />
//             {otpError && <p style={{ color: "red" }}>{otpError}</p>}
//           </Form.Group>
//           <button className="z10" variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </button>
//           <div>
//             {canResend ? (
//               <Button
//                 style={{ color: "blue" }}
//                 variant="link"
//                 onClick={handleResendOtp}
//               >
//                 Resend OTP
//               </Button>
//             ) : (
//               <span style={{ color: "black" }}>
//                 Resend OTP in {timer} seconds
//               </span>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             style={{ backgroundColor: "blue" }}
//             variant="secondary"
//             onClick={() => setShowModal(false)}
//           >
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

// tuesday updated one

// import React, { useState, useEffect } from "react";
// import {Row, Col, Card, Form, Alert, Modal, Button,InputGroup} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const startYear = 1901;
//   const endYear = new Date().getFullYear();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   let [username, setUsername] = useState(sessionStorage.getItem("username"));
//   let [email, setEmail] = useState(sessionStorage.getItem("email"));
//   console.log(username, email);

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setCanResend(true);
//     }
//   }, [timer]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .matches(
//           /^[A-Za-z\s]+$/,
//           "Name should only contain alphabets and spaces"
//         )
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Day is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//       password: Yup.string()
//         .matches(/^\d{6}$/, "Must be 6 digits")
//         .min(6, "Password must be at 6 digits")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//     }),
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       console.log(otpVerified)
//       if (otpVerified) {
//         handleSignup(values);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });

//   const handleSignup = (values) => {

//     console.log("signup")
//     let dob = new Date(
//       formik.values.year,
//       formik.values.month - 1,
//       formik.values.day
//     );

//     console.log(formik.values.year);
//     console.log(dob);
//     const formattedDate = new Date(dob);
//     console.log("Formatted Date:", formattedDate);

//     let currentdate = new Date();
//     let age1 = currentdate.getFullYear() - dob.getFullYear();
//     let formattedDob = dob.toISOString().split("T")[1];
//     console.log(formattedDob)
//     ////////////////////////////////////
//     // values.preventDefault();
//     // if (isNaN(Date.parse(dob))) {
//     //   console.error("Invalid date of birth");
//     //   return;
//     // }
//     // const formattedDate = new Date(dob).toISOString();
//     // console.log("Formatted Date:", formattedDate);
//     /////////////////////////////////////

//     // let dob = new Date(values.year, values.month - 1, values.day);
//     // let currentdate = new Date();
//     // let age1 = currentdate.getFullYear() - dob.getFullYear();
//     // let formattedDob = dob.toISOString().split("T")[1];
//     // console.log(password)
//     // let newpassword = password.join("")
//     // console.log(newpassword)
//     let newphone = parseInt(formik.values.phone)
//     let signupdata = {
//       user_name: formik.values.name,
//       email: formik.values.email,
//       phone_number: formik.values.phone,
//       gender: formik.values.gender,
//       age: age1,
//       password: formik.values.password,
//       // dob: formattedDob,
//     };
//     console.log(signupdata)

//     axios
//       .post("http://49.204.232.254:64/api/createuser", signupdata)
//       .then((response) => {
//         alert("Created successfully");
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate("/Loginpg");
//         }, 1500);
//       })
//       .catch((error) => {
//         console.error(
//           "Error during signup:",
//           error.response ? error.response.data : error.message
//         );
//         alert("Signup failed. Please try again.");
//       });
//   };

//   const sendOtp = async () => {
//     if (formik.values.phone && !formik.errors.phone) {
//       try {
//         const response = await fetch(
//           "http://49.204.232.254:64/mobileauth/send-otp-sms",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ number: formik.values.phone }),
//           }
//         );

//         if (response.ok) {
//           console.log("OTP sent successfully");
//           setOtpSent(true);
//           setTimer(40); // Reset the timer
//           setCanResend(false); // Disable the resend button
//           setShowModal(true); // Open OTP Modal
//         } else {
//           console.error("Failed to send OTP");
//         }
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//       }
//     } else {
//       setOtpError("Please enter a valid phone number first.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       console.log(otp);
//       const response = await axios.post(
//         "http://49.204.232.254:64/mobileauth/verify-otp-sms",
//         {
//           number: formik.values.phone,
//           otp: otp,
//         }
//       );

//       if (response.status == 200) {
//         setOtpVerified(true);
//         setOtpError("");
//         setShowModal(false);
//       } else {
//         setOtpError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setOtpError("Error verifying OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     sendOtp();
//   };

//   const handleLoginClick = () => {
//     navigate("/Loginpg");
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="x1">
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className="text-center">
//                     <h3 style={{ textAlign: "center" }} className="x2">
//                       Create your account
//                     </h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 {/* Name */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter name"
//                   className="x3"
//                   {...formik.getFieldProps("name")}
//                   isInvalid={formik.touched.name && formik.errors.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.name}
//                 </Form.Control.Feedback>
//                 {/* Email */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>
//                 Phone
//                 <div className="phone-input-container">
//                   <Row>
//                     <Col sm={2}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={8}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                         disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked

//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                     <Col sm={2}> {otpVerified && (
//                     <div>
//                       <span
//                         style={{ color: "green" }}
//                         className="verified-label"
//                       >
//                         Verified
//                       </span>
//                       {/* <span>
//                         <button>edit</button>
//                       </span> */}
//                     </div>
//                   )}</Col>
//                   </Row>

//                 </div>
//                 {/* OTP Verification */}
//                 {!otpVerified && (
//                   <div>
//                     {!isPhoneEditable && (
//                       <button
//                         className="otp-button"
//                         type="button"
//                         onClick={() => {
//                           if (otpSent) {
//                             verifyOtp();
//                           } else {
//                             sendOtp();
//                           }
//                         }}
//                       >
//                         {otpSent ? "Verify OTP" : "Send OTP"}
//                       </button>
//                     )}
//                     {/* {otpSent && !otpVerified && (
//                       <button
//                         className="edit-button"
//                         type="button"
//                         onClick={() => {
//                           setIsPhoneEditable(true); // Enable phone number editing
//                           setOtpVerified(false); // Reset OTP verification
//                           setOtpSent(false); // Reset OTP sent status
//                         }}
//                       >
//                         Edit
//                       </button>
//                     )} */}
//                   </div>
//                 )}
//                 {/* Phone */}
//                 {/* <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div> */}
//                 {/* OTP Verification */}
//                 {/* {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                   >
//                     {otpSent ? "Verify OTP" : "Send OTP"}
//                   </button>
//                 )} */}
//                 {/* Date of Birth */}
//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       value={formik.values.day}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {[...Array(31)].map((_, i) => (
//                         <option key={i} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.day}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps("month")}
//                       value={formik.values.month}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Month</option>
//                       {Array.from({ length: 12 }, (_, i) => (
//                         <option key={i} value={i + 1}>
//                           {new Date(0, i).toLocaleString("en-US", {
//                             month: "short",
//                           })}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.month}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps("year")}
//                       value={formik.values.year}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, i) => (
//                           <option key={i} value={endYear - i}>
//                             {endYear - i}
//                           </option>
//                         )
//                       )}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.year}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>
//                 {/* Gender */}
//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>
//                 {/* Password */}
//               <InputGroup style={{ width: "450px" }} className="mb-3">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter 6 digits password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("password")}
//                     isInvalid={
//                       formik.touched.password && formik.errors.password
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       color: "grey",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                     }}
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </InputGroup>

//                 {/* Confirm Password */}
//                 <InputGroup style={{ width: "450px" }} className="mb-3">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm 6 digits password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("confirmPassword")}
//                     isInvalid={
//                       formik.touched.confirmPassword &&
//                       formik.errors.confirmPassword
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       color: "grey",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                     }}
//                     variant="outline-secondary"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Submit Button */}
//                 <button className="z10" type="submit" >
//                   Sign Up
//                 </button>
//                 <br />
//                 {/* Already have an account? */}
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                   or
//                 </p>
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>
//       <br/>
//       <br/>
//       <br/>

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formOtp">
//             <Form.Label style={{ color: "black" }}>Enter OTP:</Form.Label>
//             <Form.Control
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength={6}
//             />
//             {otpError && <p style={{ color: "red" }}>{otpError}</p>}
//           </Form.Group>
//           <button className="verifyotpbut"
//           variant="primary" onClick={verifyOtp}>
//             Verify OTP
//           </button>
//           <div>
//             {canResend ? (
//               <Button
//                 style={{ color: "blue" }}
//                 variant="link"
//                 onClick={handleResendOtp}
//               >
//                 Resend OTP
//               </Button>
//             ) : (
//               <span style={{ color: "black" }}>
//                 Resend OTP in {timer} seconds
//               </span>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             style={{ backgroundColor: "blue" }}
//             variant="secondary"
//             onClick={() => setShowModal(false)}
//           >
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

//-------------------------------------------------------------------------------

// 9 sep monday

//stable one

// import React, { useState, useEffect } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Form,
//   Alert,
//   Modal,
//   Button,
//   InputGroup,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import "./Signup.css";

// function Signup() {
//   const startYear = 1901;
//   const endYear = new Date().getFullYear();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isPhoneEditable, setIsPhoneEditable] = useState(false);
//   const [timer, setTimer] = useState(30); // 30 seconds timer
//   const [canResend, setCanResend] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [otpError, setOtpError] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();
//   let [username, setUsername] = useState(sessionStorage.getItem("username"));
//   let [email, setEmail] = useState(sessionStorage.getItem("email"));
//   console.log(username, email);

//   useEffect(() => {
//     if (timer > 0) {
//       const intervalId = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else {
//       setCanResend(true);
//     }
//   }, [timer]);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       day: "",
//       month: "",
//       year: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .matches(
//           /^[A-Za-z\s]+$/,
//           "Name should only contain alphabets and spaces"
//         )
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required")
//         .test("email", "Invalid email", function (value) {
//           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           return emailRegex.test(value);
//         }),
//       phone: Yup.string()
//         .matches(/^\d{10}$/, "Phone number must be 10 digits")
//         .required("Phone number is required"),
//       day: Yup.string().required("Day is required"),
//       month: Yup.string().required("Month is required"),
//       year: Yup.string().required("Year is required"),
//       gender: Yup.string().required("Gender is required"),
//       password: Yup.string()
//         .matches(/^\d{6}$/, "Must be 6 digits")
//         .min(6, "Password must be at 6 digits")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm Password is required"),
//     }),
//     validateOnBlur: true,
//     onSubmit: (values) => {
//       console.log(otpVerified);
//       if (otpVerified) {
//         handleSignup(values);
//       } else {
//         setOtpError("Please verify OTP.");
//       }
//     },
//   });

//   const handleSignup = (values) => {
//     console.log("signup");
//     let dob = new Date(
//       formik.values.year,
//       formik.values.month - 1,
//       formik.values.day
//     );

//     console.log(formik.values.year);
//     console.log(dob);
//     const formattedDate = new Date(dob);
//     console.log("Formatted Date:", formattedDate);

//     let currentdate = new Date();
//     let age1 = currentdate.getFullYear() - dob.getFullYear();
//     let formattedDob = dob.toISOString().split("T")[1];
//     console.log(formattedDob);
//     ////////////////////////////////////
//     // values.preventDefault();
//     // if (isNaN(Date.parse(dob))) {
//     //   console.error("Invalid date of birth");
//     //   return;
//     // }
//     // const formattedDate = new Date(dob).toISOString();
//     // console.log("Formatted Date:", formattedDate);
//     /////////////////////////////////////

//     // let dob = new Date(values.year, values.month - 1, values.day);
//     // let currentdate = new Date();
//     // let age1 = currentdate.getFullYear() - dob.getFullYear();
//     // let formattedDob = dob.toISOString().split("T")[1];
//     // console.log(password)
//     // let newpassword = password.join("")
//     // console.log(newpassword)
//     let newphone = parseInt(formik.values.phone);
//     let signupdata = {
//       user_name: formik.values.name,
//       email: formik.values.email,
//       phone_number: formik.values.phone,
//       gender: formik.values.gender,
//       age: age1,
//       password: formik.values.password,
//       // dob: formattedDob,
//     };
//     console.log(signupdata);

//     axios
//       .post("http://49.204.232.254:64/api/createuser", signupdata)
//       .then((response) => {
//         alert("Created successfully");
//         setShowAlert(true);
//         setTimeout(() => {
//           navigate("/Loginpg");
//         }, 1500);
//       })
//       .catch((error) => {
//         console.error(
//           "Error during signup:",
//           error.response ? error.response.data : error.message
//         );
//         alert("Signup failed. Please try again.");
//       });
//   };

//   const sendOtp = async () => {
//     if (formik.values.phone && !formik.errors.phone) {
//       try {
//         const response = await fetch(
//           "http://49.204.232.254:64/mobileauth/send-otp-sms",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ number: formik.values.phone }),
//           }
//         );

//         if (response.ok) {
//           console.log("OTP sent successfully");
//           setOtpSent(true);
//           setTimer(40); // Reset the timer
//           setCanResend(false); // Disable the resend button
//           setShowModal(true); // Open OTP Modal
//         } else {
//           console.error("Failed to send OTP");
//         }
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//       }
//     } else {
//       setOtpError("Please enter a valid phone number first.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       console.log(otp);
//       const response = await axios.post(
//         "http://49.204.232.254:64/mobileauth/verify-otp-sms",
//         {
//           number: formik.values.phone,
//           otp: otp,
//         }
//       );

//       if (response.status == 200) {
//         setOtpVerified(true);
//         setOtpError("");
//         setShowModal(false);
//       } else {
//         setOtpError("Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setOtpError("Error verifying OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     sendOtp();
//   };

//   const handleLoginClick = () => {
//     navigate("/Loginpg");
//   };

//   return (
//     <div className="signup-container">
//       <br />
//       <Row>
//         <Col sm={4}></Col>
//         <Col sm={4}>
//           <Card className="x1">
//             <Card.Header>
//               <Row>
//                 <Col sm={11}>
//                   <div className="text-center">
//                     <h3 style={{ textAlign: "center" }} className="x2">
//                       Create your account
//                     </h3>
//                   </div>
//                 </Col>
//               </Row>
//             </Card.Header>
//             <Card.Body>
//               {showAlert && (
//                 <Alert
//                   variant="success"
//                   onClose={() => setShowAlert(false)}
//                   dismissible
//                 >
//                   Sign up successful!
//                 </Alert>
//               )}
//               <Form onSubmit={formik.handleSubmit}>
//                 {/* Name */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter name"
//                   className="x3"
//                   {...formik.getFieldProps("name")}
//                   isInvalid={formik.touched.name && formik.errors.name}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.name}
//                 </Form.Control.Feedback>
//                 {/* Email */}
//                 <Form.Control
//                   type="text"
//                   placeholder="Email address"
//                   className="x4"
//                   {...formik.getFieldProps("email")}
//                   isInvalid={formik.touched.email && formik.errors.email}
//                   onBlur={formik.handleBlur}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {formik.errors.email}
//                 </Form.Control.Feedback>
//                 Phone
//                 <div className="phone-input-container">
//                   <Row>
//                     <Col sm={2}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={8}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                         disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                     <Col sm={2}>
//                       {" "}
//                       {otpVerified && (
//                         <div>
//                           <span
//                             style={{ color: "green" }}
//                             className="verified-label"
//                           >
//                             Verified
//                           </span>
//                           {/* <span>
//                         <button>edit</button>
//                       </span> */}
//                         </div>
//                       )}
//                     </Col>
//                   </Row>
//                 </div>
//                 {/* OTP Verification */}
//                 {!otpVerified && (
//                   <div>
//                     {!isPhoneEditable && (
//                       <button
//                         className="otp-button"
//                         type="button"
//                         onClick={() => {
//                           if (otpSent) {
//                             verifyOtp();
//                           } else {
//                             sendOtp();
//                           }
//                         }}
//                       >
//                         {otpSent ? "Verify OTP" : "Send OTP"}
//                       </button>
//                     )}
//                     {/* {otpSent && !otpVerified && (
//                       <button
//                         className="edit-button"
//                         type="button"
//                         onClick={() => {
//                           setIsPhoneEditable(true); // Enable phone number editing
//                           setOtpVerified(false); // Reset OTP verification
//                           setOtpSent(false); // Reset OTP sent status
//                         }}
//                       >
//                         Edit
//                       </button>
//                     )} */}
//                   </div>
//                 )}
//                 {/* Phone */}
//                 {/* <div className="phone-input-container">
//                   <Row>
//                     <Col sm={3}>
//                       <Form.Control
//                         type="text"
//                         placeholder="+91"
//                         defaultValue="+91"
//                         disabled
//                         className="x4"
//                       />
//                     </Col>
//                     <Col sm={9}>
//                       <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         className="x4"
//                         {...formik.getFieldProps("phone")}
//                         isInvalid={formik.touched.phone && formik.errors.phone}
//                         onBlur={formik.handleBlur}
//                         maxLength={10}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {formik.errors.phone}
//                       </Form.Control.Feedback>
//                     </Col>
//                   </Row>
//                   {otpVerified && (
//                     <span style={{ color: "green" }} className="verified-label">
//                       Verified
//                     </span>
//                   )}
//                 </div> */}
//                 {/* OTP Verification */}
//                 {/* {!otpVerified && (
//                   <button
//                     className="otp-button"
//                     type="button"
//                     onClick={() => {
//                       if (otpSent) {
//                         verifyOtp();
//                       } else {
//                         sendOtp();
//                       }
//                     }}
//                   >
//                     {otpSent ? "Verify OTP" : "Send OTP"}
//                   </button>
//                 )} */}
//                 {/* Date of Birth */}
//                 <h6>Date of Birth</h6>
//                 <Row>
//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Day"
//                       {...formik.getFieldProps("day")}
//                       value={formik.values.day}
//                       isInvalid={formik.touched.day && formik.errors.day}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Day</option>
//                       {[...Array(31)].map((_, i) => (
//                         <option key={i} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.day}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Month"
//                       {...formik.getFieldProps("month")}
//                       value={formik.values.month}
//                       isInvalid={formik.touched.month && formik.errors.month}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Month</option>
//                       {Array.from({ length: 12 }, (_, i) => (
//                         <option key={i} value={i + 1}>
//                           {new Date(0, i).toLocaleString("en-US", {
//                             month: "short",
//                           })}
//                         </option>
//                       ))}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.month}
//                     </Form.Control.Feedback>
//                   </Col>

//                   <Col className="x5" sm={4}>
//                     <Form.Select
//                       aria-label="Select Year"
//                       {...formik.getFieldProps("year")}
//                       value={formik.values.year}
//                       isInvalid={formik.touched.year && formik.errors.year}
//                       onBlur={formik.handleBlur}
//                     >
//                       <option value="">Year</option>
//                       {Array.from(
//                         { length: endYear - startYear + 1 },
//                         (_, i) => (
//                           <option key={i} value={endYear - i}>
//                             {endYear - i}
//                           </option>
//                         )
//                       )}
//                     </Form.Select>
//                     <Form.Control.Feedback type="invalid">
//                       {formik.errors.year}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>
//                 {/* Gender */}
//                 <h6>Gender</h6>
//                 <Row>
//                   <Col sm={4} className="a1">
//                     <Form.Check
//                       // reverse
//                       label="Male"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-1"
//                       value="male"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "male"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a2">
//                     <Form.Check
//                       // reverse
//                       label="Female"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-2"
//                       value="female"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "female"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                   <Col sm={4} className="a">
//                     <Form.Check
//                       // reverse
//                       label="Custom"
//                       name="gender"
//                       type="radio"
//                       id="reverse-radio-3"
//                       value="custom"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       checked={formik.values.gender === "custom"}
//                       isInvalid={formik.touched.gender && formik.errors.gender}
//                     />
//                   </Col>
//                 </Row>
//                 {formik.touched.gender && formik.errors.gender && (
//                   <Form.Control.Feedback
//                     type="invalid"
//                     style={{ display: "block" }}
//                   >
//                     {formik.errors.gender}
//                   </Form.Control.Feedback>
//                 )}
//                 <p></p>
//                 {/* Password */}
//                 <InputGroup className="mb-3 password-input-group">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter 6 digits password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("password")}
//                     isInvalid={
//                       formik.touched.password && formik.errors.password
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     className="toggle-password-btn"
//                     variant="outline-secondary"
//                     onClick={() => setShowPassword(!showPassword)}
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                       color: "grey",
//                     }}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.password}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Confirm Password */}
//                 <InputGroup className="mb-3 password-input-group">
//                   <Form.Control
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm 6 digits password"
//                     className="x4"
//                     maxLength={6}
//                     {...formik.getFieldProps("confirmPassword")}
//                     isInvalid={
//                       formik.touched.confirmPassword &&
//                       formik.errors.confirmPassword
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                   <Button
//                     className="toggle-password-btn"
//                     variant="outline-secondary"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     style={{
//                       border: "none",
//                       backgroundColor: "white",
//                       marginLeft: "5px",
//                       marginTop: "-10px",
//                       color: "grey",
//                     }}
//                   >
//                     {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                   </Button>
//                   <Form.Control.Feedback type="invalid">
//                     {formik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 {/* Submit Button */}
//                 <button className="z10" type="submit">
//                   Sign Up
//                 </button>
//                 <br />
//                 {/* Already have an account? */}
//                 <p style={{ marginBottom: "-2px" }} className="or">
//                   or
//                 </p>
//                 <div className="text-center">
//                   <button
//                     type="button"
//                     className="z10"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col sm={4}></Col>
//       </Row>
//       <br />
//       <br />
//       <br />

//       {/* OTP Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="formOtp">
//             <Form.Label style={{ color: "black" }}>Enter OTP:</Form.Label>
//             <Form.Control
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength={6}
//             />
//             {otpError && <p style={{ color: "red" }}>{otpError}</p>}
//           </Form.Group>
//           <button
//             className="verifyotpbut"
//             variant="primary"
//             onClick={verifyOtp}
//           >
//             Verify OTP
//           </button>
//           <div>
//             {canResend ? (
//               <Button
//                 style={{ color: "blue" }}
//                 variant="link"
//                 onClick={handleResendOtp}
//               >
//                 Resend OTP
//               </Button>
//             ) : (
//               <span style={{ color: "black" }}>
//                 Resend OTP in {timer} seconds
//               </span>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             style={{ backgroundColor: "blue" }}
//             variant="secondary"
//             onClick={() => setShowModal(false)}
//           >
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Signup;

//------------------------------------------------------------

//updated one - 26 sep

import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Alert,
  Modal,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const startYear = 1901;
  const endYear = new Date().getFullYear();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const [canResend, setCanResend] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  let [username, setUsername] = useState(sessionStorage.getItem("username"));
  let [email, setEmail] = useState(sessionStorage.getItem("email"));
  console.log(username, email);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  let [allpoll, setAllpoll] = useState([]);
  useEffect(() => {
    axios.get("http://49.204.232.254:64/api/getall").then((res) => {
      console.log(res.data.users);
      setAllpoll(res.data);
      console.log(allpoll);
    });
  }, []);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      day: "",
      month: "",
      year: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
      .min(3, "First name must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "First name should only contain alphabets")
      .required("First name is required"),
    lastname: Yup.string()
      .min(1, "Last name is required")
      .matches(/^[A-Za-z\s]+$/, "Last name should only contain alphabets")
      .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .test("email", "Invalid email", function (value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        }),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      day: Yup.string().required("Day is required"),
      month: Yup.string().required("Month is required"),
      year: Yup.string().required("Year is required"),
      gender: Yup.string().required("Gender is required"),
      password: Yup.string()
        .matches(/^\d{6}$/, "Must be 6 digits")
        .min(6, "Password must be at 6 digits")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(otpVerified);
      let existingemail = allpoll.users.some((item) => item.email == formik.values.email);
      console.log(existingemail)
      let existingphonenumber=allpoll.users.some(item=>item.phone_number==formik.values.phone)
      console.log(existingphonenumber)
    //   if (otpVerified) {
    //     if(existingemail || existingphonenumber){
    //            if(existingemail || existingphonenumber)
    //            {
    //             alert("Already an user")
    //             navigate("/Loginpg");
    //            }
    //            else{
    //             handleSignup(values);
    //            }
    //     }
    //     // else{
    //     //        handleSignup(values);
    //     // }
       
    //   } else {
    //     setOtpError("Please verify OTP.");
    //   }
    // },
    if (otpVerified) {
      if (existingemail || existingphonenumber) {
        alert("Already a user");
        navigate("/Loginpg"); 
      } else {
        handleSignup(values);
      }
    } else {
      setOtpError("Please verify OTP.");
    }
  },
  });

//   validateOnBlur: true,
//   onSubmit: async (values) => {
//     try {
//       const response = await axios.post("http://49.204.232.254:64/api/createuser", {
//         email: formik.values.email,
//        phone_number: formik.values.phone,
//       });
//       console.log(response);
      

//       if (response.data.message="User already exists") {
//         console.log("existing user")
//         alert("Already an user")
//         navigate("/Loginpg");
//         if (response.data.emailExists) {
//           formik.setFieldError('email', 'This email is already registered');
//         }
//         if (response.data.phoneExists) {
//           formik.setFieldError('phone', 'This phone number is already registered');
//         }
//       } else {
//         if (otpVerified) {
//           handleSignup(values);
//         } else {
//           setOtpError("Please verify OTP.");
//         }
//       }
//     } catch (error) {
//       console.error("Error checking email/phone:", error);
//       alert("Error occurred while checking email/phone. Please try again.");
//     }
//   },
// });

  const handleSignup = (values) => {
    console.log("signup");
    let dob = new Date(
      formik.values.year,
      formik.values.month - 1,
      formik.values.day
    );

    console.log(formik.values.year);
    console.log(dob);
    const formattedDate = new Date(dob);
    console.log("Formatted Date:", formattedDate);

    let currentdate = new Date();
    let age1 = currentdate.getFullYear() - dob.getFullYear();
    let formattedDob = dob.toISOString().split("T")[1];
    console.log(formattedDob);

    let newphone = parseInt(formik.values.phone);
    let signupdata = {
      user_name: `${formik.values.firstname} ${formik.values.lastname}`,
      email: formik.values.email,
      phone_number: formik.values.phone,
      gender: formik.values.gender,
      age: age1,
      password: formik.values.password,
      // dob: formattedDob,
    };
    console.log(signupdata);

    axios
      .post("http://49.204.232.254:64/api/createuser", signupdata)
      .then((response) => {
        alert("Created successfully");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/Loginpg");
        }, 1500);
      })
      .catch((error) => {
        console.error(
          "Error during signup:",
          error.response ? error.response.data : error.message
        );
        alert("Signup failed. Please try again.");
      });
  };

  const sendOtp = async () => {
    if (formik.values.phone && !formik.errors.phone) {
      try {
        const response = await fetch(
          "http://49.204.232.254:64/mobileauth/send-otp-sms",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ number: formik.values.phone }),
          }
        );

        if (response.ok) {
          console.log("OTP sent successfully");
          setOtpSent(true);
          setTimer(40); // Reset the timer
          setCanResend(false); // Disable the resend button
          setShowModal(true); // Open OTP Modal
        } else {
          console.error("Failed to send OTP");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    } else {
      setOtpError("Please enter a valid phone number first.");
    }
  };

  const verifyOtp = async () => {
    try {
      console.log(otp);
      const response = await axios.post(
        "http://49.204.232.254:64/mobileauth/verify-otp-sms",
        {
          number: formik.values.phone,
          otp: otp,
        }
      );

      if (response.status == 200) {
        setOtpVerified(true);
        setOtpError("");
        setShowModal(false);
      } else {
        setOtpError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setOtpError("Error verifying OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    sendOtp();
  };

  const handleLoginClick = () => {
    navigate("/Loginpg");
  };

  return (
    <div className="signup-container">
      <br />
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Card className="x1">
            <Card.Header>
              <Row>
                <Col sm={11}>
                  <div className="text-center">
                    <h3 style={{ textAlign: "center" }} className="x2">
                      Create your account
                    </h3>
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert
                  variant="success"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  Sign up successful!
                </Alert>
              )}
              <Form onSubmit={formik.handleSubmit}>
                    {/* Firstname */}
         <div>   
          <Row>  
            <Col sm={6}>          
        <Form.Control
          type="text"
          placeholder="Enter first name"
          {...formik.getFieldProps("firstname")}
          isInvalid={formik.touched.firstname && formik.errors.firstname}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstname}
        </Form.Control.Feedback>
        </Col>

        {/* Lastname */}
        <Col sm={6}>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          {...formik.getFieldProps("lastname")}
          isInvalid={formik.touched.lastname && formik.errors.lastname}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastname}
        </Form.Control.Feedback>
        </Col>
        </Row>
        </div>
                {/* Email */}
                <Form.Control
                  type="text"
                  style={{marginTop:"10px"}}
                  placeholder="Email address"
                  className="x4"
                  {...formik.getFieldProps("email")}
                  isInvalid={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
                {/* Phone */}
                <div className="phone-input-container">
                  <Row>
                    <Col sm={2}>
                      <Form.Control
                        type="text"
                        placeholder="+91"
                        defaultValue="+91"
                        disabled
                        className="x4"
                      />
                    </Col>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Phone number"
                        className="x4"
                        {...formik.getFieldProps("phone")}
                        isInvalid={formik.touched.phone && formik.errors.phone}
                        onBlur={formik.handleBlur}
                        maxLength={10}
                        disabled={otpVerified && !isPhoneEditable} // Enable editing only when "Edit" is clicked
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                      </Form.Control.Feedback>
                    </Col>
                    <Col sm={2}>
                      {" "}
                      {otpVerified && (
                        <div>
                          <span
                            style={{ color: "green" }}
                            className="verified-label"
                          >
                            Verified
                          </span>
                          {/* <span>
                        <button>edit</button>
                      </span> */}
                        </div>
                      )}
                    </Col>
                  </Row>
                </div>
                {/* OTP Verification */}
                {!otpVerified && (
                  <div>
                    {!isPhoneEditable && (
                      <button
                        className="otp-button"
                        type="button"
                        onClick={() => {
                          if (otpSent) {
                            verifyOtp();
                          } else {
                            sendOtp();
                          }
                        }}
                      >
                        {otpSent ? "Verify OTP" : "Send OTP"}
                      </button>
                    )}
                    {/* {otpSent && !otpVerified && (
                      <button
                        className="edit-button"
                        type="button"
                        onClick={() => {
                          setIsPhoneEditable(true); // Enable phone number editing
                          setOtpVerified(false); // Reset OTP verification
                          setOtpSent(false); // Reset OTP sent status
                        }}
                      >
                        Edit
                      </button>
                    )} */}
                  </div>
                )}
                {/* Phone */}
                {/* <div className="phone-input-container">
                  <Row>
                    <Col sm={3}>
                      <Form.Control
                        type="text"
                        placeholder="+91"
                        defaultValue="+91"
                        disabled
                        className="x4"
                      />
                    </Col>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        placeholder="Phone number"
                        className="x4"
                        {...formik.getFieldProps("phone")}
                        isInvalid={formik.touched.phone && formik.errors.phone}
                        onBlur={formik.handleBlur}
                        maxLength={10}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.phone}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  {otpVerified && (
                    <span style={{ color: "green" }} className="verified-label">
                      Verified
                    </span>
                  )}
                </div> */}
                {/* OTP Verification */}
                {/* {!otpVerified && (
                  <button
                    className="otp-button"
                    type="button"
                    onClick={() => {
                      if (otpSent) {
                        verifyOtp();
                      } else {
                        sendOtp();
                      }
                    }}
                  >
                    {otpSent ? "Verify OTP" : "Send OTP"}
                  </button>
                )} */}
                {/* Date of Birth */}
                <h6>Date of Birth</h6>
                <Row>
                  <Col className="x5" sm={4}>
                    <Form.Select
                      aria-label="Select Day"
                      {...formik.getFieldProps("day")}
                      value={formik.values.day}
                      isInvalid={formik.touched.day && formik.errors.day}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Day</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.day}
                    </Form.Control.Feedback>
                  </Col>

                  <Col className="x5" sm={4}>
                    <Form.Select
                      aria-label="Select Month"
                      {...formik.getFieldProps("month")}
                      value={formik.values.month}
                      isInvalid={formik.touched.month && formik.errors.month}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {new Date(0, i).toLocaleString("en-US", {
                            month: "short",
                          })}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.month}
                    </Form.Control.Feedback>
                  </Col>

                  <Col className="x5" sm={4}>
                    <Form.Select
                      aria-label="Select Year"
                      {...formik.getFieldProps("year")}
                      value={formik.values.year}
                      isInvalid={formik.touched.year && formik.errors.year}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Year</option>
                      {Array.from(
                        { length: endYear - startYear + 1 },
                        (_, i) => (
                          <option key={i} value={endYear - i}>
                            {endYear - i}
                          </option>
                        )
                      )}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.year}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                {/* Gender */}
                <h6>Gender</h6>
                <Row>
                  <Col sm={4} className="a1">
                    <Form.Check
                      // reverse
                      label="Male"
                      name="gender"
                      type="radio"
                      id="reverse-radio-1"
                      value="male"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === "male"}
                      isInvalid={formik.touched.gender && formik.errors.gender}
                    />
                  </Col>
                  <Col sm={4} className="a2">
                    <Form.Check
                      // reverse
                      label="Female"
                      name="gender"
                      type="radio"
                      id="reverse-radio-2"
                      value="female"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === "female"}
                      isInvalid={formik.touched.gender && formik.errors.gender}
                    />
                  </Col>
                  <Col sm={4} className="a">
                    <Form.Check
                      // reverse
                      label="Custom"
                      name="gender"
                      type="radio"
                      id="reverse-radio-3"
                      value="custom"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === "custom"}
                      isInvalid={formik.touched.gender && formik.errors.gender}
                    />
                  </Col>
                </Row>
                {formik.touched.gender && formik.errors.gender && (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {formik.errors.gender}
                  </Form.Control.Feedback>
                )}
                <p></p>
                {/* Password */}
                <InputGroup className="mb-3 password-input-group">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter 6 digits password"
                    className="x4"
                    maxLength={6}
                    {...formik.getFieldProps("password")}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                    onBlur={formik.handleBlur}
                  />
                  <Button
                    className="toggle-password-btn"
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      marginLeft: "5px",
                      marginTop: "-10px",
                      color: "grey",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </InputGroup>
                {/* Confirm Password */}
                <InputGroup className="mb-3 password-input-group">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm 6 digits password"
                    className="x4"
                    maxLength={6}
                    {...formik.getFieldProps("confirmPassword")}
                    isInvalid={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    onBlur={formik.handleBlur}
                  />
                  <Button
                    className="toggle-password-btn"
                    variant="outline-secondary"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      marginLeft: "5px",
                      marginTop: "-10px",
                      color: "grey",
                    }}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </InputGroup>
                {/* Submit Button */}
                <button className="z10" type="submit">
                  Sign Up
                </button>
                <br />
                {/* Already have an account? */}
                <p style={{ marginBottom: "-2px" }} className="or">
                  or
                </p>
                <div className="text-center">
                  <button
                    type="button"
                    className="z10"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}></Col>
      </Row>
      <br />
      <br />
      <br />

      {/* OTP Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formOtp">
            <Form.Label style={{ color: "black" }}>Enter OTP:</Form.Label>
            <Form.Control
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
            />
            {otpError && <p style={{ color: "red" }}>{otpError}</p>}
          </Form.Group>
          <button
            className="verifyotpbut"
            variant="primary"
            onClick={verifyOtp}
          >
            Verify OTP
          </button>
          <div>
            {canResend ? (
              <Button
                style={{ color: "blue" }}
                variant="link"
                onClick={handleResendOtp}
              >
                Resend OTP
              </Button>
            ) : (
              <span style={{ color: "black" }}>
                Resend OTP in {timer} seconds
              </span>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "blue" }}
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;