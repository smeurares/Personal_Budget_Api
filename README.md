# Personal Budget Api
> Simple API wich you can use for personal budget.

This is a simple API created for a project on CodeCademy. It has CRUD router and a route that allows you to transfer budget from one envelope to another. For the envelopes data I used a simple mock object. For inspiration on code I used Stackoverflow - 20%, Google - 30% and the rest is me. The boiler plate was generated with express-generator.



## Installation

In the folder with the files:

```sh
npm install 
npm start
```

## Technologies

* Node
* Express

## Interesting problems

1. I had to learn what is the difference between req.body, req.params and req.query. For further reference I will put them here:
  * req.body: contains key-value pairs of data submitted in the request body;
  * req.params: contains the value of a parameter e.g. '/:parameter' - here the paramater can be accesed by req.params.parameter;
  * req.query: contains the value of a query in the route '/:parameter?name=query' - here the value of req.query.name is query;
2. I was getting the error "UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client", this happened because instead of status(201).send('something') I was using sendStatus(201).send('something'). res.sendStatus() function is used to set the response HTTP status code to statusCode and send its string representation as the response body, while res.status() only sends the status of the request.




## Contributing

1. Fork it (<https://github.com/smeurares/Personal_Budget_Api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

