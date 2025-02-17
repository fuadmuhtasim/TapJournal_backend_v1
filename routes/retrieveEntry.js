const pool = require('../database/database');

const RetrieveJournalEntries = async (req,res) => {
    const query = `SELECT * FROM journal_items WHERE journal_id = $1;`
    const journal_id = req.params.journal_id;
    try {
        const client = await pool.connect();
        try {
          const results = await client.query(query, [journal_id]);
          res.json(results.rows); //Sends the journal entries in JSON format
        }
        catch(err){
            res.status(502).json({message: 'Error fetching data',
                details: err.details ? err.details.map(detail => detail.message) : []
            })
        }
        finally{
            client.release();
        }
    }
    catch(err) {
        res.status(500).json({error: 'An Error has occured connecting to the database.'})
    }
}

const RetrieveReflectionEntries = async (req,res) => {
    const query = `SELECT * FROM reflection_items WHERE reflection_id = $1;`
    const reflection_id = req.params.reflection_id;
    try {
        const client = await pool.connect();
        try {
          const results = await client.query(query, [reflection_id]);
          console.log(results);
          res.json(results.rows); //Sends the journal entries in JSON format
        }
        catch(err){
            res.status(502).json({message: 'Error fetching data',
                details: err.details ? err.details.map(detail => detail.message) : []
            })
        }
        finally{
            client.release();
        }
    }
    catch(err) {
        res.status(500).json({error: 'An Error has occured connecting to the database.'})
    }
}

// Export all functions
module.exports = {
    RetrieveJournalEntries,
    RetrieveReflectionEntries
};

