 //import { useEffect,useState} from "react"
// const width = 8
// const candyColors =[

//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "yellow",
// ]

// const App =() => {
//   const [currentColorArrengement, setCurrentColorArrengement] =  useState([])

//   const createBoard = () => {
//     const randomColorArrangement = []
//     for (let i = 0;i < width * width; i++) {
//       const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
//       randomColorArrangement.push(randomColor)
//     }
//     setCurrentColorArrengement(randomColorArrangement)

//   }
//   useEffect(() => {
//     createBoard()

//   }, [])
  

//   return (
//     <div ></div>
//   );
// }

// export default App;import { useEffect } from "react"
import {  useState, useEffect } from "react"
const width = 8
const candyColors = [
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "yellow",
]

const App = () => {
  const [currentColorArrengement, setCurrentColorArrengement] =  useState([])
  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(randomColor)
    }
    // do something with the new color arrangement
    //console.log(randomColorArrangement)
    setCurrentColorArrengement(randomColorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

  return (
    <div className="app">
      <div className="game">
        {currentColorArrengement.map((candyColor,index) => (
        <img 
        key ={index} 
        style ={{backgroundColor : candyColor}}
        alt ={candyColor}
        />

        ))}

      </div>

    </div>
  )
}

export default App
