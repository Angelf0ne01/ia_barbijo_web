const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

router.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname + "/index.html"));
});
router.get("/my_model/:file_name", (req, resp) => {
  console.log(path.join(__dirname + "/my_model/" + req.params.file_name));
  resp.sendFile(path.join(__dirname + "/my_model/" + req.params.file_name));
});

app.use("/", router);
app.listen(8080, () => {
  console.log("server is running");
});
