import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoint, setUserPoint] = useState(0);
  const [computerPoint, setComputerPoint] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameover, setGameover] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice)
  };


  // whole game reset
  const reset = () =>{
    window.location.reload()
  }


  useEffect(()=>{
    const comboMoves = userChoice + computerChoice
    if(userPoint<=4 && computerPoint <=4){
      if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
        const updateduserPoint = userPoint +1;
        setUserPoint(updateduserPoint)
        setTurnResult('user got the point')
        if(updateduserPoint===5){
          setGameover(true)
          setResult('User Wins')
        }
      }
      if(comboMoves === 'scissorsrock' || comboMoves === 'rockpaper' || comboMoves === 'paperscissors'){
        const updatedComputerPoint = computerPoint +1;
        setComputerPoint(updatedComputerPoint)
        setTurnResult('Computer got the point')
        if(updatedComputerPoint===5){
          setGameover(true)
          setResult('Computer Wins')
        }
      }
      if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors'){
        setTurnResult('no one got the point')
      }
    }
  },[userChoice , computerChoice])


  return (
    <>
      <div className="App">
        <h1 className="heading">ROCK PAPER SCISSORS</h1>
        <div className="score">
          <h1>USER POINTS: {userPoint}</h1>
          <h1>COMPUTER POINTS: {computerPoint}</h1>
        </div>
        <div className="choice">
          <div className="choice-user">
            <img
              className="user-hand"
              src={`../images/${userChoice}.png`}
              alt=""
            />
          </div>
          <div className="choice-computer">
            <img
              className="computer-hand"
              src={`../images/${computerChoice}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="button-div">
          {choices.map((choice, index) => 
            <button
              className="button"
              key={index}
              onClick={()=>handleOnClick(choice)} disabled={gameover}
            >
              {choice}
            </button>
          )}
        </div>

          <div className="result">
            <h1>Turn Result: {turnResult}</h1>
            <h1>Final Results: {result}</h1>
          </div>
          <div className="button-div">
            {gameover && (
              <button className="button" onClick={()=>reset()}>Restart Game ?</button>
            )}
          </div>
      </div>
    </>
  );
}

export default App;
