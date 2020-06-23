import React, { useState } from 'react';
import Button from '../button/button';
import Style from './style.module.css'

const Calc = () => {
    const [result, setResult] = useState(0);
    const [prevVal, setPreviousVal] = useState(0);
    const [operator , setOperator] = useState('')

    const onClick = (event) => {
        
        if (event === '+') {
            setPreviousVal(parseInt(result));
            setResult('');
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
  
        } else if(event === 'clear'){
            setResult(0);
        } 
        else {
            setResult(result + event);
        }
    }

    const evaluate= () => {
        if(operator==='plus'){
            
            setResult(prevVal+parseInt(result));
        } else if(operator==='minus'){
            setResult(prevVal-parseInt(result));
        }
        else if(operator==='multiply'){
            setResult(prevVal*parseInt(result));
        }
        else if(operator==='divide'){
            setResult(prevVal/parseInt(result));
        }
        
            
            
        
        
    }
    return (
        <div className={Style.container}>
            <div className={Style.result}>
            {result}
            </div>
            
            <Button onClick={onClick} />
        </div>
    )
}

export default Calc;