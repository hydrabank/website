import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./componentry/router/Home.jsx";
import Services from "./componentry/router/Services.jsx";
import NotFound from "./componentry/router/404.jsx";
import "./css/Core.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@mui/material";

function App() {
  return (
    <div>
      <div className="Body">
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />

          <footer className="my-32 py-6 px-3 bg-gray-800 hidden md:grid grid-cols-3 static bottom-0">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center">
                <a href="/">
                  <img alt="Hydrabank wave logo" width="65px" src="/assets/img/HydrabankWave.png" />
                </a>
                <a href="/">
                  <h1 className="font-BreezeHeader text-xl px-4 font-bold text-left text-blue-300">Hydrabank</h1>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center" />

            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-x-4">
                <Tooltip title={<span className="font-BreezeText font-bold">Email</span>}>
                  <a href="mailto:hello@danny.works" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </a>
                </Tooltip>
                <Tooltip title={<span className="font-BreezeText font-bold text-blue-300">Hydrabank GitHub</span>}>
                  <a href="https://github.com/hydrabank" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="text-blue-400" size="xl" />
                  </a>
                </Tooltip>
                <Tooltip title={<span className="font-BreezeText font-bold text-red-300">Hydralink GitHub</span>}>
                  <a href="https://github.com/DanningtonSystems" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="text-red-400" size="xl" />
                  </a>
                </Tooltip>
              </div>
            </div>
          </footer>
      </div>
    </div>
  );
}

export default App;
