#!/usr/bin/env node
const fetch = require("node-fetch")
const data = require("./data/customOrderFields.json")
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/"
const TOKEN = process.env.TOKEN
const query = `
mutation importOrder($data: OrderImportInput!){
  importOrder(data:$data) {
    _id
    order {
      reference
      additionalDetails {
        label
        value
        customFieldId
      }
    }
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
    console.log("Order successfully created:\n", JSON.stringify(result.data, null, 2));
  });