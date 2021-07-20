import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Ball from "./components/Ball"
import Bat from "./components/Bat"

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      
        <Ball></Ball>
        <Bat></Bat>
    </div>
    </Provider>
    
  );
}

export default App;
