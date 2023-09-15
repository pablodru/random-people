import getPerson from "@/controllers/controller";
import { Router } from "express";

const router = Router();

router.get("/person", getPerson);

export default router;