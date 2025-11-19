import { Router } from "express";
import { getAllWigs, getWig, createWig, updateWig, deleteWig } from "../controllers/wigsController";
import { validateRequest } from "../middleware/validateRequest";
import { wigSchema } from "../validators/wigsValidator";

const router = Router();

router.get("/", getAllWigs);
router.get("/:id", getWig);
router.post("/", validateRequest(wigSchema), createWig);
router.put("/:id", validateRequest(wigSchema), updateWig);
router.delete("/:id", deleteWig);

export default router;