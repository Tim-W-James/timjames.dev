import ScrollToTop from "@components/ScrollToTop";
import BlogArticle from "@components/blog/BlogArticle";
import { BLOG, CONTACT, HOME, PROJECTS } from "@constants/routes";
import Page from "@layout/Page";
import Blog from "@pages/Blog";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Projects from "@pages/Projects";
import "@styles/main.scss";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<App />} path="/">
          {/* Alternate routes to the index */}
          {HOME.map((path, index) => (
            <Route
              element={<Page content={<Home />} nonStandardLayout />}
              index
              key={index}
              path={path}
            />
          ))}
          {PROJECTS.map((path, index) => (
            <Route
              element={<Page content={<Projects />} title="Projects" />}
              index
              key={index}
              path={path}
            />
          ))}
          {BLOG.map((path, index) => (
            <Route
              element={<Page content={<Blog />} title="Blog" />}
              index
              key={index}
              path={path}
            />
          ))}
          {BLOG.map((path, index) => (
            <Route
              element={
                <Page
                  content={<BlogArticle />}
                  nonStandardLayout
                  title="Blog"
                />
              }
              index
              key={index}
              path={`${path}/:slug`}
            />
          ))}
          {CONTACT.map((path, index) => (
            <Route
              element={<Page content={<Contact />} title="Contact" />}
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
