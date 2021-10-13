import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./commentAvator.css";

export default function CommentAvatars(props) {
  console.log("Src =>", props.src);
  return (
    <div className="Comment-section">
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar alt={props.alt} src={props.src} />
        </Stack>
      </div>
      <div className="username-section">
        <h4 className="username">{props.alt}</h4>
        <p className="user-comment">{props.comment}</p>
      </div>
    </div>
  );
}
