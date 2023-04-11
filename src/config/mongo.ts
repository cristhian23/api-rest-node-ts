import "dotenv/config";
import mongoose, { ConnectOptions } from "mongoose";

const uri = process.env.DB_URI as string;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.log("Error al conectar a MongoDB:", error);
  });

const db = mongoose.connection;
export default db;
