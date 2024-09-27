// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import CardComp from "./Common/Card";

// function Polllist() {

//   let polls = [
//     {
//       name: "Rahul",
//       createdon: "3 hrs",
//       title: "test1",
//       status: "status1",
//     },
//     {
//       name: "Rahul 2",
//       createdon: "4 hrs",
//       title: "test2",
//       status: "status2",
//     },
//     {
//       name: "Rahul 3",
//       createdon: "5hrs",
//       title: "test3",
//       status: "status3",
//     },
//   ];

//   return (
//     <>
//       <>

//       </>
//       {polls.map((poll) => {
//         return (
//           <CardComp
//            name={poll.name}
//             createdon={poll.createdon}
//             title={poll.title}
//             status={poll.status}
//           />
//         );
//       })}
//       <Card className='polllist-card'>
//     <Card.Body>
//       <Card.Header>
//         <div>
//           <h6>Rahul</h6>
//           <p>Created: 3 hours ago</p>
//           <p>Title: testing</p>
//           <p>Status: open</p>
//         </div>
//         <Button variant="primary">Follow</Button>
//       </Card.Header>

//       <Card.Text>
//         <div className="mt-3 mb-3">test</div>
//         <Card className="mb-3">
//           <Card.Body>
//             <Card.Header className="d-flex justify-content-between">
//               <p>0 Votes</p>
//               <p>Poll Ends in 9 days</p>
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
//           <i className="bi bi-heart"></i> like
//         </p>
//         <p>
//           <i className="bi bi-chat-quote-fill"></i> Comments
//         </p>
//         <p>
//           <i className="bi bi-share"></i> Share
//         </p>
//       </Card.Footer>
//     </Card.Body>
//   </Card>

//       <Card>
//         <Card.Body>
//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               <h6>Rahul</h6>
//               <p>Created: 3 hours ago</p>
//               <p>Title: testing</p>
//               <p>Status: open</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>

//           <Card.Text>
//             <div className="mt-3 mb-3">test</div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>0 Votes</p>
//                   <p>Poll Ends in 9 days</p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option1"
//                       name="options"
//                       value="op1"
//                     />
//                     <label className="form-check-label" htmlFor="option1">
//                       op1
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option2"
//                       name="options"
//                       value="op2"
//                     />
//                     <label className="form-check-label" htmlFor="option2">
//                       op2
//                     </label>
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <i className="bi bi-heart"></i> like
//             </p>
//             <p>
//               <i className="bi bi-chat-quote-fill"></i> Comments
//             </p>
//             <p>
//               <i className="bi bi-share"></i> Share
//             </p>
//           </Card.Footer>
//         </Card.Body>
//       </Card>

//       <Card>
//         <Card.Body>
//           <Card.Header className="d-flex justify-content-between align-items-center">
//             <div>
//               <h6>Sanjay</h6>
//               <p>Created: 3 hours ago</p>
//               <p>Title: testing</p>
//               <p>Status: open</p>
//             </div>
//             <Button variant="primary">Follow</Button>
//           </Card.Header>

//           <Card.Text>
//             <div className="mt-3 mb-3">test</div>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Header className="d-flex justify-content-between">
//                   <p>0 Votes</p>
//                   <p>Poll Ends in 9 days</p>
//                 </Card.Header>
//                 <Card.Text className="d-flex flex-column">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option1"
//                       name="options"
//                       value="op1"
//                     />
//                     <label className="form-check-label" htmlFor="option1">
//                       op1
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="option2"
//                       name="options"
//                       value="op2"
//                     />
//                     <label className="form-check-label" htmlFor="option2">
//                       op2
//                     </label>
//                   </div>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Card.Text>

//           <Card.Footer className="d-flex justify-content-between">
//             <p>
//               <i className="bi bi-heart"></i> like
//             </p>
//             <p>
//               <i className="bi bi-chat-quote-fill"></i> Comments
//             </p>
//             <p>
//               <i className="bi bi-share"></i> Share
//             </p>
//           </Card.Footer>
//         </Card.Body>
//       </Card>

//     </>
//   );
// }

// export default Polllist;

//----------------------------------------------  v2----------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import CardComp from "./Common/Card";

