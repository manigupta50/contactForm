import { connectUsingMongoose } from "./config/mongodb.js"
import app from "./index.js";

app.listen(8080, () => {
    console.log("Server connected using port 8080");
    connectUsingMongoose();
})