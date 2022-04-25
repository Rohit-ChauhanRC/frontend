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
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";

const isAuth = false;
const user = {
  activated: false,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <GuestRoute>
                <Home />
              </GuestRoute>
            }
          ></Route>

          <Route
            path="/authenticate"
            element={
              <GuestRoute>
                <Authenticate />
              </GuestRoute>
            }
          />

          <Route
            path="/activate"
            element={
              <SemiProtectedRoute>
                <Activate />
              </SemiProtectedRoute>
            }
          />
          <Route
            path="/rooms"
            element={
              <ProtectedRoute>
                <Rooms />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation();

  return isAuth ? (
    <Navigate to="/rooms" replace state={{ from: location }} />
  ) : (
    children
  );
};

const SemiProtectedRoute = ({ children }) => {
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" replace state={{ from: location }} />
  ) : isAuth && !user.activated ? (
    children
  ) : (
    <Navigate to="/rooms" replace state={{ from: location }} />
  );
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" replace state={{ from: location }} />
  ) : isAuth && !user.activated ? (
    <Navigate to="/activate" replace state={{ from: location }} />
  ) : (
    children
  );
};

export default App;
