import { Router } from "express";
import { getMember, getMembers, postMember, updateMember, deleteMember } from "../controller/miembros.js"

const router = Router();

router.get('/member' , (req, res) => {
    const getAll = getMembers(req, res);
    return getAll;
});

router.get('/member/:id' , (req,res) => {
    const get = getMember(req, res);
    return get;
});

router.post('/member' , (req,res) => {
    const post = postMember(req, res);
    return post;
});

router.put('/member/:id' , (req,res) => {
    const update = updateMember(req, res);
    return update;
});

router.delete('/member/:id' , (req,res) => {
    const deleted = deleteMember(req, res);
    return deleted;
});

export default router;