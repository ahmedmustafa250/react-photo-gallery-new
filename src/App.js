import "./styles.css";
import Photo from "./components/photo/Photo";
// import LeftSideGallery from "./components/leftSideGallery/LeftSideGallery"
// import BadgeAvatars from "./components/avator/Avator";
// import EditButton from "./components/editbutton/Editbutton";
// import Reaction from "./components/reaction/Reation";
// import Comment from "./components/comments/Comment";

export default function App() {
  return (
    <div className="App-main">
      <h1 style={{ textAlign: "center" }}>Photo Gallery</h1>
      <Photo />
    </div>
  );
}
