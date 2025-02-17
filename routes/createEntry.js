const pool = require('../database/database');

const CreateEntry = async (req,res, route) => {
    const { journal_id, title, details } = req.body;
    const query = `
            INSERT INTO ${route} (journal_id, title, description)
            VALUES ($1, $2, $3)
            `;
    try {
        const client = await pool.connect();
        try {
            await client.query(query, [journal_id, title, details]);
            res.status(201).json({
                message: 'Entry created successfully!'
            });
        }
        catch(err) {
            res.status(500).json({
                message: 'Error adding entry',
                details: err.details ? err.details.map(detail => detail.message) : err.message
            });
        }
        finally {
            client.release();
        }
    }
    catch(err) {
        res.status(500).json({error: 'An Error has occurred connecting to database.' })
    }
};

module.exports = CreateEntry;