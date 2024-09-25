import React, { useState, useEffect } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Pollresults() {
  const [votedPolls, setVotedPolls] = useState([]); // State to hold voted polls data

  // Fetch voted polls when the component mounts
  useEffect(() => {
    axios.get('http://49.204.232.254:64/polls/getvoted')
      .then(response => {
        setVotedPolls(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('There was an error fetching the voted polls!', error);
      });
  }, []);

  return (
    <>
      {votedPolls && votedPolls.length > 0 ? (
        votedPolls.map((poll, index) => (
          <Card className="m-3" key={index}>
            <Card.Body>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>{poll.creator || 'User Name'}</h6>
                  <p>Created: {poll.createdAt || 'N/A'}</p>
                  <p>Title: {poll.title || 'Undefined'}</p>
                  <p>Status: {poll.status || 'Closed'}</p>
                </div>
                <Button variant="secondary">Follow</Button>
              </Card.Header>

              <Card.Text className="mt-3 mb-3">{poll.question || 'Poll Question'}</Card.Text>

              {poll.options && poll.options.map((option, i) => (
                <Button key={i} variant="secondary" className="mb-3">
                  {option.text || 'Sample'}
                </Button>
              ))}

              <Card className="mb-3">
                <Card.Body>
                  <Card.Header className="d-flex justify-content-between">
                    <p>{poll.totalVotes || 0} votes</p>
                    <p>{poll.isEnded ? 'Poll Ended!' : 'Poll Ongoing'}</p>
                  </Card.Header>
                  <Card.Text>
                    {poll.options && poll.options.map((option, i) => (
                      <div className="mb-2" key={i}>
                        <ProgressBar
                          now={(option.votes / poll.totalVotes) * 100 || 0}
                          label={`${option.votes || 0} ${option.text || ''}`}
                          variant="info"
                        />
                      </div>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
                    
              <Card.Footer className="d-flex justify-content-between">
                <p>
                  <i className="bi bi-heart"></i> {poll.likes || 0} Likes
                </p>
                <Button variant="primary">Comments</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No voted polls available.</p>
      )}
    </>
  );
}

export default Pollresults;





// import React, { useState, useEffect } from 'react';
// import { Card, Button, ProgressBar } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from 'axios';

// function Pollresults() {
//   const [polls, setPolls] = useState([]);

//   useEffect(() => {
//     // Fetch voted polls from the API
//     axios.post('http://49.204.232.254:64/polls/getvoted')
//       .then(response => {
//         setPolls(response.data); // Assuming the API returns an array of polls
//       })
//       .catch(error => {
//         console.error('Error fetching the polls:', error);
//       });
//   }, []);

//   return (
//     <>
//       {polls.map((poll, index) => (
//         <Card className="m-3" key={index}>
//           <Card.Body>
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <div>
//                 <h6>{poll.createdBy}</h6>
//                 <p>Created: {poll.createdAt}</p>
//                 <p>Title: {poll.title || 'No Title'}</p>
//                 <p>Status: {poll.status}</p>
//               </div>
//               <Button variant="secondary">Follow</Button>
//             </Card.Header>

//             <Card.Text className="mt-3 mb-3">{poll.question}</Card.Text>

//             {poll.options.map((option, idx) => (
//               <div className="mb-2" key={idx}>
//                 <ProgressBar
//                   now={option.votePercentage} 
//                   label={`${option.votePercentage}% ${option.optionText}`}
//                   variant={option.votePercentage > 0 ? "info" : "secondary"}
//                 />
//               </div>
//             ))}

//             <Card.Footer className="d-flex justify-content-between">
//               <p>
//                 <i className="bi bi-heart"></i> {poll.likes} Likes
//               </p>
//               <Button variant="primary">Comments</Button>
//             </Card.Footer>
//           </Card.Body>
//         </Card>
//       ))}
//     </>
//   );
// }

// export default Pollresults;
