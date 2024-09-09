import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <header className="shadow-lg">
          <div className="bg-gray-900 text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="145"
                  height="49"
                  viewBox="0 0 145 49"
                  fill="none"
                >
                  <path
                    d="M2.45044 20.7008C4.46386 19.7296 3.86192 19.963 7.0535 18.9678C12.7226 17.2001 20.8169 14.9333 26.1968 13.4171C35.1228 10.9015 42.6639 8.85 51.5137 6.2688C54.9671 5.26157 65.0488 1.55113 61.8706 3.2362C41.98 13.7822 22.1446 25.9956 6.48489 42.3893C5.39496 43.5303 4.3557 44.7187 3.28982 45.8822C3.03919 46.1558 2.39281 46.3898 2.55875 46.7216C2.56382 46.7318 10.7733 43.176 10.9526 43.1069C18.2818 40.2791 25.9788 38.7315 33.6971 37.3801C42.403 35.8558 50.9114 35.0397 59.718 34.8349"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M79.2133 18.7512C73.952 18.7512 66.4337 19.367 64.8355 25.4934C64.2366 27.7891 62.5532 32.2231 63.8337 34.4829C65.2367 36.9588 70.1966 36.5013 72.5253 36.297C75.5581 36.031 77.3557 32.8102 78.049 30.2589C78.4313 28.8522 78.4823 27.4783 78.4823 26.0349C78.4823 25.6337 78.4823 24.5304 78.4823 25.8589C78.4823 28.4447 78.4823 31.0306 78.4823 33.6164C78.4823 35.0613 77.9201 38.1685 78.9696 39.465C79.75 40.429 81.8353 39.967 82.8687 39.7087"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M91.3006 2.12305C90.414 2.7678 90.3377 4.91996 90.2047 5.89288C89.9151 8.01165 89.8597 10.1644 89.5691 12.2928C88.885 17.3037 88.7362 22.2785 88.7362 27.3283C88.7362 30.7962 89.0843 34.2449 89.3718 37.6954C89.5014 39.2503 90.0969 40.4559 91.6293 41.0488C92.65 41.4437 94.0041 41.7835 95.0923 41.4981C97.3245 40.9126 97.9132 38.9073 99.3882 37.4324"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M119.903 2.32031C120.003 7.52859 120.072 12.7403 120.21 17.9476C120.311 21.7738 120.85 25.5914 120.889 29.4105C120.931 33.3975 121.087 37.3939 121.087 41.3776"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M119.311 23.4271C118.218 22.2185 116.065 21.8075 114.555 21.4326C112.85 21.0092 110.942 21.2573 109.207 21.2573C107.678 21.2573 107.43 21.3751 106.347 22.5394C105.343 23.6179 104.726 24.8344 103.925 26.0353C103.158 27.1861 103.416 29.0945 103.311 30.4298C103.137 32.6486 102.257 35.6074 103.388 37.7284C105.487 41.6632 111.251 42.6712 115.191 42.9338C119.548 43.2243 123.773 40.4747 126.939 37.7612C128.998 35.9961 130.925 34.0614 133.119 32.4572C135.97 30.3727 139.121 29.0383 142.391 27.7668"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M142.335 27.0371C142.335 31.2389 142.131 35.4299 142.723 39.5743"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M141.56 12.3028C140.59 12.3028 139.621 12.3028 138.652 12.3028C138.312 12.3028 137.984 12.3338 137.941 12.748C137.84 13.7088 137.501 14.5188 138.005 15.4479C138.306 16.0015 138.702 16.3606 139.262 16.6255C139.769 16.8652 140.11 17.2676 140.705 17.1066C141.568 16.8729 142.213 16.3087 142.666 15.5627C142.898 15.179 142.743 14.1587 142.622 13.782C142.361 12.9635 141.601 12.1483 140.784 11.915"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="36"
                        viewBox="0 0 43 36"
                        fill="none"
                      >
                        <path
                          d="M8.0625 13.5V31.5H34.9375V13.5L21.5 4.5L8.0625 13.5Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.0209 21.75V31.5H25.9792V21.75H17.0209Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.0625 31.5H34.9375"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">Zaldi</Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      data-hs-theme-click-value="dark"
                    >
                      <span class="group inline-flex shrink-0 justify-center items-center size-9">
                        <svg
                          class="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                      </span>
                    </button>
                    <button
                      type="button"
                      class="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      data-hs-theme-click-value="light"
                    >
                      <span class="group inline-flex shrink-0 justify-center items-center size-9">
                        <svg
                          class="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M12 2v2"></path>
                          <path d="M12 20v2"></path>
                          <path d="m4.93 4.93 1.41 1.41"></path>
                          <path d="m17.66 17.66 1.41 1.41"></path>
                          <path d="M2 12h2"></path>
                          <path d="M20 12h2"></path>
                          <path d="m6.34 17.66-1.41 1.41"></path>
                          <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
