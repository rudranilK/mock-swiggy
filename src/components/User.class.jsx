import React from "react";
import { GITHUB_URL } from "../constants";
import { Link } from "react-router";
import { fetchUserDetails } from "../service";

class UserClassComponent extends React.Component {
  interval = undefined;

  constructor(props) {
    //* parameters send to the component
    super(props); //* supoer class constructor called

    //* state variable object, eqivalent to useState hook state variable
    this.state = {
      count: 0,
      user: {},
    };
    //* All state variables are part of this

    console.log(`User.constructor ${this.props.name} called`);
  }

  //* When a class based component is used, the render method is called
  render() {
    console.log(`User.render ${this.props.name} called`);

    const user = this.state.user;

    return (
      <div className="about-user-card">
        <h1>count: {this.state.count} </h1>
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1; //* This will update the value, but it will not trigger the render() method i.e. it wont re-render

            this.setState({
              count: this.state.count + 1,
            }); //* This will update state variable & retrigger the component

            console.log(this.state.count);
          }}
        >
          counter
        </button>

        <img src={user.avatar_url}></img>
        <h2>Name: {user?.name ?? this.props.name}</h2>
        <h3>Location: {user?.location ?? ""}</h3>
        <h4>Contact:</h4>
        <Link to={`${GITHUB_URL}/${user.login}`}>
          <h4> {user?.url ?? ""}</h4>
        </Link>
      </div>
    );
  }

  async componentDidMount() {
    console.log(`User.componentDidMount ${this.props.name} called`);

    const userData = await fetchUserDetails(this.props.name ?? "rudranilK");
    this.setState({
      user: userData,
    });

    //! Not needed at all - just for learning
    //* Display the usage of componentWillUnmount()
    this.interval = setInterval(() => {
      console.log("Hamba Hamba");
    }, 1000);
  }

  //! Not needed at all - just for learning
  //* clear the interval set in the initial component mount
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default UserClassComponent;
