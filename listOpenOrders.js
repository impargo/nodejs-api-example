#!/usr/bin/env node
const fetch = require("node-fetch");
const endpoint = process.env.ENDPOINT || "https://dev.backend.impargo.eu/";
const TOKEN = process.env.TOKEN;
const query = `
query CompanyOrders($sortBy: CompanyOrderSortBy, $paginate: Pagination, $query: CompanyOrderQuery) {
  companyOrders(sortBy: $sortBy, paginate: $paginate, query: $query) {
    hasNext
    totalCount
    items {
      _id
      order {
        _id
        reference
        status
      }
    }
  }
}
`;
const variables = {
  sortBy: {
    loading: 1,
  },
  paginate: {
    limit: 10,
  },
  query: {
    status: "OPEN",
  },
};

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: TOKEN,
  },
  body: JSON.stringify({
    query: query,
    variables,
  }),
})
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log(
      "List of open orders:\n",
      JSON.stringify(result.data, null, 2)
    );
  });
