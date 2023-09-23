import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Switch, Route } from "react-router-dom";
import { appRoutes } from "routes";

function App() {
  return (
    <div className="app">
      <Navbar />
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
