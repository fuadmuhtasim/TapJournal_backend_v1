const Joi = require('joi');

//Schema to match Journal/Reflection Entries
const EntrySchema = Joi.object({
    //entering a journal_id for now to be 1
    journal_id: Joi.number().integer().required(), 
    title: Joi.string().required(),
    details: Joi.string().required()
})
//Schema to match User Registrations
const UserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required()
})
//User body validation
const validateUser = (req,res,next) => {
    const {error} = UserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({Message: 'Bad request. The body could not be validated and does not match schema for the endpoint.'})
    }
    next();
}
//Entry body validation
const validateEntry = (req,res,next) => {
    const {error} = EntrySchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: 'Bad Request', 
            details: error.details.map(detail => detail.message)
          });
    }
    next();
}
// Export all functions
module.exports = {
    validateUser,
    validateEntry,
    EntrySchema,
    UserSchema,
};