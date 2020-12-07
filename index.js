#!/usr/bin/env node
const fetch = require("node-fetch")
const data = require("./orderData.json")
const endpoint = "https://dev.backend.impargo.eu/"
const TOKEN = process.env.TOKEN
const query = `
mutation createCompanyOrder($data: CompanyOrderInput!) {
  createCompanyOrder(data:$data) {
    _id
    order {
      _id
      reference
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
  .then(data => {
    console.log("Order successfully created:\n", data);
  });