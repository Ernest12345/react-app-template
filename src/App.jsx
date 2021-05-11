/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className={"mb-50"} style={{background:"red",width:"200px",height:"200px"}}>
        <p>42242</p>
      </div>
      <div style={{background:"blue",width:"200px",height:"200px"}}/>
      <div style={{background:"green",width:"200px",height:"200px"}}/>
    </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/" />
    //   </Switch>
    // </Router>
  );
}
export default App;
