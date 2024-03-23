import app from "./app.js";
import dbConnection from "./dbConnection.js";
const port = 3000;

dbConnection()
.then( () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server listening at port ${process.env.PORT || 3000}`);
    });
})