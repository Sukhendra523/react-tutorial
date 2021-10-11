import React from "react";
//////////////////////Forwarding Refs//////////////////
// function FRInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
