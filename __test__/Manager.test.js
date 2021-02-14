const Manager = require('../lib/Manager');

const ManagerObj1 = new Manager("Dave",1,'manager@gmail.com',234343343)
test('Create Testcase for Managers Object' , () => {
    expect(ManagerObj1.officeNumber).not.toBeNull();
    expect(ManagerObj1.officeNumber).toEqual(expect.any(Number));
})

test('getOfficeNumber' , () => {
    expect(ManagerObj1.getOfficeNumber()).not.toBeNull();
    expect(ManagerObj1.getOfficeNumber()).toEqual(expect.any(Number));
})