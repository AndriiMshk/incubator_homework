import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    addUserPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserPressEnter}
) => {

    let inputClass = ''
    error ? inputClass = s.error : inputClass = ''

    return (
        <div className={inputClass}>
          <SuperInputText value={name} onChange={setNameCallback} onKeyPress={addUserPressEnter}/>
            {/*<input value={name} onChange={setNameCallback} onKeyPress={addUserPressEnter}/>*/}
            <span>{error}</span>
          <SuperButton
            onClick={addUser}
          >add</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
