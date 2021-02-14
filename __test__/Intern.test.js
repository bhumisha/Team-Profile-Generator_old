const Intern = require("../lib/Intern");


const intern1 = new Intern("Dave",1,'intern@gmail.com','NewSchool')
test('Create Testcase for Intern Object' , () => {
    expect(intern1.school).not.toBeNull();
})

test('getSchool' , () => {
    expect(intern1.getSchool()).not.toBeNull();
})