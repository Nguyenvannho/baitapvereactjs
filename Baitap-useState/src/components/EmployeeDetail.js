import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams();

  const employees = [
    { id: 1, name: "Hoa", age: 20, address: "Hà Nội" },
    { id: 2, name: "Khánh", age: 25, address: "Nam Định" },
    { id: 3, name: "Tú", age: 22, address: "Huế" }
  ];

  const employee = employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return <p>Không tìm thấy nhân viên</p>;
  }

  return (
    <div>
      <h2>Thông tin nhân viên</h2>
      <p>ID: {employee.id}</p>
      <p>Tên: {employee.name}</p>
      <p>Tuổi: {employee.age}</p>
      <p>Địa chỉ: {employee.address}</p>
    </div>
  );
}

export default EmployeeDetail;
