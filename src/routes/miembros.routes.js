import { Router } from "express";
import { getMember, getMembers, postMember, updateMember, deleteMember } from "../controllers/miembros.js"

const router = Router();

router.get('/member' , getMembers);

router.get('/member/:id' , getMember);

router.post('/member' , postMember);

router.put('/member/:id' , (req,res) => {
    const update = updateMember(req, res);
    return update;
});

router.delete('/member/:id' , (req,res) => {
    const deleted = deleteMember(req, res);
    return deleted;
});

export default router;