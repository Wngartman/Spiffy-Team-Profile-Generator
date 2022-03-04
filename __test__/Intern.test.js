const Intern = require("../lib/Intern");

test("receive name", () => {
    const intName = new Intern("Nick");
    expect(intName.getName()).toBe("Nick");
})

test("receive id", () => {
    const intId = new Intern("Nick", "1");
    expect(intId.getId()).toBe("1"); 
})

test("receive email", () => {
    const intEmail = new Intern("Nick", "1", "wngartman@gmail.com");
    expect(intEmail.getEmail()).toBe("wngartman@gmail.com"); 
})

test("receive school", () => {
    const intSchool = new Intern("Nick", "1", "wngartman@gmail.com", "UCF");
    expect(intSchool.getSchool()).toBe("UCF")
})