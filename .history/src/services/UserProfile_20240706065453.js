class UserProfile {
    constructor(username, email, firstName, lastName, token) {
      this._username = username || '';
      this._email = email || '';
      this._firstName = firstName || '';
      this._lastName = lastName || '';
      this._token = token || '';
    }
  
    // Getters
    get username() {
      return this._username;
    }
  
    get email() {
      return this._email;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    get token() {
      return this._token;
    }
  
    // Setters
    set username(value) {
      this._username = value;
    }
  
    set email(value) {
      this._email = value;
    }
  
    set firstName(value) {
      this._firstName = value;
    }
  
    set lastName(value) {
      this._lastName = value;
    }
  
    set token(value) {
      this._token = value;
    }
  
    // Methods
    getFullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    toString() {
      return `UserProfile: ${this._username}, ${this._email}, ${this.getFullName()}`;
    }
  }
  
  // Export the class
  export default UserProfile;