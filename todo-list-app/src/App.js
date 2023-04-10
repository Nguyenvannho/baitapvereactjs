import React, { Component } from 'react';
import axios from 'axios';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';


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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getUsers()
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        throw err;
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  getUsers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get("http://localhost:3001/api/users")
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      }, 3000);
    });
  };

  render() {
    const { loading, users } = this.state;
    if (loading) return <p>loading...</p>;
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