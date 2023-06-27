// import express : 
import express from "express";

// Creating an Express app instance: 
const app = express();

// import Users
import { Users } from './users.mjs';
// The server will listen on this port for incoming requests.
const port = 3000; // Choose a port number


// CORS (Cross-Origin Resource Sharing) is a mechanism 
// that allows requests to be made from one domain (origin) to another. 
import cors from "cors";

// This enables the app to handle cross-origin requests.
app.use(cors());


// This code block defines a route using the app.get() method. 
// In this case, the route is for the root URL (/). 
// The arrow function (req, res) => {} is the route handler, 
// which gets executed when a GET request is made to the specified URL.
app.get('/', (req,res) => {
    const {q} = req.query;

    const keys = ['name','username','email'];
    const search = (users) => (users.filter(user =>keys.some(key => 
        user[key].toLowerCase().includes(q)))
    );

    res.json(search(Users));
})

// The app.listen() function starts the server and listens for incoming requests on the specified port.
app.listen(port, () => console.log(`Server is running on port ${port}`) );
