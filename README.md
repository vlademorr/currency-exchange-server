# Install
To install everything necessary for the project
```
npm i
```
# Start
To run Server
```
node app.js
```
# Example of request
In postman 
```
Enter this url: localhost:4000/currencyExchange
Chose the "POST" request
Then in body choose GraphQL and paste this:

{
    currencyExchange(base: "USD"){
        rates{
            CAD
            HKD
            ISK
        }
        base
    }
}

Response will be:
{"data":{"currencyExchange":{"rates":{"CAD":1,"HKD":2,"ISK":3},"base":"USD"}}}
```
