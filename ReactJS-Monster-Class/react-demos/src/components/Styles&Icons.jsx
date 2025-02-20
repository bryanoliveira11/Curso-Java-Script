import "../index.css";
import { FaUserCircle } from "react-icons/fa";

export default function StylesIcons() {
  return (
    <div>
      <h1>Styles & Icons</h1>
      <div className="icon-card">
        <div className="icon">
          <FaUserCircle />
        </div>
        <h3>username</h3>
      </div>
    </div>
  );
}
