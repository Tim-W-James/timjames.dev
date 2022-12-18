import Page from "@components/layout/Page";
import { HOME } from "@constants/routes";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import "@styles/main.scss";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/">
          {/* Alternate routes to the index */}
          {HOME.map((path, index) => (
            <Route
              element={<Page content={<Home />} />}
              index
              key={index}
              path={path}
            />
          ))}
          <Route
            element={<Page content={<NotFound />} title="Not Found" />}
            path="*"
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
