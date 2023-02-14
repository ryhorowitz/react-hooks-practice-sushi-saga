import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushi, setSushi ] = useState([])
  const [ bank, setBank ] = useState(50)


  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushi => {
      // console.log('Sushi', sushi)
      setSushi(sushi)
    })
    .catch( err => console.error('ERROR', err))
  },[] )
  // console.log('App Sushi is', sushi)

  if (sushi.length === 0) {
    return null
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi}/>
      <Table />
    </div>
  );
}

export default App;
