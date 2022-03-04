const Employee = require('../lib/Employee');


test("receive name", () => {
    const employeeName = new Employee("Nick");
    expect(employeeName.getName()).toBe("Nick");
})

test("receive id", () => {
    const employeeId = new Employee("Nick", "1");
    expect(employeeId.getId()).toBe("1"); 
})

test("receive email", () => {
    const employeeEmail = new Employee("Nick", "1", "wngartman@gmail.com");
    expect(employeeEmail.getEmail()).toBe("wngartman@gmail.com"); 
})