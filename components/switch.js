import React, { useRef } from "react";

function Switch({ rate, setRate }) {
  const checkbox = useRef();

  const changeRate = () => {
    if (checkbox.current.checked) {
      setRate("y");
    } else if (!checkbox.current.checked) {
      setRate("m");
    }
  };

  return (
    <div className="theme-switch-wrapper">
      <span>Monthly</span>
      <label className="theme-switch" htmlFor="toggle">
        <input
          ref={checkbox}
          type="checkbox"
          name="toggle"
          id="toggle"
          onClick={() => changeRate()}
        />
        <div className="slider round" />
      </label>
      <span>Yearly</span>
    </div>
  );
}

export default Switch;
