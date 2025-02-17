const express = require('express');
const app = express();
const port = 4000;
const { validateUser, validateEntry, EntrySchema, UserSchema } = require('./middleware/reqValidation');
const CreateEntry = require('./routes/createEntry');
const { RetrieveJournalEntries, RetrieveReflectionEntries} = require('./routes/retrieveEntry');
const pool = require('./database/database');
const {Pool} = require('pg');

//Middleware
app.use(express.json()); //For parsing req.body from requests

//Route Definitions here
app.get('/',(req,res) => {
    res.send("This is from the root node");
});

//Due to time constraints, User Sessions will not be implemented.
//Priorities: 
// (i) creating a db to store all Journal/Reflection Entries
// (ii) providing an endpoint to connect to Open AI Api

// FUTURE:
// Implement idempotency keys to ensure duplicate requests (e.g., due to retries) 
// do not create duplicate entries in the database.


//Endpoint 1: gets all Journal Entries
    // Send GET fetch request to this endpoint for now: localhost:4000/journalEntries/2
app.get('/journalEntries/:journal_id', RetrieveJournalEntries);
//Endpoint 2: gets all Reflection Entries
    // Send GET fetch request to this endpoint for now: localhost:4000/reflectionEntries/1
app.get('/reflectionEntries/:reflection_id', RetrieveReflectionEntries);

//NOTE 1:
// Middleware: validateEntry
// Ensures that the request body adheres to EntrySchema. Rejects requests with invalid or missing data.


//Endpoint 3: posts a Journal Entry
//// Example request body:
// {
//   "journal_id": 2, //use journal_id = 2 for now - this will be fixed when user authentication feature is deployed
//   "title": "Today was great dat",
//   "details": "This is where the details actually go ..."
// }
// // Send POST fetch request to this endpoint
app.post('/journalEntries',validateEntry, (req, res)=> {
    CreateEntry(req,res,'journal_items');
});
//Endpoint 4: posts a Reflection Entry
//// Example request body:
// {
//   "reflection_id": 1, //use reflection_id = 1 for now - this will be fixed when user authentication feature is deployed
//   "title": "Today was great dat",
//   "details": "This is where the details actually go ..."
// }
// Send POST fetch request to this endpoint
app.post('/reflectionEntries',validateEntry,(req, res)=> {
    CreateEntry(req,res,'reflection_items');
});

//This is where the express server listens from
// TODO: Add error handling for server startup or unexpected runtime errors.
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});