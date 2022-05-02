import React, {useRef} from "react";

type MyButtonPropsType = {
    text: string
    onClick: any
}

export const MyButton: React.FC<MyButtonPropsType> = (props) => {

    const ref = useRef<any>()
    // console.log(ref)

    return (
        <div ref={ref}>
            <button

                onClick={ () => console.log(ref)}
            >
                {props.text}
            </button>
        </div>
    )
}