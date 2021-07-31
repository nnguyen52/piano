import React from "react";
import { Switch, Route } from "react-router-dom";
import Piano from "./piano";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Piano />
        </Route>
      </Switch>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          width: "50%",
          margin: "1em auto",
          border: "solid black",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ color: "black" }}>Made by Jer Ng</h2>
      </motion.div>
    </>
  );
}

export default App;
