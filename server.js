const express = require('express');
const app = express();
const port = 4000;
const { validateUser, validateEntry, EntrySchema, UserSchema } = require('./middleware/reqValidation');
const CreateEntry = require('./routes/createEntry');
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

//Endpoint 1: gets all Journal Entries
app.get('/journalEntries', (req,res) => {
    res.send('JournalEntries');
});
//Endpoint 2: posts a Journal Entry | Ensure proper json body -> Check EntrySchema
app.post('/journalEntries',validateEntry, CreateEntry);
    // const { journal_id, title, details } = req.body;
    // const query = `
    //   INSERT INTO journal_items (journal_id, title, description)
    //   VALUES ($1, $2, $3)
    // `;
    // //Connect to database
    // try {
    //     const client = await pool.connect()
    //     try {
    //         //Execute the query here
    //         const result = await client.query(query, [journal_id, title, details]);
    //         res.status(201).json({
    //             message: 'Entry created successfully!',
    //         });
    //         } catch (error) {
    //         console.error('Error creating entry:', error);
    //         res.status(500).json({ error: 'An error occurred while creating the entry.' });
    //         }
    //         finally {
    //             client.release();
    //         }
    //     }
    // catch(err) {
    //     res.status(400).send('Error connecting to database');
    // }
// });
//Endpoint 3: gets all Reflection Entries
app.get('/reflectionEntries', (req,res) => {
    res.send('Reflection Entries');
});
//Endpoint 4: posts a Reflection Entry | Ensure proper json body -> Check EntrySchema
app.post('/reflectionEntries',validateEntry, (req,res) => {
});
//This is where the express server listens from
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});