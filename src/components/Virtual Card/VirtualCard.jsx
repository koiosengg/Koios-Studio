import React from "react";
import { useParams } from "react-router-dom";
import employees from "./employees";
import Template from "./Template";
import "./style.css";

function VirtualCard() {
  const { employeeName } = useParams();
  const employee = employees.find(
    (emp) => emp.firstName + emp.lastName === employeeName
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  return (
    <div className="virtual-card">
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      <h3>{employee.position}</h3>
      <Template />
    </div>
  );
}

export default VirtualCard;
