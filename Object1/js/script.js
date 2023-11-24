const user = {
    firstName: "John",
    lastName: "Smith"
};
user.firstName = "Paul";
delete user.firstName;
console.log(user);