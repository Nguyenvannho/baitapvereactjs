import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { GET_USERS, SET_USERS,DELETE_USER } from '../redux/action';

// // Worker saga cho action GET_USERS
// function* getUsersSaga() {
// try {
// yield put(fetchUsers());
// } catch (error) {
// console.log(error);
// }
// }

// // Watcher saga cho action GET_USERS
// export function* watchGetUsers() {
// yield takeEvery(GET_USERS, getUsersSaga);
// }

// // Worker saga cho action DELETE_USER
// function* deleteUserSaga(action) {
// try {
// yield put(deleteUserApi(action.payload));
// } catch (error) {
// console.log(error);
// }
// }

// // Watcher saga cho action DELETE_USER
// export function* watchDeleteUser() {
//     yield takeEvery(DELETE_USER, deleteUserSaga);
// }

const BaseURL = "https://642f6ef5b289b1dec4b2de0e.mockapi.io/api/users";

function* getUsers(action) {
    console.log('Saga: getUsers');
    try {
        const response = yield axios.get(BaseURL);
        console.log('XL: rootSaga Dispatch SET_USERS');
        yield put({ type: SET_USERS, payload: response.data });
        console.log(2);
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}
function* deleteUser(action) {
    console.log(action);
    let id = action.payload.id;
    console.log('Saga: deleteUser');
    try {
        const response = yield axios.delete(BaseURL+'/'+id);
        console.log('XL: rootSaga Dispatch SET_USERS');
        yield put({ type: GET_USERS, payload: response.data });
        console.log(2);
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_USERS, getUsers);
    yield takeLatest(DELETE_USER, deleteUser);
}