import React, { useState } from 'react';
import Button from '../button/button';

const Calc = () => {
    const [result, setResult] = useState(0);
    const [prevVal, setPreviousVal] = useState(0);
    const [currentVal, setCurrentVal] = useState(0);
    const [operator , setOperator] = useState('')

    const onClick = (event) => {
        if (event === '+') {
            setPreviousVal(parseInt(result));
            setResult(0);
            setOperator('plus');
        } else if (event === '-') {
            setPreviousVal(result);
            setResult(0);
            setOperator('minus');
        } else if (event === '*') {
            setPreviousVal(result);
            setResult(0);
            setOperator('multiply');
        } else if (event === '/') {
            setPreviousVal(result);
            setResult(0);
            setOperator('divide');
        } else if( event==='='){
            evaluate();
        } 
        else {
            setResult(result + event);
        }
    }

    const evaluate= () => {
        if(operator==='plus'){
//            console.log(prevVal);
            setCurrentVal(result);
           // setResult('');
            setResult(parseInt(prevVal)+parseInt(currentVal))
        }
        console.log(typeof(prevVal),typeof(currentVal))
    }
    return (
        <div>
            {result}
            <Button onClick={onClick} />
        </div>
    )
}

export default Calc;