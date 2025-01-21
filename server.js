const express = require('express');
const app = express();
const port = 4000;

//Route Definitions here
app.get('/',(req,res) => {
    res.send("Hello this is from the root route");
});

app.get('/about', (req,res) => {
    res.send('About Us page');
});

app.get('/users', (req,res) => {
    res.send('Users page');
});


//This is where the express server listens from
app.listen(port, () => {
    console.log('Server is running on port: ${port}');

});