import React, { useState } from "react";
import axios from 'axios'; // Import Axios
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    // Save comment to the database using Axios
    try {
      const response = await axios.post('http://localhost:5081/api/review/create', { comment: commentInput });
      console.log('Comment saved successfully!', response.data);
    } catch (error) {
      console.error('Error saving comment:', error);
    }

    // Add the new comment to the comments state
    setComments([...comments, { text: commentInput, user: "Current User" }]);
    
    // Clear the comment input field
    setCommentInput("");
  };

  return (
    <section className="gradient-custom vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="text-center mb-4 pb-2">
                  Nested comments section
                </MDBTypography>

                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={commentInput}
                    onChange={handleCommentChange}
                    placeholder="Write a review..."
                  />
                  <button type="submit">Post review</button>
                </form>

                {comments.map((comment, index) => (
                  <div key={index} className="d-flex flex-start mt-4">
                    <MDBCardImage
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      alt="avatar"
                      width="65"
                      height="65"
                    />
                    <div className="flex-grow-1 flex-shrink-1">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-1">
                            {comment.user} <span className="small">- {comment.timeAgo}</span>
                          </p>
                        </div>
                        <p className="small mb-0">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}