const Employee = require("../lib/Employee");

const mockEmployee = {
    name:"employee",
    id:"1",
    email:"employee@gmail.com"

};
const employeeTest = new Employee(
    mockEmployee.name,
    mockEmployee.id,
    mockEmployee.email
);
test ("Employee",() => {
    expect(employeeTest.name).toBe(mockEmployee.name);
    expect(employeeTest.id).toBe(mockEmployee.id);
    expect(employeeTest.email).toBe(mockEmployee.email);
})

test ("getName",() => {
    expect(employeeTest.getName()).toBe(mockEmployee.name);
})

test ("getId",() => {
    expect(employeeTest.getId()).toBe(mockEmployee.id);
})

test ("getEmail",() => {
    expect(employeeTest.getEmail()).toBe(mockEmployee.email);
    
})