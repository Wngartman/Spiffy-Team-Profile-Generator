const Engineer = require('../lib/Engineer');

test("receive name", () => {
    const engineerName = new Engineer("Nick");
    expect(engineerName.getName()).toBe("Nick");
})
test("receive id", () => {
    const engId = new Engineer("Nick", "1");
    expect(engId.getId()).toBe("1"); 
})
test("receive email", () => {
    const engEmail = new Engineer("Nick", "1", "wngartman@gmail.com");
    expect(engEmail.getEmail()).toBe("wngartman@gmail.com"); 
})
test("receive gitHub", () => {
    const engGithub = new Engineer("Nick", "1", "wngartman@gmail.com", "https://github.com/wngartman");
    expect(engGithub.getGithub()).toBe("https://github.com/wngartman")
})