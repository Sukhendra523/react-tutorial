import React, {useRef } from "react";

function FocusOnClickBtn() {
  const searchInput = useRef(null)

  function handleFocus(){
    searchInput.current.focus()
  }

  return (
    <div>
      <label>Search </label>
      <input ref={searchInput} />
      <button onClick={handleFocus}>Set focus</button>
    </div>
  );
}

export default FocusOnClickBtn