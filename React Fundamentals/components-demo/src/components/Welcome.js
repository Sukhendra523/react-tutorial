import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

//////// destructuring props and state////////////

// class Welcome extends Component {
//   render() {
////   const {name,heroName}=this.props
////   const {stat1,stat2}=this.state
//     return <h1>Welcome {name} a.k.a {heroName}</h1>
//   }
// }

export default Welcome;
