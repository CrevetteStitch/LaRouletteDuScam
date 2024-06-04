const Student = require('../models/students');

const data = {
    students: ["Théo", "Léo", "Matthéo", "Adrien", "Maxence"]
}

const getRandomStudent = () => {
    const random = Math.floor(Math.random() * Array.length);
    return data.students[random];
}
    


const controlStudent = {
    random : async (req, res) => {
        const data = await Student.findAll();
        console.log(data);
        const randomStudent = getRandomStudent();
        res.status(200).json({ stake: randomStudent });
    },

    create: async (req, res) => {
        console.log(req.body);
        const data = await Student.create(req.body);
           console.log(data);
           res.status(201).json({ message : "Etudiant créé" , data: req.body});
       },

    findAll : async (req, res) => {
        const data = await Student.findAll();
        res.status(200).json({students : data});
    }




}

module.exports = controlStudent;