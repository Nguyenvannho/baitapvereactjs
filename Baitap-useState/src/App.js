import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Employee from "./components/Employee.js";
import EmployeeDetail from "./components/EmployeeDetail.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />


      </Routes>
    </Router>
  );
}

export default App;
