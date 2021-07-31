import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const PageNotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 4000);
  }, []);
  return (
    <div>
      <h2
        style={{
          color: "red",
          border: "solid red",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
          textAlign: "center",
          margin: "1em auto",
        }}
      >
        404 Page Not Found :( we will redirect you back shortly
      </h2>
    </div>
  );
};

export default PageNotFound;
