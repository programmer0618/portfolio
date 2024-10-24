class UserDto {
  id;
  firstname;
  lastname;
  email;
  phone;
  role;
  bio;
  image;
  createdAt;
  updatedAt;
  constructor(user) {
    this.id = user._id;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.phone = user.phone;
    this.role = user.role;
    this.bio = user.bio;
    this.image = user.image;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}

module.exports = UserDto;
