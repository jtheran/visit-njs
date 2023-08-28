import express from 'express';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { validateSchema } from '../middlewares/validateSchema'
const router = express.Router();


router.get('/register', registerGet);

router.get('/register/:id', registerGetOne);

router.post('/register', validateSchema(registerSchema), registerPost);

router.put('/register/:id', registerUpdate);

router.delete('/register/:id', registerDelete);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', validateToken ,profile);

module.exports = router;