import React from 'react';
import {New2} from "./New2";

type TypeProps1 = {
    name: string
}

export const New = (props: TypeProps1) => {
    return (
        <>
            <h1>{props.name}</h1>
            <New2 name={props.name + '2 '}/>
            <button>12121</button>
        </>
    )
}