// function Polllist() {
//   const [polls, setPolls] = useState([]);

//   useEffect(() => {
//     // Retrieve data from sessionStorage
//     const title = sessionStorage.getItem('pollTitle');
//     const question = sessionStorage.getItem('pollQuestion');
//     const options = JSON.parse(sessionStorage.getItem('pollOptions'));
//     const votingPeriod = sessionStorage.getItem('votingPeriod');
//     const category = sessionStorage.getItem('category');

//     // Add the new poll to the polls array
//     setPolls((prevPolls) => [
//       ...prevPolls,
//       {
//         name: "New Poll",
//         createdon: "Just now",
//         title: title,
//         question: question,
//         options: options,
//         votingPeriod: votingPeriod,
//         category: category,
//         status: "Open", // You can add logic to update status based on your requirements
//       },
//     ]);
//   }, []);

//   return (
//     <>
//       {polls.map((poll, index) => (
//         <CardComp
//           key={index}
//           name={poll.name}
//           createdon={poll.createdon}
//           title={poll.title}
//           status={poll.status}
//         />
//       ))}
//     </>
//   );
// }

// export default Polllist;

//------------------------------------------------------------- V3 -------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import CardComp from "./Common/Card"; // Make sure this imports your Card component
// import "bootstrap/dist/css/bootstrap.min.css";
// import CommentsComp from "./Common/CommentsComp";

// function Polllist() {
//   console.log(sessionStorage.getItem("polls"))
//   const [polls, setPolls] = useState([]);
//   // const [currentView, setCurrentView] = useState("cards");
//   // const [selectedCardData, setSelectedCardData] = useState(null);

//   useEffect(() => {
//     // Retrieve all polls from session storage
//     const storedPolls = JSON.parse(sessionStorage.getItem("polls")) || [];
//     setPolls(storedPolls);
//   }, []);

//   const handlePollSubmit = (newPoll) => {
//     // Update the polls state with the new poll added at the top
//     setPolls((prevPolls) => [newPoll, ...prevPolls]);

//     // Also update the session storage if needed
//     sessionStorage.setItem("polls", JSON.stringify([newPoll, ...polls]));
//   };

//   const [currentView, setCurrentView] = useState("cards");
//   console.log(currentView)
//   const [selectedCardData, setSelectedCardData] = useState(null);

//   const handleCardClick = (cardData) => {
//     setSelectedCardData(cardData);
//     setCurrentView("comments");
//     console.log(currentView)
//   };

//   const handleBackClick = () => {
//     setCurrentView("cards");
//   };
//   //following are the functions for the likes and replies for the comment

//   return (
//     <>
//       {/* {polls.map((poll, index) => (
//         <CardComp
//           key={index}
//           index={index}
//           name={poll.name}
//           createdon={poll.createdon}
//           title={poll.pollTitle}
//           question={poll.pollQuestion}
//           options={poll.pollOptions}
//           votingPeriod={poll.votingPeriod}
//           category={poll.category}
//           status={poll.status}
//           onPollSubmit={handlePollSubmit}
//           onCardClick={handleCardClick}
//         />
//       ))} */}
//       {currentView === "cards" ? (
//         polls.map((poll, index) => (
//           <CardComp
//             key={index}
//             index={index}
//             name={poll.name}
//             createdon={poll.createdon}
//             title={poll.pollTitle}
//             status={poll.status}
//             question={poll.pollQuestion}
//             options={poll.pollOptions}
//             votingPeriod={poll.votingPeriod}
//             category={poll.category}
//             onPollSubmit={handlePollSubmit}
//             onCardClick={handleCardClick} // Pass the handleCardClick function
//           />
//         ))
//       ) : (
//         <CommentsComp
//           cardData={selectedCardData}
//           onBackClick={handleBackClick} // Handle the back button click
//         />
//       )}

//     </>
//   );
// }

// export default Polllist;
//------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComp from "./Common/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsComp from "./Common/CommentsComp";
import CategoryComp from "./Common/CategoryComp";

