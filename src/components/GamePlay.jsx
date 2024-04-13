import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton} from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [score, setScore] = useState(0); 
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rulesVisibility, setRulesVisibility] = useState( );


  const generateRandomNumber = (min, max) => {
      //console.log(Math.floor(Math.random() * (max - min) + min));
      return Math.floor(Math.random() * (max - min) + min);
  }
  const roleDice = () => {
      if(!selectedNum) { 
        setError("You have not selected any number");  
        return 
      }
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice((prev) => randomNumber)

      if (selectedNum === randomNumber) {
          setScore((prev) =>  prev + randomNumber)
      } else {
        setScore((prev) => prev - 2)
      }

      setSelectedNum(undefined)
  }

  const resetScore = () => {
    setScore(0);
  }

  const addRulesVisibility = (prev) => {
    return setRulesVisibility((prev) => !prev)
  }

  return (
    <MainContainer>
        <div className="top-section">
            <TotalScore score = {score}/>
            <NumberSelector 
              setError = {setError}
              error = {error} 
              selectedNum = {selectedNum} 
              setSelectedNum = {setSelectedNum}
            />
        </div>
        <RollDice
          currentDice = {currentDice} 
          roleDice = {roleDice}
        />
        <div className="btns">
          <Button onClick={resetScore}>Reset Score</Button>
          <OutlineButton onClick={addRulesVisibility}>{rulesVisibility ? "Hide" : "Show"} Rules</OutlineButton>
        </div>
        {rulesVisibility && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    };
    .btns {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
`