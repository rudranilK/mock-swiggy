import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    //* parameters send to the component
    super(props); //* supoer class constructor called

    //* state variable object, eqivalent to useState hook state variable
    this.state = {
      count: 0,
    };
    //* All state variables are part of this
  }

  //* When a class based component is used, the render method is called
  render() {
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
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Contact: @rudranilK</h4>
      </div>
    );
  }
}

export default UserClassComponent;
