#!/usr/bin/env node
const fetch = require("node-fetch")
const data = require("./data/simpleOrder.json")
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/"
const TOKEN = process.env.TOKEN
const query = `
mutation importOrder($data: OrderImportInput!){
  importOrder(data:$data) {
    _id
    quote {
      quote {
        total
        vehicle
        trailer
        driver
        fuel
        toll
      }
    }
    order {
      reference
      route {
        distance
        time
      }
    }
  }
}
`
// Specify vehicle and driver id here.
// As default the first driver and vehicle is used.
const vehicle = undefined
const driver = undefined

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "authorization": TOKEN
  },
  body: JSON.stringify({
    query: query,
    variables: {
      data: {
        vehicle,
        driver,
        ...data,
      },
    },
  })
})
  .then(result => {
    return result.json();
  })
  .then(result => {
    console.log("Order successfully created:\n", JSON.stringify(result.data, null, 2));
  });