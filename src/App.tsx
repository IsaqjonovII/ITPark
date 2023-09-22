import { Switch, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  // const token = "";
  // const public_routes = useRoutes(publicRoutes);
  // const private_routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  // ]);
  // if (!token) {
  //   return public_routes;
  // } else {
  //   return private_routes;
  // }
  return (
    <div>
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path}>
            {<Component />}
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
