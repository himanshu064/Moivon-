import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ScrollTop from "./components/ScrollTop";
import App from "./App";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import boostrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// react-datetime styles
import "react-datetime/css/react-datetime.css";

import "./index.css";
import TransparentHeaderContextProvider from "./hooks/useTransparentHeader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TransparentHeaderContextProvider>
      <BrowserRouter>
        <ScrollTop />
        <App />
      </BrowserRouter>
    </TransparentHeaderContextProvider>
  </React.StrictMode>
);
