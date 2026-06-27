import express from 'express';
const router = express.Router();
import Person from '../person.js';

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);

        const response = await newPerson.save();

        console.log("Person data saved");

        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();

        console.log("Person data fetched");

        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get('//:workType', async (req, res) => {
    try {
        const workType = req.params.workType;

// Check if work type is valid
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {

            const response = await Person.find({ work: workType });

            console.log('Response fetched');
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





export default router;
