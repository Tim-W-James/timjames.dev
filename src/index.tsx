/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line filename-rules/match
import "@styles/main.scss";

import ScrollToTop from "@components/utils/ScrollToTop";
import { BLOG, CONTACT, HOME, PROJECTS } from "@constants/routes";
import Page from "@layout/Page";
import cn from "@styles/cssUtils";
import App from "App";
import { envs } from "environment";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import lazyWithPreload from "react-lazy-with-preload";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { store } from "./app/store";
// Code splitting for routes to reduce bundle size
const Home = lazyWithPreload(() => import("@pages/Home"));
const Contact = lazyWithPreload(() => import("@pages/Contact"));
const NotFound = lazyWithPreload(() => import("@pages/NotFound"));
const Projects = lazyWithPreload(() => import("@pages/Projects"));
const Blog = lazyWithPreload(() => import("@pages/Blog"));
const BlogArticle = lazy(() => import("@features/blog/components/BlogArticle"));
// Start preloading other routes in the background
void Home.preload();
void Contact.preload();
void NotFound.preload();
void Projects.preload();
void Blog.preload();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleReCaptchaProvider
      container={{
        element: "captcha-container",
        parameters: {
          badge: "bottomright",
          theme: "dark",
        },
      }}
      reCaptchaKey={envs.VITE_SITE_RECAPTCHA_KEY}
      scriptProps={{
        defer: true,
      }}
    >
      <div id="captcha-container" />
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
                      description={HOME.description}
                      fallback={
                        <>
                          <div className={cn("gradient-background")} />
                          <div
                            className={cn(
                              "fixed left-0 -z-[5] w-screen bg-dark-shades",
                              "top-3/4",
                              "h-1/4"
                            )}
                          />
                        </>
                      }
                      nonStandardLayout
                      title={HOME.title}
                    >
                      <Home />
                    </Page>
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
                      }${PROJECTS.routes[0] ?? ""}`}
                      description={PROJECTS.description}
                      title={PROJECTS.title}
                    >
                      <Projects />
                    </Page>
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
                      }${BLOG.routes[0] ?? ""}`}
                      description={BLOG.description}
                      title={BLOG.title}
                    >
                      <Blog />
                    </Page>
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
                      description={BLOG.description}
                      fallback={
                        <div
                          className={cn(
                            "fixed -z-10 -mt-5 h-screen w-screen bg-dark-shades"
                          )}
                        />
                      }
                      nonStandardLayout
                      title={BLOG.title}
                    >
                      <BlogArticle />
                    </Page>
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
                      }${CONTACT.routes[0] ?? ""}`}
                      description={CONTACT.description}
                      title={CONTACT.title}
                    >
                      <Contact />
                    </Page>
                  }
                  index
                  key={index}
                  path={path}
                />
              ))}
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <Route
                element={
                  <Page nonStandardLayout title="Not Found">
                    <NotFound />
                  </Page>
                }
                path="*"
              />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </GoogleReCaptchaProvider>
  </StrictMode>
);
