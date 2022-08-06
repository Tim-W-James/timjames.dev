import Page from "@components/layout/Page";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
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
  </StrictMode>
);
