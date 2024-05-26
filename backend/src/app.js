const Koa = require("koa");
const dotenv = require("dotenv");
const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/router");
const Router = require("koa-router");
const cors = require("@koa/cors");

dotenv.config();

const PORT = process.env.PORT;

const router = new Router();
const app = new Koa();

app.use(bodyParser());
app.use(cors());

router.use("", userRouter);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
