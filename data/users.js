const bcrypt = require("bcryptjs");

const users = [
  {
    firstName: "User",
    lastName: "Admin",
    email: "admin@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: true,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test1@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test2@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test3@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test4@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test5@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test6@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test7@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test8@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test9@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test10@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test11@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test12@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test13@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test14@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test15@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test16@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test17@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test18@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test19@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test20@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test21@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test22@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test23@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test24@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test25@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test26@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test27@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test28@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test29@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test30@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test31@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test32@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test33@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test34@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    firstName: "User",
    lastName: "Admin",
    email: "test35@example.com",
    phone: 08090897865,
    country: "USA",
    level: "Postgraduate",
    policy: "Agree",
    contactMe: "Agree",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
];

module.exports = users;
