import  express  from "express";

const router=express.Router();

import * as notesController  from "../controllers/notesController.js";

router.post("/createnote",notesController.createNote);
router.get("/getnotes/:id",notesController.getNotes);
router.put("/updatenote/:id",notesController.updateNotes);
router.delete("/deletenote/:id",notesController.deleteNotes);
export {router}