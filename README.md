# River Renters API 🛶

This is an API using Express/Node.js for a final Mod 3 project at Turing Software of Engineering & Design.
This app exposes endpoints to return a single users list of white water rafts available for rent.

[Checkout the front-end application here](https://github.com/JoeRupp/river-renters)

[Heroku deployment](https://river-renters-api.herokuapp.com/)

## Setup:
- Clone the repository to your local machine.
- `cd` into the application.
- Run `npm install` to install all the project dependencies.
- Run `node server.js` to run the application locally.
  - You can also run `nodemon --exec babel-node server.js` if you would like to use nodemon instead.
  - If you need to stop running the application, run `Control + C`.

## Technologies:
- JavaScript
- Express
- Babel

## Available endpoints:

#### 1. Get Rigs: Returns a list of all rigs

<details>
  <summary> Request </summary>
  
  *GET `https://river-renters-api.herokuapp.com/api/v1/rigs`*
  
  </details>
  
  <details>
    <summary> Response </summary>
  
```  
 {
  [
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
  {
    id: 2,
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
  ... etc
  ]
}

```
</details>

---

####  2. Get Single Rig: Returns a single rig

<details>
  <summary> Request </summary>

  *GET `https://river-renters-api.herokuapp.com/api/v1/rigs/1`*

  </details>

  <details>
    <summary> Response </summary>

```

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
  photoId: "exampleImage.png"
}

```
</details>

---

  #### 3. Create New Rig: Adds a new rig

<details>
  <summary> Request </summary>

  *POST `https://river-renters-api.herokuapp.com/api/v1/rigs`*

```

{
  "name": "Maravia 14X24 Cataraft - fully rigged",
  "brand": "Maravia",
  "type": "Multi-day",
  "cost": 150,
  "description": "Smooth curved bow and stern profiles on this highly maneuverable cataraft cut the water more like a hard hull and gives better handling characteristics.",
  "photoId": "exampleImage.png"
}

```
</details>

<details>
  <summary> Response </summary>

```

{
  id: 5749006037252849,
  status: "available",
  name: "Maravia 14X24 Cataraft - fully rigged",
  brand: "Maravia",
  type: "Multi-day",
  cost: 150,
  rentStartDate: "",
  rentEndDate: "",
  description:
  "Smooth curved bow and stern profiles on this highly maneuverable cataraft cut the water more like a hard hull and gives better handling characteristics.",
  photoId: "exampleImage.png",
}

```
</details>

---

  #### 4. Patch Rig: Updates a single rig

<details>
  <summary> Request </summary>

  *Patch `https://river-renters-api.herokuapp.com/api/v1/rigs/5749006037252849`*

```

{
  status: "rented",
  rentStartDate: "06.27.2022",
  rentEndDate: "07.04.2022"
}

```
</details>

<details>
  <summary> Response </summary>

```

{
  id: 5749006037252849,
  status: "rented",
  name: "Maravia 14X24 Cataraft - fully rigged",
  brand: "Maravia",
  type: "Multi-day",
  cost: 150,
  rentStartDate: "06.27.2022",
  rentEndDate: "07.04.2022",
  description:
  "Smooth curved bow and stern profiles on this highly maneuverable cataraft cut the water more like a hard hull and gives better handling characteristics.",
  photoId: "exampleImage.png",
}

```
</details>

---

  #### 5. Delete Rig: Removes a rig

<details>
  <summary> Request </summary>

  *Delete `https://river-renters-api.herokuapp.com/api/v1/rigs/1`*

</details>

<details>
  <summary> Response </summary>

```

{
  [
    {
    id: 2,
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
  ... etc
  ]
}

```
</details>
