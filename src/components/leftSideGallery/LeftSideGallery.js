import BadgeAvatars from "../avator/Avator.js";
import EditButton from "../editbutton/Editbutton";
import Reaction from "../reaction/Reation";
import Comment from "../comments/Comment";

export default function LeftSideGallery() {
  return (
    <div
      style={{ backgroundColor: "whitesmoke", width: "80%", padding: "20px" }}
    >
      <BadgeAvatars alt="Ahmed Mustafa" Date="June 18 2021" />
      <EditButton />
      <Reaction />
      <Comment />
    </div>
  );
}
