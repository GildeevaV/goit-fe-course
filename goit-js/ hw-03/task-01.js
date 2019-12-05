
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

console.log(user.hobby);

user.hobby = "skydiving";

console.log(user.hobby);

user.mood = "happy";

console.log(user.mood);

user.premium = false;

console.log(user.premium);

const keys = Object.keys(user);
// const values = Object.values(user);
// console.log('test ---',values);
// const entries = Object.entries(user);

for (const key of keys) {
  // console.log(key);
  console.log(key, user[key]);
}
