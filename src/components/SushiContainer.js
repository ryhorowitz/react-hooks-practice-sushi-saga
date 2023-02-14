import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi }) {
  //only show 4 pieces
  const [belt, setBelt] = useState([sushi[0], sushi[1], sushi[2], sushi[3]])
  const [firstIndex, setFirstIndex] = useState(0)
  
  console.log('belt', belt)
  const displaySushi = belt.map( fish => {
    const { id, img_url, name, price } = fish
    return <Sushi key={id} id={id} img={img_url} name={name} price={price}/>
  })
  
  function handleMoreSushiClick() {
    console.log('clicked')
    const updatedBelt = belt.map( (fish, index) => {
      //index is always 0
      return sushi[firstIndex + index + 4]
    })
    setBelt(updatedBelt)
    setFirstIndex( firstIndex => firstIndex + 4)
  }

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton onMoreSushiClick={handleMoreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
