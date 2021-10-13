import Button from "../button/Button.js";
import "./comment.css";
import CommentAvator from "../commentAvator/CommentAvator";
import WriteComment from "../WriteComment/WriteComment";

export default function Comment() {
  return (
    <div>
      <div className="revelant">
        <Button text="Revelant Comments " />
      </div>

      <div className="Comment-section">
        <div>
          <CommentAvator
            alt="hamza"
            comment="Tremendous"
            src="/static/images/avatar/1.jpg"
          />
          <CommentAvator
            alt="Ali"
            comment="good hogya"
            src="/static/images/avatar/2.jpg"
          />
          <CommentAvator
            alt="Ali"
            comment="good hogya"
            src="/static/images/avatar/3.jpg"
          />
          <CommentAvator
            alt="Rizwan"
            comment="excellent"
            src="/static/images/avatar/1.jpg"
          />

          <WriteComment alt="Ahmed mustafa" />
        </div>
      </div>
    </div>
  );
}
