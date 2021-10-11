import React from "react";

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

//////// destructuring props////////////

// const Greet = ({name,heroName}) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {props.children}
//     </div>
//   )
// }

// const Greet = (props) => {
//// const {name,heroName}=props
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {props.children}
//     </div>
//   )
// }

export default Greet;
