import { useState } from "react";
import _ from "lodash";
import "./App.css";
import RandomButton from "./RandomButton";
import RandomNumberDisplay from "./RandomNumberDisplay";

function App() {
  // Генеруємо випадкове число через lodash
  const [randomNumber, setRandomNumber] = useState(_.random(1, 100));

  // Функція для генерації нового числа при кліку
  const generateNumber = () => {
    setRandomNumber(_.random(1, 100));
  };

  return (
    <div className="app">
      <h1>Привіт! Я вивчаю React 🚀</h1>
      <p>Це мій React + Vite проєкт</p>

      <RandomNumberDisplay number={randomNumber} />

      <RandomButton onClick={generateNumber} />
    </div>
  );
}

export default App;

// Старий код від Vite
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
