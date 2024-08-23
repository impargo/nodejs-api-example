# IMPARGO API Nodejs Examples
Example nodejs code to integrate with the IMPARGO GraphQL API. 
As an introduction to the to API checkout the [Getting started guide](https://docs.google.com/document/d/1dl1iU7tzlj_vM0wvcWuWADaBNVYSvwHOlQGwP0-u1fE/edit?usp=sharing).

## Usage

Run the following code to create a new order via the graphql api on the IMPARGO development system:
```sh
npm install
export TOKEN=<your-access-token>
./simple.js
```

## Examples
The following eamples are contained in this this repository:
- `simple`: Creating a simple order with two stops.
- `additionalStopDetails`: Creating an order with three stops, additional stop data and load details.
- `tollDetails`: Requesting the toll costs for a simple order with two stops.
- `quoteAndCosts`:  Requesting the detailed costs (vehicle, driver, trailer, fuel, ...) and total estimated price of a tour.
- `loadingUnits`: Creating an order with two stops and additional two loading units to be picked up in the first stop and dropped in the second stop.
- `customOrderFields`: Create an order with two stops and additional custom order fields.
- `listOpenOrders`: Lists all order with the status "OPEN".
- `createVehicle`: Create a new vehicle with "simple" costprofile.
- `listVehicles`: List all vehicles.
- `createCustomer`: Create a new customer.
- `listCustomers`: List all customers.
