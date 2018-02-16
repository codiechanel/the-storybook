import React, { Component } from "react";
import Progress,  { CircularProgress } from "material-ui/Progress";

const styles = {
  loader: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#394A5E"
  }
};
class App extends Component {
  render() {
    return (
      <div style={styles.loader}>
        <div
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CircularProgress size={50} />
          <div
            style={{
              flexDirection: "column",
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            c
          </div>
        </div>
      </div>
    );
  }
}

export default App;
