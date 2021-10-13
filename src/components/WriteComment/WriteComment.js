import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./writeComment.css";

export default function WriteComment(props) {
  return (
    <div className="write-Comment-section">
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar alt={props.alt} src="/static/images/avatar/1.jpg" />
        </Stack>
      </div>
      <div className="write-username-section">
        <input className="input-field" placeholder="Write a comment" />
      </div>
    </div>
  );
}
