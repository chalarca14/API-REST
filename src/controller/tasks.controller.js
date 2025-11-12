import prisma from "../prismaClient.js";



// crea new tasks 

export const createTasks = async (req, res ) =>{
    const {title , userId } = req.body;
    const newTasks = await prisma.tasks.create({
        data: {
            title,
            userId
        }
    }) 
    res.status(200).json(newTasks)
}

// get all tasks 

export const getAllTasks = async (req, res) =>{
    const tasks = await prisma.tasks.findMany();
    res.status(200).json(tasks)
}

// get tasks by id user 

export const getTasksByUser = async (req , res ) =>{
    const {userId} = req.params;
    const tasks = await prisma.tasks.findMany({
        where:{
            userId: parseInt (userId)
        }
    })
} 



