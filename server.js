import rigsData from "./data.js";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 3000);
app.locals.title = "River Renters API";
app.locals.rigs = rigsData;

app.get("/", (request, response) => {
  response.send("Oh hey river rafter");
});

app.get("/api/v1/rigs", (request, response) => {
  const rigs = app.locals.rigs;

  response.json({ rigs });
});

app.get("/api/v1/rigs/:id", (request, response) => {
  const { id } = request.params;
  const rig = app.locals.rigs.find((rig) => Number(rig.id) === Number(id));
  if (!rig) {
    return response.sendStatus(404);
  }

  response.status(200).json(rig);
});

app.post("/api/v1/rigs", (request, response) => {
  const id = Date.now();
  const status = "available";
  const rentStartDate = "";
  const rentEndDate = "";
  const rig = request.body;

  for (let requiredParameter of [
    "name",
    "brand",
    "type",
    "cost",
    "description",
    "photoId",
  ]) {
    if (!rig[requiredParameter]) {
      response.status(422).send({
        error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.`,
      });
    }
  }

  const { name, brand, type, cost, description, photoId } = rig;
  app.locals.rigs.push({
    name,
    brand,
    type,
    cost,
    description,
    photoId,
    id,
    status,
    rentStartDate,
    rentEndDate,
  });
  response.status(201).json({
    name,
    brand,
    type,
    cost,
    description,
    photoId,
    id,
    status,
    rentStartDate,
    rentEndDate,
  });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
