import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Card,
  Button,
  ProgressBar,
  Overlay,
  Popover,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { BsBack } from "react-icons/bs";
import axios from "axios";
import { PageContext } from "../../App";

function CommentsComp() {
  const [liked, setLiked] = useState(false); // State for likes
  const [likeCount, setLikeCount] = useState(0); // State for likes count
  const [newComment, setNewComment] = useState(""); // State for new comment input
  const [selectedOption, setSelectedOption] = useState(null); // State for selected option
  const [showOverlay, setShowOverlay] = useState(false); // State for showing the share overlay
  const target = useRef(null); // Reference for the share button
  const [onepoll, setOnepoll] = useState({}); // State for poll data
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage, pollid, setPollid] = useContext(PageContext);

  useEffect(() => {
    axios
      .post("http://92.205.109.210:8028/polls/getone", {
        poll_id: pollid,
      })
      .then((res) => {
        console.log(res.data);
        setOnepoll(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load poll data");
        setLoading(false);
      });
  }, [pollid]);

  const handleOptionChange = (index) => {
    if (selectedOption === index) {
      unselectOption(); // Unselect the option if it's already selected
    } else {
      setSelectedOption(index); // Select the option
    }
  };

  const unselectOption = () => {
    setSelectedOption(null); // Unselect the currently selected option
  };

  const onBackClick = () => {
    window.location.href = "/Homepage";
  };

  const toggleLike = () => {
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLiked(!liked);
  };

  const handleLike = () => {
    axios
      .post("http://92.205.109.210:8028/polls/likeonpoll", {
        poll_id: onepoll._id,
        user_id: onepoll.createdBy?._id,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Button onClick={onBackClick} variant="secondary" className="mb-3">
            <BsBack /> Back to All Polls
          </Button>

          <Card.Header className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Name: {onepoll.createdBy?.user_name || "Unknown"}</h6>
              <p>Created At: {onepoll.createdAt}</p>
              <p>Expiration Time: {onepoll.expirationTime}</p>
              <p>Question: {onepoll.question}</p>
              <p>Status: {onepoll.status}</p>
            </div>
            <Button variant="primary">Follow</Button>
          </Card.Header>

          <Card.Text>
            <Card className="mb-3">
              <Card.Body>
                <Card.Header className="d-flex justify-content-between">
                  <p>Poll Ends on {onepoll.expirationTime}</p>
                </Card.Header>
                <Card.Text className="d-flex flex-column">
                  <div>
                    {onepoll.options?.length > 0 ? (
                      onepoll.options.map((option, index) => (
                        <div key={index}>
                          {selectedOption === index ? (
                            <ProgressBar
                              now={100}
                              label={option}
                              onClick={unselectOption}
                              style={{ cursor: "pointer" }}
                            />
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
                      ))
                    ) : (
                      <p>No options available</p>
                    )}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Text>

          <Card.Footer className="d-flex justify-content-between">
            <p>
              <button
                onClick={toggleLike}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={liked ? solidHeart : regularHeart}
                  style={{ color: liked ? "red" : "gray", fontSize: "24px" }}
                  onClick={handleLike}
                />
              </button>
              <span style={{ marginLeft: "8px" }}>{likeCount}</span> like
            </p>

            <p ref={target} style={{ cursor: "pointer" }}>
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
                  </div>
                </Popover.Body>
              </Popover>
            </Overlay>
          </Card.Footer>

          <Card.Text>
            <h6>Comments:</h6>
            <Form inline className="mt-3">
              <Form.Control
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button variant="primary">Add Comment</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CommentsComp;
