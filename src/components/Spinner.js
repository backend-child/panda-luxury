import React from "react";
import { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {}, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loadingSpinnerContainer">
      Loading
      <div className="loadingSpinner"></div>
    </div>
  );
};

export default Spinner;
