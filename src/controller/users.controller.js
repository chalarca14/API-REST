import prisma from "../prismaClient.js";



// create new user 

export const createUser = async (req, res) => {
    const { name, email } = req.body;
    const newUser = await prisma.users.create({
        data: {
            name,
            email
        }
    })
    res.status(201).json(newUser)
}

// get all users 
export const getAllUsers = async (req, res) => {
    const users = await prisma.users.findMany();
    res.status(200).json(users);
}

// get user by id 

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
        where: {
            id: parseInt(id)
        }
    });
}

// update user 

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateUser = await prisma.users.update({
        where: { id: parseInt(id) },
        data: { name, email }
    })
    res.status(200).json(updateUser);
}

// delete user 

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    await prisma.users.delete({
        were: {id: parseInt(id)}
    });
    res.status(204).send();
}
