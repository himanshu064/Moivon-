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
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationRoutes />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
