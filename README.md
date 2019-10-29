# Postlight

### Installation

Client - Start application at http://localhost:8081

```sh
$ npm install
$ npm start
```

Server is completely bare since I elect to go with serverless route (Gateway API => Lambda => DynamoDB) since it can be spun up much faster. Querying speed does take a hit as a result but it did save me a lot of time and allow me to complete the project while focusing heavily on the frontend. I added the code for the 2 lambdas but not sure if i can include anything else.

TODO:
1. Refactor useEffect, even through it is caching, the code is duplicated in a couple components
3. Remove config file, the key is exposed currently but it limit is set to very low
2. Add test
