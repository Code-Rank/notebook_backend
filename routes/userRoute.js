import express  from "express";
import { body, validationResult } from "express-validator";
const router=express.Router();
import * as userController from "../controllers/userController.js";

router.post("/createuser",body('email').isEmail().withMessage("Eeter valid email"),
body('password').isLength({ min: 5 }).withMessage("Please enter minimum 5 character as a password"),

userController.createUser);

router.post('/loginauth',userController.login);

export {router}