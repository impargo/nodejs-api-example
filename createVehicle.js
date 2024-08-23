#!/usr/bin/env node
const fetch = require("node-fetch")
const data = require("./data/vehicleInputExample.json")
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/"
const TOKEN = process.env.TOKEN
const query = `
  mutation CreateCostprofilesVehicle($data: CostprofilesVehicleInput!) {
    createCostprofilesVehicle(data: $data) {
      _id
      costsPerDistance
      costsPerTime
      name
      profileType
      licensePlate
      weight
      axis
      euronorm
      co2EmissionClass
      fuelType
    }
  }
`

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "authorization": TOKEN
  },
  body: JSON.stringify({
    query: query,
    variables: {
      data,
    },
  })
})
  .then(result => {
    return result.json();
  })
  .then(result => {
    console.log("Vehicle successfully created:\n", JSON.stringify(result.data, null, 2));
  });