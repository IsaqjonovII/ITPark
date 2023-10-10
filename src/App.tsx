import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { appRoutes } from "routes";
import Loader from "components/Loader";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    isSidebarOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isSidebarOpen]);
  useEffect(() => {
    isLoading
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <div className="container__nav">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setisSidebarOpen}
        />
        {isSidebarOpen ? (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setisSidebarOpen}
          />
        ) : null}
      </div>
      <Routes>
        {appRoutes.map(({ key, path, Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;
