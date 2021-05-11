import React from 'react';

const Calculator = () => {

    const add = (a,b) => {
        let sum = a + b;
        return sum;
    }

    const sub = (a,b) => {
        let sum = a - b;
        return sum;
    }

    const multi = (a,b) => {
        let sum = a * b;
        return sum;
    }

    const div = (a,b) => {
        let sum = a / b;
        return sum;
    }

    return (
        <div style={{backgroundColor: 'antiquewhite'}}>
        <ul style={{display: 'flex', paddingTop: '120px', paddingBottom: '200px',  alignItems: 'center', flexDirection: 'column', fontSize: '22px', fontWeight: '600'}}>
            <span>Sum of two numbers is = {add(10,10)}</span>
            <span>Subtraction of two numbers is = {sub(10,10)}</span>
            <span>Multiplication of two numbers is = {multi(10,10)}</span>
            <span>Division of two numbers is = {div(10,10)}</span>
        </ul>
        </div>
    )
}

export default Calculator;