#!/usr/bin/env node
const fetch = require("node-fetch")
const data = require("./data/simpleOrder.json")
const { decodeCoordinates } = require('./utils/flexiblePolyline')
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/"
const TOKEN = process.env.TOKEN
const query = `
mutation importOrder($data: OrderImportInput!){
  importOrder(data:$data) {
    _id
    order {
      reference
      route {
        distance
        time
        routeDetails {
          legs {
            calculatedRoute {
              segments {
                name
                type
                distance
                time
                encodedCoordinates
              }
            }
          }
        }
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
    if (result.errors) {
      console.error(result.errors)
    }
    console.log("Order successfully created");
    let coordinates = []
    result.data.importOrder.order.route.routeDetails?.legs.forEach(leg => {
      leg.calculatedRoute.segments.forEach(segment => {
        coordinates = coordinates.concat(decodeCoordinates(segment.encodedCoordinates))
      })
    })
    console.log('decoded coordinates: ', coordinates.length)
    console.log(coordinates)
  });