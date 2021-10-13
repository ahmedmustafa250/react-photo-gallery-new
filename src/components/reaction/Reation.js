import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import "./reaction.css";
import likeIcon from "../../images/like.png"
import thumbup from "../../images/thumb-up.png"
import { useState } from "react";
import Button from "../button/Button"
import ShareButton from "../sharebutton/ShareButton"


export default function Reaction() {
  const [like, setLikestate] = useState(false)

  const src=like ? thumbup : likeIcon

  function change(){
    console.log("Chal raha hoon")
    setLikestate(!like);
  }

  

  return (
    <div>
      <div className="like-comment">
        <div>
          <h4>225 Like</h4>
        </div>
        <div>
          <h4>30 Comments</h4>
        </div>
      </div>

      <div className="reaction-top">
        <div>
          <img width="23px"  hight="50px" src={src}/>
          <span className="like-comment-share" onClick={change}>Like</span>{" "}
        </div>
        <div>
          <CommentIcon />
          <span className="like-comment-share">Comments</span>
        </div>
        <div style={{display:'flex'}}>
          <ScreenShareIcon />
          <span className="like-comment-share" >
              <ShareButton text="share"  />
          </span>
          
        </div>
      </div>
    </div>
  );
}
