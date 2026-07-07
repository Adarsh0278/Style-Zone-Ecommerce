import { json } from "express";

// create user 
async function createUser(req, res) {
    // Implementation for creating a new user
    res.status(201).json({ message: 'User created successfully' });
}

// login user
async function loginUser(req, res) {
    // Implementation for user login
    res.status(200).json({ message: 'User logged in successfully' });
}

// login admin
async function loginAdmin(req, res) {
    // Implementation for admin login
    res.status(200).json({ message: 'Admin logged in successfully' });
}

export { createUser, loginUser, loginAdmin }