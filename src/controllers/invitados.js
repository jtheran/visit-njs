import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getMember = async(req, res) => {
    try {
        let id = req.params.id;
        const resp = await prisma.miembro.findUnique({
            where: { 
                id: id
            },
        });
        if(!resp){
            return res.status(404).json({ message: "NO SE ENCONTRO AL MIEMBRO!!!"});
        }
        return res.status(200).json(resp);
    
    } catch (error) {
        return res.status(500).json({message: "ERROR DEL SERVIDOR!!!!!",
    error: error});
    }
};

const getMembers = async(req, res) => {
    try {
        const resp = await prisma.miembro.findMany();
        if(!resp){
            return res.status(404).json({ message: "NO SE ENCONTRARON LOS MIEMBROS"});
        }
        return res.status(200).json(resp);
    
    } catch (error) {
        return res.status(500).json({message: "ERROR DEL SERVIDOR!!!!!",
    error: error});
    }
};

const postMember = async(req, res) => {
    let body = req.body;
    try {
        const resp = await prisma.miembro.create({
            data:{
                nombre: body.nombre,
                apellido: body.apellido,
                email: body.email,
                telefono: body.telefono,
                direccion: body.direccion,
                edad: body.edad,
                estadoCivil: body.estadoCivil,
                red: body.red,
                lider: body.lider,
                fechaNacimiento: body.fechaNacimiento,
                sexo: body.sexo,
                cargo: body.cargo,
                trabajo: body.trabajo
            }    
        });
        if(!resp){
            return res.status(400).json({ message: "NO SE PUDO CREAR AL MIEMBRO"});
        }
        return res.status(200).json(resp);
    
    } catch (error) {
        return res.status(500).json({message: "ERROR DEL SERVIDOR!!!!!",
    error: error});
    }
};

const updateMember = async(req, res) => {
    let body = req.body;
    let id = req.params.id;
    try {
        const resp = await prisma.miembro.update({
            where: {
                id: id,
            },    
            data:{
                nombre: body.nombre,
                apellido: body.apellido,
                email: body.email,
                telefono: body.telefono,
                direccion: body.direccion,
                edad: body.edad,
                estadoCivil: body.estadoCivil,
                red: body.red,
                lider: body.lider,
                fechaNacimiento: body.fechaNacimiento,
                sexo: body.sexo,
                cargo: body.cargo,
                trabajo: body.trabajo,
            }    
        });
        if(!resp){
            return res.status(400).json({ message: "NO SE PUDO ACTUALIZAR AL MIEMBRO"});
        }
        return res.status(200).json(resp);
    
    } catch (error) {
        return res.status(500).json({message: "ERROR DEL SERVIDOR!!!!!",
    error: error});
    }
};

const deleteMember = async(req, res) => {
    try {
        let id = req.params.id;
        const resp = await prisma.miembro.delete({
            where: { 
                id: id
            },
        });
        if(!resp){
            return res.status(400).json({ message: "NO SE PUDO ELIMINAR AL MIEMBRO!!!"});
        }
        return res.status(200).json(resp);
    
    } catch (error) {
        return res.status(500).json({message: "ERROR DEL SERVIDOR!!!!!",
    error: error});
    }
};

module.exports = {
    getMember,
    getMembers,
    postMember,
    updateMember,
    deleteMember
};