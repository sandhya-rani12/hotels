import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy', 'salty'],
        required: true,
    },
    ingredients: {
        type: [String],
        default: []
    }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;