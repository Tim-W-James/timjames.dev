/* eslint-disable react-refresh/only-export-components */
import ScrollToTop from "@components/utils/ScrollToTop";
import { BLOG, CONTACT, HOME, PROJECTS } from "@constants/routes";
import Page from "@layout/Page";
import cn from "@styles/cssUtils";
import "@styles/main.scss";
import App from "App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import lazyWithPreload from "react-lazy-with-preload";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./app/store";
// Code splitting for routes to reduce bundle size
const Home = lazyWithPreload(() => import("@pages/Home"));
const Contact = lazyWithPreload(() => import("@pages/Contact"));
const NotFound = lazyWithPreload(() => import("@pages/NotFound"));
const Projects = lazyWithPreload(() => import("@pages/Projects"));
const Blog = lazyWithPreload(() => import("@pages/Blog"));
const BlogArticle = lazy(() => import("@features/blog/components/BlogArticle"));
// Start preloading other routes in the background
Home.preload();
Contact.preload();
NotFound.preload();
Projects.preload();
Blog.preload();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
                    fallback={
                      <>
                        <div className={cn("gradient-background")} />
                        <div
                          className={cn(
                            "fixed bg-dark-shades -z-[5] w-screen left-0",
                            "top-3/4",
                            "h-1/4"
                          )}
                        />
                      </>
                    }
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
                    fallback={
                      <div
                        className={cn(
                          "fixed bg-dark-shades w-screen h-screen -z-10"
                        )}
                      />
                    }
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
