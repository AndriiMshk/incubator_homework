import React from 'react';
import {ValutaType} from './App'
type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type ButtonPropsType = {
    money: MoneyType[]
    onClick: (value: ValutaType) => void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromArray: any, index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromArray.banknots}</span>
                            <span>{objFromArray.value}</span>
                            <span>{objFromArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClick('Dollars')}>dollars</button>
            <button onClick={() => props.onClick('RUBLS')}>RUBLS</button>
            <button onClick={() => props.onClick('ALL')}>ALL</button>
        </>
    )
}