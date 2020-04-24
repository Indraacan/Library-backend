const express = require("express");
const router = express.Router();
const LibraryControl = require("../controllers/libraryControl");

router.post("/post", LibraryControl.createData);
router.get("/get", LibraryControl.getData);
router.get("/get/:libraryId", LibraryControl.getDataById);
router.delete("/delete/:libraryId", LibraryControl.deleteById);
router.put("/edit/:libraryId", LibraryControl.editById);

module.exports = router;