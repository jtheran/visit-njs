import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const login = async (req, res) => {
    
    const {email, password} = req.body;

    try {
        const userFound = await prisma.miembro.findUnique({
            where: {
                email : email,
            }
        });

        if(!userFound){
            return res.status(404).json({message: "USER NOT FOUND"});
        }
        const passHash = await bcrypt.compare(password, userFound.password);
        if(!passHash){
           return res.status(400).json({message: "CREDENTIALS INVALID"});
        }
        const token = await createToken({id: userFound.id});
        res.cookie('token', token);
        res.send({
            username: userFound.username,
            email: userFound.email,
            create : userFound.createdAt
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    
};

const logout = (req, res) => {
    res.cookie('token', '');
    return res.status(200).json({message: 'USER LOGGED OUT!'});
};

const profile = async (req, res) => {

    const userFound = await prisma.miembro.findUnique({
        where: {
            id: req.decoded.id,
        }    
    });
    if(!userFound){
        return res.status(404).json({message: 'USER NOT FOUND!'}); 
    }

    return res.status(200).json({
        id: userFound.id,
        email: userFound.email,
        username: userFound.username,
        create_time: userFound.createdAt
    });

};  

module.exports = {
    login,
    logout
}