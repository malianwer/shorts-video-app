import "./App.css";
import ShortContainer from "./components/ShortContainer";

import { FaHome, FaSearch, FaFlag } from "react-icons/fa";
import {
  IoPlanet,
  IoVideocam,
  IoPeople,
  IoSettings,
  IoChatbox,
  IoPersonCircle,
} from "react-icons/io5";
import { IoIosHelpCircle, IoMdNotifications } from "react-icons/io";

import logo from "./assets/images/logo.png";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav">
          <div className="logo-container">
            <img src={logo} className="logo" alt="" />
          </div>

          <div className="search-container">
            <input type="text" className="search" placeholder="Search videos" />
            <span></span>
            <button>
              <FaSearch />
            </button>
          </div>

          <ul>
            <li>
              <IoMdNotifications size={30} color="white" />
            </li>
            <li>
              <IoPersonCircle size={30} color="white" />
              {/* <img
                src="https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                alt=""
              /> */}
            </li>
          </ul>
        </div>
      </nav>
      <main className="main">
        <aside>
          <ul className="user-nav">
            <li className="active">
              <FaHome className="icon-mr" color="white" />
              <span>For You</span>
            </li>
            <li className="not-active">
              <IoPlanet className="icon-mr" color="white" />
              <span>Explore</span>
            </li>
            <li className="not-active">
              <IoVideocam className="icon-mr" color="white" />
              <span>Live</span>
            </li>
            <li className="not-active">
              <IoPeople className="icon-mr" color="white" />
              <span>Following</span>
            </li>
          </ul>
          <ul className="nav-help">
            <li className="not-active">
              <IoSettings className="icon-mr" color="white" />
              <span>Settings</span>
            </li>
            <li className="not-active">
              <IoIosHelpCircle className="icon-mr" color="white" />
              <span>Help</span>
            </li>
            <li className="not-active">
              <FaFlag className="icon-mr" color="white" />
              <span>Report</span>
            </li>
            <li className="not-active">
              <IoChatbox className="icon-mr" color="white" />
              <span>Feedback</span>
            </li>
          </ul>

          <footer>
            <small>© 2024</small>
          </footer>
        </aside>
        <ShortContainer />
      </main>
    </div>
  );
}

export default App;
