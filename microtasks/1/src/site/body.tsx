import React from 'react';

type BodyPropsType=  {
    title: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}