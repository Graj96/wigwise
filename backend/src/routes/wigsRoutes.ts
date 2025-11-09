import { Router } from "express";
import { getAllWigs, getWig, createWig, updateWig, deleteWig } from "../controllers/wigsController";

const router = Router();

router.get("/", getAllWigs);
router.get("/:id", getWig);
router.post("/", createWig);
router.put("/:id", updateWig);
router.delete("/:id", deleteWig);

export default router;