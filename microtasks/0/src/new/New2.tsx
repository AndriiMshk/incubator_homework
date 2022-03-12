import React from 'react';
import {New3} from "./New3";

type TypeProps2 = {
    name: string
}

export const New2 = (props: TypeProps2) => {
    return (
        <>
            <h1>{props.name}</h1>
            <New3 name={props.name + '3 '}/>
        </>
    )
}