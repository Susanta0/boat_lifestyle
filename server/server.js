const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/config/db");
const userRoute = require("./src/routes/user.routes");
const productRoute = require("./src/routes/product.routes");
const cartRoute = require("./src/routes/cart.routes");
const addressRoute = require("./src/routes/address.routes");

const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/address", addressRoute);

app.listen(PORT, () => {
  dbConnect();
});
