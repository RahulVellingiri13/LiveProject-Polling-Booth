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



import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Alert, Modal, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const startYear = 1901;
  const endYear = 2024;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const [canResend, setCanResend] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
let [username,setUsername]=useState(sessionStorage.getItem("username"))
let [email,setEmail]=useState(sessionStorage.getItem("email"))
console.log(username,email)
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
      name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .matches(/^[A-Za-z\s]+$/, "Name should only contain alphabets and spaces")
      .required("Name is required"),  
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
      if (otpVerified) {
        handleSignup(values);
      } else {
        setOtpError("Please verify OTP.");
      }
    },
  });



  const handleSignup = (values) => {

  ////////////////////////////////////  
    // values.preventDefault();
    // if (isNaN(Date.parse(dob))) {
    //   console.error("Invalid date of birth");
    //   return;
    // }
    // const formattedDate = new Date(dob).toISOString();
    // console.log("Formatted Date:", formattedDate);
  /////////////////////////////////////
  
    let dob = new Date(values.year, values.month - 1, values.day);
    let currentdate = new Date();
    let age1 = currentdate.getFullYear() - dob.getFullYear();
    let formattedDob = dob.toISOString().split("T")[1];

    let signupdata = {
      user_name: values.name,
      e_mail: values.email,
      phno: values.phone,
      gender: values.gender,
      age: age1,
      password: values.password,
      dob: formattedDob,
    };

    axios
    .post("http://92.205.109.210:8028/api/createuser", signupdata)
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
      const response = await fetch("http://92.205.109.210:8028/mobileauth/send-otp-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: formik.values.phone }),
      });

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
    console.log(otp)
    const response = await axios.post("http://92.205.109.210:8028/mobileauth/verify-otp-sms", {
      number: formik.values.phone,
      otp: otp,
    });

    if (response.status==200) {
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
                  <h3 style={{textAlign:"center"}} className="x2">Create your account</h3>
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
                {/* Name */}
                <Form.Control
                  type="text"
                 
                  placeholder="Enter name"
                  className="x3"
                  {...formik.getFieldProps("name")}
                  isInvalid={formik.touched.name && formik.errors.name}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>

                  {/* Email */}
                  <Form.Control
                  type="text"
                
                  placeholder="Email address"
                  className="x4"
                  {...formik.getFieldProps("email")}
                  isInvalid={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>

                   
    Phone
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
    <Col sm={10}>
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
  </Row>
  {otpVerified && (
    <div>
    <span style={{ color: "green" }} className="verified-label">
      Verified
    </span>
    <span>
      <button >edit</button>
    </span>
    </div>
  )}
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
    {otpSent && !otpVerified && (
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
    )}
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
                  <InputGroup style={{width:"450px"}} className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="x4"
                    maxLength={6}
                    {...formik.getFieldProps("password")}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                    onBlur={formik.handleBlur}
                  />
                  <Button
                  style={{border:"none",backgroundColor:"white",color:"grey",marginLeft:"5px",marginTop:"-10px"}}
                    variant="outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </InputGroup>

                  {/* Confirm Password */}
                  <InputGroup style={{width:"450px"}} className="mb-3">
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
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
                  style={{border:"none",backgroundColor:"white",color:"grey",marginLeft:"5px",marginTop:"-10px"}}
                    variant="outline-secondary"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </InputGroup>

                  {/* Submit Button */}
                  <button className="z10" type="submit"  onClick={handleSignup}>
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

       {/* OTP Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formOtp">
            <Form.Label style={{color:"black"}}>Enter OTP:</Form.Label>
            <Form.Control
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
            />
            {otpError && <p style={{ color: "red" }}>{otpError}</p>}
          </Form.Group>
          <button className="z10" variant="primary" onClick={verifyOtp}>
            Verify OTP
          </button>
          <div>
            {canResend ? (
              <Button style={{color:"blue"}} variant="link" onClick={handleResendOtp}>
                Resend OTP
              </Button>
            ) : (
              <span style={{color:"black"}}>Resend OTP in {timer} seconds</span>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:"blue"}} variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default Signup;
