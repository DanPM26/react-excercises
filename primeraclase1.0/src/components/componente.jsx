import React from "react";

//render
export class Header extends React.Component {
    render() {
      return (
        <h1>This is the content of the Header component using render</h1>
      );
    }
  }

  //componentDidMount
 export class DidM extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }

// componentDidUpdate

 export class Update extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }

//ShouldComponentUpdate


