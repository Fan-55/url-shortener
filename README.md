## URL Shortener

This is a web application that can shorten the url and redirect user to the original website.

[Try It!](https://secret-oasis-08507.herokuapp.com/)

![](/url-shortener.png)

### How to use
---
0. Prerequisites
- install [MongoDB](https://www.mongodb.com/try/download/community)
- install [Robo 3T](https://robomongo.org/)
- start the MongoDB server
- create a MongoDB connection
- create a database named "url-shortener"

1. Clone this repository 

```
$ git clone https://github.com/Fan-55/url-shortener.git
```

2. Go to the directory 

```
$ cd url-shortener
```

3. Create a file named .env under the root directory, then paste the following to the .env file and save it

```
PORT=3000
BASE_URL=http://localhost:3000/
MONGODB_URI=mongodb://localhost/url-shortener
```

4. Install the required packages 

```
$ npm install
```

5. Implant seed data
```
$ npm run seed
```

6. Execute app via either nodemon or node

- via nodemon

```
$ npm run dev
```

- via node

```
$ npm run start
```

7. You will see the following on your terminal suggesting successful set up

```
This app is listening at http://loaclhost:3000
MongoDB connected!
```
8. Open the browser and type in the following URL then you are ready to go!

```
http://localhost:3000
```
### Tools used for this web application
---
- Node.js: v10.15.0
- Express: v4.17.1
- dotenv: v8.2.0
- express-handlebars: v5.1.0
- body-parser: v1.19.0
- mongoose: v5.10.9
- MongoDB: v4.2.9
- Robo 3T: v1.4.1