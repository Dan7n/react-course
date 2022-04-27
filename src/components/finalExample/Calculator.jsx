import { useState } from "react";
import styled from "styled-components"

/**
 * 
 * CALCULATOR USING ONLY USESTATE HOOK
 */

export const Calculator = () => {
    const [currentResult, setCurrentResult] = useState("");
    const [prevResult, setPrevResult] = useState("");
    const [operator, setOperator] = useState("");
    const [isOperationFinished, setIsOperationFinished] = useState(false);

    const handleNumberChange = (evt) => {
        const buttonClicked = evt.target.innerText;
        if (buttonClicked === "0" && !currentResult) return
        if (isOperationFinished) {
            setCurrentResult("");
            setIsOperationFinished(false)
        }
        setCurrentResult(result => result + buttonClicked);
    }

    const handleAdd = () => {
        if (!currentResult && !prevResult) return
        setPrevResult(result => Number(result) + Number(currentResult));
        setCurrentResult("");
        setOperator("+");
    }

    const handleSubtract = () => {
        if (!currentResult && !prevResult) return
        setPrevResult(result => Number(result) !== 0 ? Number(result) - Number(currentResult) : Number(currentResult));
        setCurrentResult("");
        setOperator("-");
    }

    const handleShowResult = () => {
        if (!currentResult && !prevResult) return
        console.log(operator)
        switch(operator) {
            case "+":
                setCurrentResult(result => Number(result) + Number(prevResult));
                setPrevResult("");
                setOperator("");
                setIsOperationFinished(true)
                break;
            case "-":
                setCurrentResult(result => Number(prevResult) - Number(result));
                setPrevResult("");
                setOperator("");
                setIsOperationFinished(true)
                break;
            default: console.log("Nothing to do :/");
        }
    }

    const clearScreen = () => {
        setCurrentResult("")
        setPrevResult("")
        setOperator("")
    }


	return (
        <CalculatorBody>

            <CalculatorScreen>
                <CurrentResultDisplay>{`${prevResult} ${operator}`}</CurrentResultDisplay>
                <FinalResultDisplay>{currentResult || "0"}</FinalResultDisplay>
            </CalculatorScreen>

            <NormalButton onClick={handleNumberChange}>1</NormalButton>
            <NormalButton onClick={handleNumberChange}>2</NormalButton>
            <NormalButton onClick={handleNumberChange}>3</NormalButton>
            <TallButton onClick={handleAdd}>+</TallButton>
            <NormalButton onClick={handleNumberChange}>4</NormalButton>
            <NormalButton onClick={handleNumberChange}>5</NormalButton>
            <NormalButton onClick={handleNumberChange}>6</NormalButton>
            <NormalButton onClick={handleNumberChange}>7</NormalButton>
            <NormalButton onClick={handleNumberChange}>8</NormalButton>
            <NormalButton onClick={handleNumberChange}>9</NormalButton>
            <TallButton onClick={handleSubtract}>-</TallButton>
            <ZeroButton onClick={handleNumberChange}>0</ZeroButton>
            <ClearButton onClick={clearScreen}>CLEAR</ClearButton>
            <NormalButton onClick={handleShowResult}>=</NormalButton>

        </CalculatorBody>
	);
};

const CalculatorBody = styled.main`
    display: grid;
    grid-template-rows: repeat(5, 4.4rem) 3rem;
    grid-template-columns: repeat(4, 4.2rem);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`

const CalculatorScreen = styled.section`
    grid-column: 1 / -1;
    grid-row: span 1;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`

const CurrentResultDisplay = styled.p`
    font-size: 0.7rem;
    max-width: 100%;
    padding: 0 0.5rem 0.5rem 0;
`

const FinalResultDisplay = styled(CurrentResultDisplay)`
    font-size: 1.5rem;
    font-weight: bold;
    `



const NormalButton = styled.button`
    border: 0.5px solid #6b7280;
    background-color: rgba(0, 0, 0, 0.5);
    grid-row: span 1;
    grid-column: span 1;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    color: white;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        transform: scale(1.015);
    }
`

const TallButton = styled(NormalButton)`
    grid-row: span 2;
`
const ZeroButton = styled(NormalButton)`
    grid-column: span 3;
`
const ClearButton = styled(ZeroButton)`
    background-color: #ef4444;
    color: white;
    border: none;

    &:hover {
        background-color: #f87171;
    }
    `