function Polllist({ page, polls, setPolls, setPage, selectedCategory }) {
  console.log(selectedCategory);
  console.log(page);
  // const [polls, setPolls] = useState([]);
  const [filteredPolls, setFilteredPolls] = useState([]);
  const [currentView, setCurrentView] = useState("cards");
  const [selectedCardData, setSelectedCardData] = useState(null);
  let userId =
  sessionStorage.getItem("loginuserId") ||
  sessionStorage.getItem("googleuserId");
console.log("userId:", userId);
  //   console.log(selectedCategory._id)
  // console.log(selectedCategory)
 

  // let fetselectedcategory=async()=>{
  // if (selectedCategory ) {
  // console.log("fetch cagegory")
  //   console.log("Selected Category:", selectedCategory);

  //   const filteredCategory =  polls.filter((poll) =>
  //     poll.category.some((cat) => cat._id === selectedCategory._id)
  //   );
  //   console.log("Filtered Polls:", filteredCategory);
  // setFilteredPolls(filteredCategory);
  // setPolls(filteredCategory)
  // setPolls(filteredCategory)
  // } else {
  //   fetchPolls()
  // }
  // }

  // useEffect(() => {
  // if (selectedCategory && polls.length > 0) {
  // if (selectedCategory ) {
  // console.log("Selected Category:", selectedCategory);

  // const filteredCategory = polls.filter((poll) =>
  //   poll.category.some((cat) => cat._id === selectedCategory._id)
  // );
  // console.log("Filtered Polls:", filteredCategory);
  // setFilteredPolls(filteredCategory);
  // setPolls(filteredCategory)
  // setPolls(filteredCategory)
  // } else {
  //   fetchPolls()
  // }
  //     if(selectedCategory){
  //       console.log("fetch cagegory")
  //       console.log("Selected Category:", selectedCategory);

  //       const filteredCategory =  polls.filter((poll) =>
  //         poll.category.some((cat) => cat._id === selectedCategory._id)
  //       );
  //       console.log("Filtered Polls:", filteredCategory);
  //       setPolls(filteredCategory)

  //     }
  //     else if(page=="pollist" || !selectedCategory){
  // fetchPolls()
  //     }

  //     else{
  //       fetchPolls();
  //     }

  //   }, [selectedCategory]);

  const handlePollSubmit = (newPoll) => {
    setPolls((prevPolls) => [newPoll, ...prevPolls]);
    sessionStorage.setItem("polls", JSON.stringify([newPoll, ...polls]));
  };

  const handleCardClick = (cardData) => {
    setSelectedCardData(cardData);
    setCurrentView("comments");
  };

  const handleBackClick = () => {
    setCurrentView("cards");
  };

  return (
    <>
      {currentView === "cards" ? (
        polls.length > 0 &&
        polls.map((poll, index) => (
          <CardComp 
            poll={poll}
            setPolls={setPolls}
            userId={poll.createdBy._id}
            isUserFollowing={poll.createdBy.isFollowing}
            isVoted={poll.createdBy.isVoted}
            // selectedOption={poll.options.option}
            selectedOption={poll.options.map(option => option.option)}
            totalVotes={poll.total_votes}
            key={index}
            index={index}
            pollId={poll.poll_id}
            polltotalVotes={poll.total_votes}
            polluserId={poll.createdBy._id} //need to check this once
            votingPeriod={poll.expirationTime}
            _id={poll._id}
            title={poll.title}
            category={poll.category.map((cat) => cat.category_name).join(", ")}
            question={poll.question}
            options={poll.options.map((opt) => opt.option)}
            optionscount={poll.options.map((opt) => opt.count)}
            status={poll.status}
            createdBy={poll.createdBy.user_name}
            createdAt={poll.createdAt}
            onPollSubmit={handlePollSubmit}
            onCardClick={() => handleCardClick(poll)}
          />
        ))
      ) : (
        polls.map((onepoll,index)=>(
        <CommentsComp

         key={index}
         index={index}
          isUserFollowing={onepoll.createdBy.isFollowing}
          userId={onepoll.createdBy._id}
          createdBy={onepoll.createdBy.user_name}
          polluserId={onepoll.createdBy._id}
          cardData={selectedCardData}
          onBackClick={handleBackClick}
        />
        ))
      )}
    </>
  );
}

export default Polllist;
