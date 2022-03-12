import React from 'react';

type NewComponentProps = {
    topCars: StudentType[]
}

type StudentType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentProps) => {
    return (
            <ul>
                {props.topCars.map((objFromCarsArray, index) => {
                    return (
                    <li key={index}>
                        <span>{objFromCarsArray.manufacturer} </span>
                        <span>{objFromCarsArray.model}</span>
                    </li>
                    )
                })}
            </ul>
    )
}