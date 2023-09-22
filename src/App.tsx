import { Suspense } from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Switch, Route } from "react-router-dom";
import { publicRoutes } from "routes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<div>shashme tur! tayyor bo'lyapti</div>}>
        <Switch>
          {publicRoutes.map(({ key, path, Component }) => (
            <Route key={key} path={path} component={Component} />
          ))}
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
