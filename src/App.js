import logo from "./logo.svg";
import "./App.css";

/**LIBRARIES */
import { useAuth0 } from "@auth0/auth0-react";

/**COMPONENTS */
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isAuthenticated ? (
          <Login />
        ) : (
          <div className="Authenticated__user">
            <Profile />
            <Logout />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
