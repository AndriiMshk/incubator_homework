import { UserType } from '../HW8';

type actionType = sortUpACType | sortDownACType | check18ACType

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sortUp': {
      let stateCopy = [...state];
      return stateCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    case 'sortDown': {
      let stateCopy = [...state];
      return stateCopy.sort((a, b) => b.name.localeCompare(a.name));
    }
    case 'sortByAge': {
      return state.filter(el => el.age >= 18)
    }
    default:
      return state;
  }
};

type sortUpACType = ReturnType<typeof sortUpAC>
type sortDownACType = ReturnType<typeof sortDownAC>
type check18ACType = ReturnType<typeof check18AC>

export const sortUpAC = () => ({type: 'sortUp'} as const)
export const sortDownAC = () => ({type: 'sortDown'} as const)
export const check18AC = () => ({type: 'sortByAge'} as const)
