// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from '../../dummy-data';

dummyData.map((CommentsData) => {
  console.log(CommentsData);
})

const CommentSection = props => {
  // Add state for the comments
  const [Comments, setComment] = useState({});
  
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/* {dummyData.map((CommentsData) => {
       return <Comment props={CommentsData}/>
      })} */}
      <CommentInput />
    </div>
  );
};
export default CommentSection;
