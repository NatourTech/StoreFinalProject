import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div className="catagories">
      {/* cat 1 */}

      <Link to="/office-products/" className="homeScreen-link">
        <div className="cat 1">
          <img src="\images\categories\office.jpg" alt="catogry"></img>
          <h1 className="cat-name">ציוד משרדי</h1>
        </div>
      </Link>

      {/* cat 2 */}
      <Link to="/office-products/" className="homeScreen-link">
        <div className="cat 1">
          <img src="\images\categories\office.jpg" alt="catogry"></img>
          <h1 className="cat-name">ציוד משרדי</h1>
        </div>
      </Link>

      {/* cat 3 */}
      <Link to="/office-products/" className="homeScreen-link">
        <div className="cat 1">
          <img src="\images\categories\office.jpg" alt="catogry"></img>
          <h1 className="cat-name">ציוד משרדי</h1>
        </div>
      </Link>

      {/* cat 4 */}
      <Link to="/office-products/" className="homeScreen-link">
        <div className="cat 1">
          <img src="\images\categories\office.jpg" alt="catogry"></img>
          <h1 className="cat-name">ציוד משרדי</h1>
        </div>
      </Link>

      {/* cat 5 */}
      <Link to="/office-products/" className="homeScreen-link">
        <div className="cat 1">
          <img src="\images\categories\office.jpg" alt="catogry"></img>
          <h1 className="cat-name">ציוד משרדי</h1>
        </div>
      </Link>

      {/* cat 6 */}
      <Link to="/office-products/" className="homeScreen-link">
        <div className="cat 1">
          <img src="\images\categories\office.jpg" alt="catogry"></img>
          <h1 className="cat-name">ציוד משרדי</h1>
        </div>
      </Link>
    </div>
  );
}

export default HomeScreen;
