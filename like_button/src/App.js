import React from "react";
import Button from "./Button";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ffffff",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        padding: 5,
        alignItems: "center",
      }}
    >
      <Button />
    </div>
  );
}

export default App;
