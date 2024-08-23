#!/usr/bin/env node
const fetch = require("node-fetch")
const data = require("./data/customerInputExample.json")
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/"
const TOKEN = process.env.TOKEN
const query = `
  mutation CreateCostprofilesCustomer($data: CostprofilesCustomerInput!) {
    createCostprofilesCustomer(data: $data) {
      _id
      name
      firstname
      lastname
      telephone
      email
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
    console.log("Customer successfully created:\n", JSON.stringify(result.data, null, 2));
  });