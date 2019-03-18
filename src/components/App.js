import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../ducks/store";
import routes from "../routes";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../theme";
import Nav from "./Nav";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Nav /> {routes}
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;

// Testing..Zaid
