import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeStoreType } from './bll/store';
import { changeThemeC, initStateType } from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {

  const theme = useSelector<ThemeStoreType, initStateType>(state => state.theme);
  const dispatch = useDispatch();

  const onChangeCallback = (color: string) => dispatch(changeThemeC(color));

  return (
    <div className={s[theme.color]}>
      <hr />
      <span className={s[theme + '-text']}>homeworks 12</span>
      <SuperSelect options={themes} onChange={(event) => onChangeCallback(event.target.value)} />
      <hr />
    </div>
  );
}

export default HW12;
