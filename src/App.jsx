import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Authenticate from "./pages/Authenticate/Authenticate";

const isAuth = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route
            element={
              <GuestRoute path="/authenticate">
                <Authenticate />
              </GuestRoute>
            }
          /> */}
          <Route
            path="/authenticate"
            element={
              <GuestRoute>
                <Authenticate />
              </GuestRoute>
            }
          />

          {/* <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation();
  // const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? (
    <Navigate to="/rooms" replace state={{ from: location }} />
  ) : (
    children
  );
};

export default App;
