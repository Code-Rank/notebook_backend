import  express  from "express";

const router=express.Router();

import { createNote } from "../controllers/notesController.js";

router.post("/createnote",createNote);

export {router}