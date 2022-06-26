import Page from "@components/layout/Page";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import App from "App";
import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Page content={<Home />} />} />
          <Route
            path="*"
            element={<Page content={<NotFound />} title="Not Found" />}
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
