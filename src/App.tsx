import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { appRoutes } from "routes";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false);
  isSidebarOpen ? (document.body.style.overflowY = "hidden") : "auto";
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
      <Switch>
        {appRoutes.map(({ key, path, Component }) => (
          <Route key={key} path={path} component={Component} />
        ))}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
