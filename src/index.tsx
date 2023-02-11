import ScrollToTop from "@components/utils/ScrollToTop";
import { BLOG, CONTACT, HOME, PROJECTS } from "@constants/routes";
import BlogArticle from "@features/blog/components/BlogArticle";
import Page from "@layout/Page";
import { default as Blog } from "@pages/Blog";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Projects from "@pages/Projects";
import "@styles/main.scss";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./app/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<App />} path="/">
            {/* Alternate routes to the index */}
            {HOME.routes.map((path, index) => (
              <Route
                element={
                  <Page
                    canonical={`${window.location.protocol}//${window.location.hostname}`}
                    content={<Home />}
                    description={HOME.description}
                    nonStandardLayout
                    title={HOME.title}
                  />
                }
                index
                key={index}
                path={path}
              />
            ))}
            {PROJECTS.routes.map((path, index) => (
              <Route
                element={
                  <Page
                    canonical={`${window.location.protocol}//${
                      window.location.hostname
                    }${PROJECTS.routes[0] || ""}`}
                    content={<Projects />}
                    description={PROJECTS.description}
                    title={PROJECTS.title}
                  />
                }
                index
                key={index}
                path={path}
              />
            ))}
            {BLOG.routes.map((path, index) => (
              <Route
                element={
                  <Page
                    canonical={`${window.location.protocol}//${
                      window.location.hostname
                    }${BLOG.routes[0] || ""}`}
                    content={<Blog />}
                    description={BLOG.description}
                    title={BLOG.title}
                  />
                }
                index
                key={index}
                path={path}
              />
            ))}
            {/* Dynamic blog routes */}
            {BLOG.routes.map((path, index) => (
              <Route
                element={
                  <Page
                    content={<BlogArticle />}
                    description={BLOG.description}
                    nonStandardLayout
                    title={BLOG.title}
                  />
                }
                index
                key={index}
                path={`${path}/:slug`}
              />
            ))}
            {CONTACT.routes.map((path, index) => (
              <Route
                element={
                  <Page
                    canonical={`${window.location.protocol}//${
                      window.location.hostname
                    }${CONTACT.routes[0] || ""}`}
                    content={<Contact />}
                    description={CONTACT.description}
                    title={CONTACT.title}
                  />
                }
                index
                key={index}
                path={path}
              />
            ))}
            <Route
              element={
                <Page
                  content={<NotFound />}
                  nonStandardLayout
                  title="Not Found"
                />
              }
              path="*"
            />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
