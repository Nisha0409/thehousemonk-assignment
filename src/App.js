import React, { Fragment, Component } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import UserDetails from "./components/card/userDetails";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
    };
  }

  onInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
  };

  render() {
    return (
      // <Fragment>
      //   <Homepage id={this.state.userData.id} onInputChange={this.onInputChange} searchName={this.state.searchName} userData={this.state.userData}/>
      // </Fragment>

<Router>
      <Switch>
        <Route exact path="/">
        <Homepage id={this.state.userData.id} onInputChange={this.onInputChange} searchName={this.state.searchName} userData={this.state.userData}/>

        </Route>
        <Route exact path="/userdetails" >
        <UserDetails userData={this.state.userData}


        />
        </Route>
      </Switch>
    </Router>

    );
  }
}

export default App;
