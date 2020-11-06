import React from "react";
import { 
  // CssBaseline, 
  ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import theme from "./themeGlobal";
import UserRoutes from "./routes/UserRoutes";
import LoginRoutes from "./routes/LoginRoutes";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={LoginRoutes}></Route>
            <Route exact path="/" component={UserRoutes}></Route>

            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
