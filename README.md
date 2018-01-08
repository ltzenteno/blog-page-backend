## Setup

1. Clone the repo with `git clone https://github.com/ltzenteno/auth-api.git`

2. Install its dependencies with `npm install`

3. Create a Mongo Database and replace it's values in your .env file, for this example I'm using the following url:
```
DB=mongodb://brave:brave@localhost:27017/bravedb
```

4. start the server with `npm start` 

5. create default user executing the following url:
```
http://localhost:8080/api/setup
```
(the default user is `pepito@mail.com` - `hola`)

Now you can authenticate with the following endpoint:
```
http://localhost:8080/api/authenticate
```
You have to send the corresponding email and password, if the credentials are correct, you should see the response with the JWT token.

<img width="1437" alt="screen shot 2018-01-08 at 2 13 27 pm" src="https://user-images.githubusercontent.com/5360863/34690290-270162dc-f47e-11e7-8a3a-b4e3d42f402a.png">

Now, having the token we can call the fetch users endpoint:
```
http://localhost:8080/api/users
```
Sending the corresponding token inside the `x-access-token` header.

<img width="1437" alt="screen shot 2018-01-08 at 2 13 32 pm" src="https://user-images.githubusercontent.com/5360863/34690313-3c762684-f47e-11e7-89bb-38b47f589bf6.png">
