const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/config/db");
const userRoute = require("./src/routes/user.routes");
const productRoute = require("./src/routes/product.routes");
const cartRoute = require("./src/routes/cart.routes");
const addressRoute = require("./src/routes/address.routes");
const paymentRoute = require("./src/routes/payment.routes");
const orderRoute = require("./src/routes/order.routes");

const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/address", addressRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/orders", orderRoute);

app.listen(PORT, () => {
  dbConnect();
});
