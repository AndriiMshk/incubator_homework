import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name === '' || name[0] === ' ') {
            setError('error')
            setName('')
        } else {
            alert(`Hello ${name} !`)
            addUserCallback(name)
            setError('')
            setName('')
        }
    }
    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addUser()
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserPressEnter={pressEnter}
        />
    )
}

export default GreetingContainer
