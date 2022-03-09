import React from 'react'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message({avatar, message, name, time}: MessageProps) {
    return (
        <div className='main'>
            <img src={avatar} alt="" width={50}/>
            <div className='text'>
                <div className="name">{name}</div>
                <div className="message">{message}</div>
                <div className="time">{time}</div>
            </div>
        </div>
    )
}

