const initState = {
  color: 'dark',
};

export type initStateType = {
  color: string
}

export const themeReducer = (state: initStateType = initState, action: changeThemeCType): initStateType => {
  switch (action.type) {
    case 'CHANGE-COLOR': {
      return {...state, color: action.payload}
    }
    default:
      return state;
  }
};

type changeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (color: string) => ({ type: 'CHANGE-COLOR', payload: color } as const);
