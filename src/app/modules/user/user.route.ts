import express from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controller";

const router = express.Router();

// router.get('/', controller);
router.post("/create-user", createUser);
router.get("/", getUsers);
router.get("/admins", getAdminUsers);
// dynamic routes called always in bottom level
router.get("/:id", getUserById);

export default router;
