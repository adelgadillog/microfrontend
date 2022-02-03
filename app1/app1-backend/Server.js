const express = require("express");
const initDB = require("./config/db");
const app = express();
const port = 3001;
const userRouters = require("./app/routes/user");
const itemRouters = require("./app/routes/item");
const uploadRouters = require("./app/routes/upload");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

app.use(
  bodyParser.json({
    limit: '20mb',
  })
);

app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true,
  })
);

app.use(userRouters);

app.use(itemRouters);

app.use(uploadRouters);

app.listen(port, () => {
  console.log("La aplicacion esta en linea");
});

initDB();
