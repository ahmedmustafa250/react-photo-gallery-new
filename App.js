import "./styles.css";
import Photo from "./components/photo/Photo";

export default function App() {
  return (
    <div className="App-main">
      <h1 style={{ textAlign: "center" }}>Photo Gallery</h1>
      <Photo />
    </div>
  );
}
