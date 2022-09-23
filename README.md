# IMPARGO API Nodejs Examples
Example nodejs code to integrate with the IMPARGO GraphQL API. 
As an introducting to the to API checkout the [Getting started guide](https://docs.google.com/document/d/1dl1iU7tzlj_vM0wvcWuWADaBNVYSvwHOlQGwP0-u1fE/edit?usp=sharing).

## Usage

Run the following code to create a new order via the graphql api on the IMPARGO development system:
```sh
yarn install
export TOKEN=<your-access-token>
./simple.js
```

## Examples
The following eamples are contained in this this repository:
- `simple`: Creating a simple order with two stops.
- `additionalStopDetails`: Creating an order with three stops, additional stop data and load details.
- `tollDetails`: Requesting the toll costs for a simple order with two stops.
