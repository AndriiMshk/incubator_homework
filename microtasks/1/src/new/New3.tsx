import React from 'react';

type TypeProps3 = {
    name: string
}

export const New3 = (props: TypeProps3) => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}