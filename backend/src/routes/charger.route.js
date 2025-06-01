import express from 'express'
import { createCharger, deleteCharger, readCharger, updateCharger } from '../controllers/charger.controller.js'

const router= express.Router()

router.post("/create", createCharger)
router.get("/read", readCharger)
router.put("/update/:id", updateCharger);
router.delete("/delete/:id", deleteCharger);

export default router;