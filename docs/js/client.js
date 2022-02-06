import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!bbb</h1>
        <h2>testesteste</h2>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);