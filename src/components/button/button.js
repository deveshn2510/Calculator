import React from 'react';
import Style from './style.module.css'

const Button = (props) => {
    return (
        <div className={Style.container}>
            <div className={Style.rows}>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="clear" >clear</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="/">/</button>
                
            </div>
            <div className={Style.rows}>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="7">7</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="8">8</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="9">9</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="*">*</button>
            </div>
            <div className={Style.rows}>

                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="4">4</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="5">5</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="6">6</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="-">-</button>
            </div>
            <div className={Style.rows}>

                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="1">1</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="2">2</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="3">3</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="+">+</button>
            </div>
            <div className={Style.rows}>

                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="0">0</button>
                <button className={Style.buttons} onClick={e => props.onClick(e.target.name)} name="=">=</button>
            </div>


        </div>
    )
}

export default Button;