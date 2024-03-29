import express from "express";
import userRouter from "./user.js";
import adminRouter from "./admin.js";
import booksRouter from "./books.js";
import categoryRouter from "./category.js";
import authorRouter from "./author.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/books", booksRouter);
router.use("/categories", categoryRouter);
router.use("/admin", adminRouter);
router.use("/authors", authorRouter);

export default router;
