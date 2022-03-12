import React from 'react';

type FooterPropsType=  {
    title: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}