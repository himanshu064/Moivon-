import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavigationRoutes from "./routes";
import ReactGA from "react-ga4";

const queryClient = new QueryClient();

const MEASUREMENTID = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-M363XFWY9C";

ReactGA.initialize(MEASUREMENTID);

function App() {
  const [maskState, setMaskState] = React.useState(0);

  React.useState(() => {
    setTimeout(() => {
      setMaskState(1);
      setTimeout(() => {
        setMaskState(2);
      }, 2000);
    }, 500);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={
          "white-mask " +
          (maskState === 1
            ? "fade-out"
            : maskState === 2
            ? "fade-out hide"
            : "")
        }
      />
      <NavigationRoutes />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
