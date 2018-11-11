import * as actionTypes from './../actions/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {...action.user};

        case actionTypes.SET_USER:
          return {...state,userDetails:action.userDetails
          };
          case actionTypes.LOGOUT:
            return {};
    default: return state;

  }

}
