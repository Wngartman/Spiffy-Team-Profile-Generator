class Employee {

  constructor(name, id, email){
    this.email = email;
    this.id = id;
    this.name = name;
  }
  getName() {
      return this.name;
  }

  getEmail() {
      return this.email;
  }
  
  getId() {
      return this.id;
  }


  getRole() {
      return 'Employee';
  }
}

module.exports = Employee;