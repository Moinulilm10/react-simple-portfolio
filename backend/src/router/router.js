const Router = require("koa-router");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const {
  createUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  getUserByPhone,
  getAllUsers,
} = require("../controller/controller");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get("/users", getAllUsers);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:email", getUserByEmail);
router.get("/user/:phone", getUserByPhone);

module.exports = router.routes();
