const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);
app.locals.title = "River Renters API";
app.locals.rigs = [
  {
    id: 1,
    status: "available",
    name: "NRS Expedition-136 - fully rigged",
    brand: "NRS",
    type: "Multi-day",
    cost: 195,
    rentStartDate: "",
    rentEndDate: "",
    description:
      "The 13 ft 6in NRS E-136 plays like a 13' boat and works like a 14' boat. Its aggressive rocker and wide stance make it fun but dependable in the rapids. Great for fishing, overnights and just seeking thrills.",
    photoId: "exampleImage.png",
  },
];

app.get("/", (request, response) => {
  response.send("Oh hey river rafter");
});

app.get("/api/v1/rigs", (request, response) => {
  const pets = app.locals.pets;

  response.json({ rigs });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
