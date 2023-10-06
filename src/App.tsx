import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "routes";
// import Loader from "components/Loader";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";


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
      {isSidebarOpen ? (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setisSidebarOpen}
        />
      ) : null}
      <Routes>
        {appRoutes.map(({ key, path, Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
      {/* <Loader /> */}
    </div>
  );
}

export default App;
