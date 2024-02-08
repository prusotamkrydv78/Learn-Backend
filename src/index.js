import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import { app } from "./app.js";

const PORT = 8080;

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running of PORT || ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB CONNTECTION FAILED !! ${err}`);
  });
