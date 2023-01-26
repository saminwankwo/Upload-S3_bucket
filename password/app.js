const { hash, verify } = require("argon2");

const newPassword = hash("password1")


// const hashPassword = async (password) => {
    // return await hash(password);
// };

// const password = hashPassword(newPassword)

// const password = await hash(newPassword);

console.log(password);

console.log(newPassword)