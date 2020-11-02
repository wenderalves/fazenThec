export const authReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        token: action.token,
        isLoading: false,
      };

    case 'SIGN_IN': {
      return {
        errorMessage: '',
        token: action.payload,
      };
    }

    case 'SIGN_OUT': {
      return {
        errorMessage: '',
        token: null,
      };
    }

    default:
      return state;
  }
};
