const express = require('express');
const app = express();
const port = 4000;
const createUser = require("./routes/createUser");
const { validateUser, validateEntry, EntrySchema, UserSchema } = require('./middleware/reqValidation');

//Route Definitions here
app.get('/',(req,res) => {
    res.send("Hello this is from the root route");
});

//Due to time constraints, User Sessions will not be implemented.
//Priorities: 
// (i) creating a db to store all Journal/Reflection Entries
// (ii) providing an endpoint to connect to Open AI Api

//Endpoint 1: gets all Journal Entries
app.get('/journalEntries', (req,res) => {
    res.send('JournalEntries');
});
//Endpoint 2: posts a Journal Entry | Ensure proper json body -> Check EntrySchema
app.post('/journalEntries', (req,res) => {
    
});
//Endpoint 3: gets all Reflection Entries
app.get('/reflectionEntries', (req,res) => {
    res.send('Reflection Entries');
});
//Endpoint 4: posts a Reflection Entry | Ensure proper json body -> Check EntrySchema
app.post('/journalEntries', (req,res) => {
    
});



//This is where the express server listens from
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});