import { createAction, handleActions } from 'redux-actions'

const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER"
const SET_USER_STATUS = "user/USER_STATUS"
const SET_USER_ROLE = "user/SET_USER_ROLE"
const SET_ADMIN_STATUS = "user/SET_ADMIN_STATUS"

export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl);
export const setUser = createAction(SET_USER, (currentUser) => currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);
export const setUserRole = createAction(SET_USER_ROLE, (role) => role);
export const setAdminStatus = createAction(SET_ADMIN_STATUS, (isAdmin) => isAdmin);


const UserInitalValue = {
    currentUser : {
        role : "user" //기본값 user
    },
    isLogin : false,
    previousUrl : "",
    isAdmin : false
};
 
const user = handleActions({

    [SET_PREVIOUS_URL] : (state = UserInitalValue, action) => ({...state, previousUrl: action.payload}),
    [SET_USER] : (state = UserInitalValue, action) => ({...state, currentUser: action.payload}),
    [SET_USER_STATUS] : (state = UserInitalValue, action) => ({...state, isLogin: action.payload}),
    [SET_USER_ROLE] : (state = UserInitalValue, action) => ({...state, 
        currentUser: {
            ...state.currentUser, // 기존 유저 유지
            role: action.payload // role만 업데이트
        }})

}, UserInitalValue);

export default user;
