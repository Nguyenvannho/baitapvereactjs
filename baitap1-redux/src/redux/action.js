// import axios from 'axios';

// // Các action types
// export const GET_USERS = 'GET_USERS';
// export const DELETE_USER = 'DELETE_USER';
// export const SET_USERS = 'SET_USERS';
// export const SET_ERROR = 'SET_ERROR';

// // Các action creators
// export const getUsers = () => ({
//   type: GET_USERS,
// });

// export const deleteUser = (id) => ({
//   type: DELETE_USER,
//   payload: id
// });

// export const setUsers = (users) => ({
//   type: SET_USERS,
//   payload: users
// });

// export const setError = (error) => ({
//   type: SET_ERROR,
//   payload: error
// });

// // Thunk middleware để xử lý logic gọi API
// export const fetchUsers = () => {
    
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       dispatch(setUsers(response.data));
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//   }
// };

// export const deleteUserApi = (id) => {
//   return async (dispatch) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
//       dispatch(deleteUser(id));
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//   }
// };

export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";
export const DELETE_USER = "DELETE_USER";