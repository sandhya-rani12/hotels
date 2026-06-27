import express from 'express';
const router = express.Router();

import MenuItem from '../MenuItem.js';

router.post('/', async (req, res) => {
    try {

        const data = req.body;

        const newMenuItem = new MenuItem(data);

        const response = await newMenuItem.save();

        console.log("Menu item saved");

        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// GET Menu Items
router.get('/', async (req, res) => {
    try {

        const data = await MenuItem.find();

        console.log("Menu data fetched");

        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router;