class UserProfile {
    constructor(username, email, firstName, lastName, token) {
      this.username = username || '';
      this.email = email || '';
      this.firstName = firstName || '';
      this.lastName = lastName || '';
      this.token = token || '';
    }
  
    // You can add methods to the class as needed
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    toString() {
      return `UserProfile: ${this.username}, ${this.email}, ${this.getFullName()}`;
    }
  }
  
  // Export the class
  export default UserProfile;