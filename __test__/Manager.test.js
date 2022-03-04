const Manager = require('../lib/Manager')

test("receive name", () => {
    const manName = new Manager("Nick");
    expect(manName.getName()).toBe("Nick");
})

test("receive id", () => {
    const manId = new Manager("Nick", "1");
    expect(manId.getId()).toBe("1"); 
})

test("receive email", () => {
    const manEmail = new Manager("Nick", "1", "wngartman@gmail.com");
    expect(manEmail.getEmail()).toBe("wngartman@gmail.com"); 
})

test("receive office number", () => {
    const manNum = new Manager("Nick", "1", "wngartman@gmail.com", '4221');
    expect(manNum.getOfficeNumber()).toBe("4221")
})
