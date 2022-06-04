const initState = {
  isLoading: false,
};

export const loadingReducer = (
  state: { isLoading: boolean } = initState, action: LoadingACType): { isLoading: boolean } => {
  switch (action.type) {
    case 'LOADING-TOGGLE':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({ type: 'LOADING-TOGGLE', payload: isLoading } as const);