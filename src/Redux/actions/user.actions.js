import * as actionTypes from './actionTypes'

export const userActions = {
    login,
   logout,
   setUser,
};

function login(username, password) {

        return{type:actionTypes.LOGIN,user:{ username,password }}
}

function logout(username, password) {

        return{type:actionTypes.LOGOUT}

}

function setUser(user)
{
  return{type:actionTypes.SET_USER,userDetails:user}
}
