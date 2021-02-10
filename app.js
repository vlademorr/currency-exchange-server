const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Rates {
    CAD: Int
    HKD: Int
    ISK: Int
  }

  type Currency {
    rates: Rates
    base: String
    date: String
  }
 
  type Query {
    currencyExchange(base: String): Currency
  }
`);

const fakeDatabase = {
  "USD": {
    rates: {
      CAD: 1,
      HKD: 2,
      ISK: 3
    },
    base: "USD",
    date: "2021-02-08"
  },
  "EUR": {
    rates: {
      CAD: 4,
      HKD: 5,
      ISK: 6
    },
    base: "EUR",
    date: "2021-02-08"
  },
  "RUB": {
    rates: {
      CAD: 7,
      HKD: 8,
      ISK: 9
    },
    base: "RUB",
    date: "2021-02-08"
  },
};

const root = {
  currencyExchange: ({base}) => fakeDatabase[base]
};

const app = express();

app.use('/currencyExchange', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () =>
  console.log('Express GraphQL Server Now Running On localhost:4000/currencyExchange')
);
