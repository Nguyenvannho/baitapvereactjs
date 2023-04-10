import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Employee() {
  const location = useLocation();
//   const account = location.state?.account;

  const employees = [
    { id: 1, name: "Hoa", age: 20 },
    { id: 2, name: "Khánh", age: 25 },
    { id: 3, name: "Tú", age: 22 }
  ];

  return (
    <div>
      <h2>Danh sách nhân viên</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
              <Link to={`/employee/${employee.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
