import mongoose from "mongoose";
import { body, validationResult } from "express-validator";
import express, { response } from "express";
import { UserModel } from "../models/Users.js";
import bcryptjs from "bcryptjs";
const createUser = async (req, res) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   var salt = bcryptjs.genSaltSync(10);
   var hash = bcryptjs.hashSync(req.body.password, salt);
   try {

      const result = await UserModel.create({
         name: req.body.name,
         password: hash,
         email: req.body.email,
      });
      if (result) {
         res.status(200).send({
            msg: "Your account is created",
            data: result,
            status: true
         });
      } else {
         res.send({
            msg: "Please try again ",
            data: result,
            status: false
         });
      }
   } catch (error) {
      res.send(error);
   }
}
const login = async (req, res) => {


   try {
      const { email, password } = req.body;

      //console.log(`${email} and ${password}`);

      let result = await UserModel.find({ email: email }).exec();
      ////console.log(result[0].password);
      if (bcryptjs.compareSync(password, result[0].password)) {
         res.send({
            data: result,
            msg: "Successfully login",
            status: true,
         });
      } else {
         res.send({
            msg: "Please enter valid credentails",
            status: false
         });
      }


   } catch (error) {
      res.send(error);
   }
}
export { createUser, login }