// import React, { Component } from 'react';
// import axios from 'axios';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';

import React, { Component } from 'react';
import axios from 'axios';


// const App = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         setTodos(response.data);
//       } catch (error) {
//         alert(`Failed to fetch todos: ${error.message}`);
//       }
//     };

//     fetchTodos();
//   }, []);

//   const handleAddTodo = (newTodo) => {
//     setTodos((prevState) => [...prevState, newTodo]);
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <TodoForm onAddTodo={handleAddTodo} />
//       <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
//     </div>
//   );
// };

// export default App;
//Thực hành 2 :
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: false
//     };
//   }

//   componentDidMount() {
//     this.setState({ loading: true });
//     this.getUsers()
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       })
//       .finally(() => {
//         this.setState({ loading: false });
//       });
//   }

//   getUsers = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         axios
//           .get("http://localhost:3001/api/users")
//           .then(res => {
//             resolve(res);
//           })
//           .catch(err => {
//             reject(err);
//           });
//       }, 3000);
//     });
//   };

//   render() {
//     const { loading, users } = this.state;
//     if (loading) return <p>loading...</p>;
//     return (
//       <div>
//         <h1>Users</h1>
//         <ul>
//           {users.map(user => (
//             <li key={user.id}> {user.name} </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// Thực hành : Usser và Arcicle bằng axios
// import React, { Component } from "react";
// import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   componentDidMount() {
//     const getUsers = axios.get("https://642f6ef5b289b1dec4b2de0e.mockapi.io/api/users");
//     const getArticle = axios.get("https://642f6ef5b289b1dec4b2de0e.mockapi.io/api/articles");
//     axios
//       .all([getUsers, getArticle])
//       .then(
//         axios.spread((res1, res2) => {
//           const users = res1.data.map(user => {
//             return {
//               ...user,
//               article: res2.data.filter(item => {
//                 return item.user_id === user.id;
//               })
//             };
//           });
//           this.setState({ users: users });
//         })
//       )
//       .catch(err => {
//         throw err;
//       });
//   }

//   render() {
//     const { users } = this.state;
//     return (
//       <div>
//         <h1>Users</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Article numbers</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id}>
//                 <td> {user.name} </td>
//                 <td> {user.article.length} </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default App;

// [Thực hành] Hiện loading trong thời gian chờ gọi API bằng Async/Await

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: false
//     };
//   }

//   componentDidMount() {
//     this.setState({ loading: true });
//     this.getUsers()
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       })
//       .finally(() => {
//         this.setState({ loading: false });
//       });
//   }

//   getUsers = async () => {
//     await new Promise(resolve => {
//       setTimeout(resolve, 3000);
//     });
//     return await axios.get("https://642f6ef5b289b1dec4b2de0e.mockapi.io/api/users");
//   };

//   render() {
//     const { loading, users } = this.state;
//     if (loading) return <p>loading...</p>;
//     return (
//       <div>
//         <h1>Users</h1>
//         <ul>
//           {users.map(user => (
//             <li key={user.id}> {user.name} </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// [Thực hành] Hiện loading trong thời gian chờ gọi API bằng Promise

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: false
//     };
//   }

//   componentDidMount() {
//     this.setState({ loading: true });
//     this.getUsers()
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         throw err;
//       })
//       .finally(() => {
//         this.setState({ loading: false });
//       });
//   }

//   getUsers = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         axios
//           .get("https://642f6ef5b289b1dec4b2de0e.mockapi.io/api/users")
//           .then(res => {
//             resolve(res);
//           })
//           .catch(err => {
//             reject(err);
//           });
//       }, 3000);
//     });
//   };

//   render() {
//     const { loading, users } = this.state;
//     if (loading) return <p>loading...</p>;
//     return (
//       <div>
//         <h1>Users</h1>
//         <ul>
//           {users.map(user => (
//             <li key={user.id}> {user.name} </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// [Thực hành] Tạo và chỉnh sửa User thông qua call API bằng Axios
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Users from "./pages/Users";
// import UserDetails from "./pages/UserDetails";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Users />} />
//         <Route path={"/user/add"} element={<UserDetails />} />
//         <Route path={`/user/:userId`} element={<UserDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://642f6ef5b289b1dec4b2de0e.mockapi.io/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;