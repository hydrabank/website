import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./componentry/router/Home.jsx";
import "./css/Core.css";
function App() {
  return (
    <div>
      <div className="Body">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
