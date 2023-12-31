import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import GlobalStyles from "styles";
import Loader from "components/Loader";

import "language";
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Suspense fallback={<Loader isLoading={true} setIsLoading={() => false} />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
