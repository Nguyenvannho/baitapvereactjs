import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentInfoComponent from './StudentInfoComponent';

const students = [
  { id: 1, name: "Tạ Đình Phong", age: 25, address: "Quần Đảo Hoàng Sa" },
  { id: 2, name: "Trịnh Phong Tâm", age: 31, address: "Miền Tây Nam Bộ" },
  { id: 3, name: "Nguyễn Như Ngọc", age: 22, address: "Gio Linh" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentInfoComponent students={students}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
