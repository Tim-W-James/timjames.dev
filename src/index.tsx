import Page from "@components/layout/Page";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route element={<App />} path="/">
            <Route element={<Page content={<Home />} />} index />
            <Route
              element={<Page content={<NotFound />} title="Not Found" />}
              path="*"
            />
          </Route>
        </Routes>
      </Router>
    </ParallaxProvider>
  </StrictMode>
);
