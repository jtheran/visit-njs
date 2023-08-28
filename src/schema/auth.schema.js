import { z } from 'zod';

const registerSchema = z.object({
    username : z.string({
        required_error: 'USERNAME REQUIRED',
        max_length: 10
    }),
    email: z.string({
        required_error: 'EMAIL REQUIRED'
    }).email({
        message: 'INVALID EMAIL'
    }),
    password: z.string({
        required_error: 'PASSWORD REQUIRED'
    }).min(4,{
        message: 'PASSWORD MINIMAL CHARACTERS IS 4'
    })
});

const loginSchema = z.object({
    email: z.string({
        required_error: 'EMAIL REQUIRED'
    }).email({
        message: 'INVALID EMAIL'
    }),
    password: z.string({
        required_error: 'PASSWORD REQUIRED'
    }).min(4,{
        message: 'PASSWORD MINIMAL CHARACTERS IS 4'
    })
});


module.exports = {
    registerSchema,
    loginSchema
}