#!/usr/bin/env node
const fetch = require("node-fetch");
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/";
const TOKEN = process.env.TOKEN;
const query = `
query VostprofilesVehicle {
  costprofilesVehicle {
    _id
    name
    costsPerDistance
    costsPerTime
  }
}
`;

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: TOKEN,
  },
  body: JSON.stringify({
    query: query,
  }),
})
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log(
      "Order successfully created:\n",
      JSON.stringify(result.data, null, 2)
    );
  });
