// import React from 'react';
// import axios from 'axios';

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: []
//     };
//   }

//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         this.setState({ todos: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   addTodo = (title) => {
//     axios.post('https://jsonplaceholder.typicode.com/todos', {
//       title,
//       completed: false
//     })
//       .then(response => {
//         alert(`Status: ${response.status}`);
//         const newTodo = response.data;
//         this.setState(prevState => ({
//           todos: [...prevState.todos, newTodo]
//         }));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Todo List</h1>
//         <Form addTodo={this.addTodo} />
//         <ul>
//           {this.state.todos.map(todo => (
//             <li key={todo.id}>{todo.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  
// }


// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { task: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ task: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.addTodo(this.state.task);
//     this.setState({ task: '' });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" value={this.state.task} onChange={this.handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default TodoList;
