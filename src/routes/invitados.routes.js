import { Router } from "express";
import { getGuest, getGuests, postGuest, updateGuest, deleteGuest } from "../controllers/invitados.js"

const router = Router();

router.get('/guest' , (req, res) => {
    console.log('guestS ALL');
});

router.get('/guest/:id' , (req, res) => {
    console.log('guest');
});

router.post('/guest' , (req, res) => {
    console.log('guest CREATE');
});

router.put('/guest/:id' , (req, res) => {
    console.log('guest UPDATE');
});

router.delete('/guest/:id' , (req, res) => {
    console.log('guest DELETED');
});

export default router;