const Joi = require('joi');

//Schema to match Journal/Reflection Entries
const EntrySchema = Joi.object({
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
    const {error} = UserSchema.validation(req.nody);
    if (error) {
        return res.status(400).json({Message: error.details[0].messagge})
    }
    next();
}
//Entry body validation
const validateEntry = (req,res,next) => {
    const {error} = EntrySchema.validation(req.nody);
    if (error) {
        return res.status(400).json({Message: error.details[0].messagge})
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