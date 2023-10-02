import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useState } from "react";
import { appRoutes } from "routes";
import { Routes, Route } from "react-router-dom";
import Loader from "components/Loader";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false);
  isSidebarOpen
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "auto");
  return (
    <div className="app">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setisSidebarOpen}
      />  
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setisSidebarOpen}
        />
      )}
      <Routes>
        {appRoutes.map(({ key, path, Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
      <Loader />
    </div>
  );
}

export default App;
